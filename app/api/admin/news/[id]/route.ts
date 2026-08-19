import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { deleteNews, updateNews } from "@/lib/news-store";
import type { ManagedNewsItem } from "@/lib/news-types";

function validWebUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
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

  const patch: Partial<ManagedNewsItem> = {
    kind: "news",
    category: text("category").slice(0, 30) || "NEWS",
    title,
    summary,
    importance: "",
    impact: "",
    publishedAt: text("publishedAt") || new Date().toISOString().slice(0, 10),
    source,
    sourceUrl,
    imageUrl,
    sources: [{ title: source, url: sourceUrl }],
    status: body.visible === true ? "published" : "draft",
  };
  const { id } = await params;
  const item = await updateNews(id, patch);
  return item
    ? NextResponse.json({ item })
    : NextResponse.json({ error: "뉴스를 찾지 못했습니다." }, { status: 404 });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isAdmin()))
    return NextResponse.json({ error: "인증이 필요합니다." }, { status: 401 });
  const { id } = await params;
  return (await deleteNews(id))
    ? NextResponse.json({ ok: true })
    : NextResponse.json({ error: "뉴스를 찾지 못했습니다." }, { status: 404 });
}
