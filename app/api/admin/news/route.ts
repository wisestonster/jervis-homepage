import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { createNews, listNews } from "@/lib/news-store";
import type { CreateNewsInput } from "@/lib/news-types";

function validWebUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function GET() {
  if (!(await isAdmin()))
    return NextResponse.json({ error: "인증이 필요합니다." }, { status: 401 });
  return NextResponse.json({ items: await listNews() });
}

export async function POST(request: Request) {
  if (!(await isAdmin()))
    return NextResponse.json({ error: "인증이 필요합니다." }, { status: 401 });
  const body = (await request.json().catch(() => null)) as Record<
    string,
    unknown
  > | null;
  if (!body)
    return NextResponse.json(
      { error: "요청 형식이 올바르지 않습니다." },
      { status: 400 },
    );

  const text = (key: string) =>
    typeof body[key] === "string" ? body[key].trim() : "";
  const title = text("title");
  const summary = text("summary");
  const source = text("source");
  const sourceUrl = text("sourceUrl");
  const imageUrl = text("imageUrl");
  const status = body.visible === true ? "published" : "draft";

  if (!title || title.length > 200)
    return NextResponse.json(
      { error: "카드 제목을 200자 이내로 입력해 주세요." },
      { status: 400 },
    );
  if (!summary || summary.length > 5_000)
    return NextResponse.json(
      { error: "카드 내용을 5,000자 이내로 입력해 주세요." },
      { status: 400 },
    );
  if (!source || source.length > 100)
    return NextResponse.json(
      { error: "원문보기 표시 내용을 100자 이내로 입력해 주세요." },
      { status: 400 },
    );
  if (!sourceUrl || !validWebUrl(sourceUrl))
    return NextResponse.json(
      { error: "올바른 원문 URL을 입력해 주세요." },
      { status: 400 },
    );
  if (imageUrl && !validWebUrl(imageUrl))
    return NextResponse.json(
      { error: "올바른 이미지 URL을 입력해 주세요." },
      { status: 400 },
    );

  const input: CreateNewsInput = {
    category: text("category").slice(0, 30) || "NEWS",
    title,
    summary,
    publishedAt: text("publishedAt") || new Date().toISOString().slice(0, 10),
    source,
    sourceUrl,
    imageUrl,
    status,
  };
  return NextResponse.json({ item: await createNews(input) }, { status: 201 });
}
