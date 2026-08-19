import "server-only";

import { existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import { newsItems as legacyNewsItems } from "@/lib/content";
import type {
  CreateNewsInput,
  ManagedNewsItem,
  NewsKind,
  NewsSource,
  NewsStatus,
} from "@/lib/news-types";

type NewsRow = {
  id: string;
  kind: NewsKind;
  category: string;
  title: string;
  summary: string;
  importance: string;
  impact: string;
  published_at: string;
  source: string;
  source_url: string;
  image_url: string;
  sources_json: string;
  status: NewsStatus;
  collected_at: string;
  created_at: string;
  updated_at: string;
};

const defaultDatabasePath = path.join(
  /* turbopackIgnore: true */ process.cwd(),
  "data",
  "news.db",
);
const databasePath = process.env.NEWS_DB_PATH
  ? path.resolve(/* turbopackIgnore: true */ process.env.NEWS_DB_PATH)
  : defaultDatabasePath;
const legacyJsonPath = path.join(
  /* turbopackIgnore: true */ process.cwd(),
  "data",
  "news.json",
);

const globalDatabase = globalThis as typeof globalThis & {
  __jervisNewsDatabase?: DatabaseSync;
  __jervisNewsDatabasePath?: string;
};

function mapRow(row: NewsRow): ManagedNewsItem {
  let sources: NewsSource[] = [];
  try {
    const parsed: unknown = JSON.parse(row.sources_json);
    if (Array.isArray(parsed)) sources = parsed as NewsSource[];
  } catch {
    sources = [];
  }
  return {
    id: row.id,
    kind: row.kind,
    category: row.category,
    title: row.title,
    summary: row.summary,
    importance: row.importance,
    impact: row.impact,
    publishedAt: row.published_at,
    source: row.source,
    sourceUrl: row.source_url,
    imageUrl: row.image_url,
    sources,
    status: row.status,
    collectedAt: row.collected_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function legacySeed(): ManagedNewsItem[] {
  const now = new Date().toISOString();
  return legacyNewsItems.map((item, index) => ({
    id: `legacy-${index + 1}`,
    kind: "news",
    category: item.category,
    title: item.title,
    summary: item.summary,
    importance:
      "Web3 및 디지털 자산 시장의 주요 흐름을 파악하는 데 참고할 수 있습니다.",
    impact: "원문과 후속 발표를 확인해 사업 및 기술 전략에 반영할 수 있습니다.",
    publishedAt: item.date.replaceAll(".", "-").replace(/-$/, ""),
    source: item.source,
    sourceUrl: item.url,
    imageUrl: item.image,
    sources: [{ title: item.source, url: item.url }],
    status: "published",
    collectedAt: now,
    createdAt: now,
    updatedAt: now,
  }));
}

function insertItem(database: DatabaseSync, item: ManagedNewsItem) {
  database
    .prepare(
      `
    INSERT INTO news_items (
      id, kind, category, title, summary, importance, impact, published_at,
      source, source_url, image_url, sources_json, status, collected_at, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `,
    )
    .run(
      item.id,
      item.kind,
      item.category,
      item.title,
      item.summary,
      item.importance,
      item.impact,
      item.publishedAt,
      item.source,
      item.sourceUrl,
      item.imageUrl,
      JSON.stringify(item.sources),
      item.status,
      item.collectedAt,
      item.createdAt,
      item.updatedAt,
    );
}

function migrateJson(database: DatabaseSync) {
  const migrated = database
    .prepare("SELECT value FROM app_meta WHERE key = ?")
    .get("json_migrated") as { value?: string } | undefined;
  if (migrated) return;

  const count = Number(
    (
      database.prepare("SELECT COUNT(*) AS count FROM news_items").get() as {
        count: number | bigint;
      }
    ).count,
  );
  let items: ManagedNewsItem[] = [];
  if (count === 0 && existsSync(legacyJsonPath)) {
    const parsed: unknown = JSON.parse(readFileSync(legacyJsonPath, "utf8"));
    if (!Array.isArray(parsed))
      throw new Error("기존 news.json 형식이 올바르지 않습니다.");
    items = parsed as ManagedNewsItem[];
  } else if (count === 0) {
    items = legacySeed();
  }

  database.exec("BEGIN IMMEDIATE");
  try {
    for (const item of items) insertItem(database, item);
    database
      .prepare("INSERT INTO app_meta (key, value) VALUES (?, ?)")
      .run("json_migrated", new Date().toISOString());
    database.exec("COMMIT");
  } catch (error) {
    database.exec("ROLLBACK");
    throw error;
  }
}

function getDatabase() {
  if (
    globalDatabase.__jervisNewsDatabase &&
    globalDatabase.__jervisNewsDatabasePath === databasePath
  ) {
    return globalDatabase.__jervisNewsDatabase;
  }
  mkdirSync(path.dirname(databasePath), { recursive: true });
  const database = new DatabaseSync(databasePath);
  database.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA synchronous = NORMAL;
    PRAGMA busy_timeout = 5000;
    CREATE TABLE IF NOT EXISTS app_meta (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    ) STRICT;
    CREATE TABLE IF NOT EXISTS news_items (
      id TEXT PRIMARY KEY,
      kind TEXT NOT NULL CHECK (kind IN ('news', 'paper', 'company', 'report', 'social')),
      category TEXT NOT NULL,
      title TEXT NOT NULL,
      summary TEXT NOT NULL,
      importance TEXT NOT NULL,
      impact TEXT NOT NULL,
      published_at TEXT NOT NULL,
      source TEXT NOT NULL,
      source_url TEXT NOT NULL,
      image_url TEXT NOT NULL,
      sources_json TEXT NOT NULL DEFAULT '[]',
      status TEXT NOT NULL CHECK (status IN ('draft', 'published')),
      collected_at TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    ) STRICT;
    CREATE INDEX IF NOT EXISTS idx_news_status_published ON news_items(status, published_at DESC);
  `);
  migrateJson(database);
  globalDatabase.__jervisNewsDatabase = database;
  globalDatabase.__jervisNewsDatabasePath = databasePath;
  return database;
}

export async function listNews() {
  const rows = getDatabase()
    .prepare(
      "SELECT * FROM news_items ORDER BY published_at DESC, created_at DESC",
    )
    .all() as unknown as NewsRow[];
  return rows.map(mapRow);
}

export async function listPublishedNews(limit?: number) {
  const database = getDatabase();
  const rows =
    typeof limit === "number"
      ? database
          .prepare(
            "SELECT * FROM news_items WHERE status = 'published' ORDER BY published_at DESC, created_at DESC LIMIT ?",
          )
          .all(limit)
      : database
          .prepare(
            "SELECT * FROM news_items WHERE status = 'published' ORDER BY published_at DESC, created_at DESC",
          )
          .all();
  return (rows as unknown as NewsRow[]).map(mapRow);
}

export async function listPublishedNewsPage(requestedPage: number, pageSize = 9) {
  const database = getDatabase();
  const total = Number(
    (
      database
        .prepare("SELECT COUNT(*) AS count FROM news_items WHERE status = 'published'")
        .get() as { count: number | bigint }
    ).count,
  );
  const safePageSize = Math.max(1, Math.trunc(pageSize));
  const totalPages = Math.max(1, Math.ceil(total / safePageSize));
  const page = Math.min(Math.max(1, Math.trunc(requestedPage) || 1), totalPages);
  const rows = database
    .prepare(
      "SELECT * FROM news_items WHERE status = 'published' ORDER BY published_at DESC, created_at DESC LIMIT ? OFFSET ?",
    )
    .all(safePageSize, (page - 1) * safePageSize) as unknown as NewsRow[];
  return { items: rows.map(mapRow), page, pageSize: safePageSize, total, totalPages };
}

export async function createNews(input: CreateNewsInput) {
  const database = getDatabase();
  const now = new Date().toISOString();
  const item: ManagedNewsItem = {
    ...input,
    id: randomUUID(),
    kind: "news",
    importance: "",
    impact: "",
    sources: [{ title: input.source, url: input.sourceUrl }],
    collectedAt: now,
    createdAt: now,
    updatedAt: now,
  };
  insertItem(database, item);
  return item;
}

export async function updateNews(id: string, patch: Partial<ManagedNewsItem>) {
  const database = getDatabase();
  const row = database
    .prepare("SELECT * FROM news_items WHERE id = ?")
    .get(id) as unknown as NewsRow | undefined;
  if (!row) return null;
  const current = mapRow(row);
  const next: ManagedNewsItem = {
    ...current,
    ...patch,
    id: current.id,
    collectedAt: current.collectedAt,
    createdAt: current.createdAt,
    updatedAt: new Date().toISOString(),
  };
  database
    .prepare(
      `
    UPDATE news_items SET kind = ?, category = ?, title = ?, summary = ?, importance = ?, impact = ?,
      published_at = ?, source = ?, source_url = ?, image_url = ?, sources_json = ?, status = ?, updated_at = ?
    WHERE id = ?
  `,
    )
    .run(
      next.kind,
      next.category,
      next.title,
      next.summary,
      next.importance,
      next.impact,
      next.publishedAt,
      next.source,
      next.sourceUrl,
      next.imageUrl,
      JSON.stringify(next.sources),
      next.status,
      next.updatedAt,
      id,
    );
  return next;
}

export async function deleteNews(id: string) {
  const result = getDatabase()
    .prepare("DELETE FROM news_items WHERE id = ?")
    .run(id);
  return result.changes > 0;
}
