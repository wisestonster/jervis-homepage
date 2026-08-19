import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getPageMetadata } from "@/lib/page-metadata";

export const maxDuration = 20;

export async function POST(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "인증이 필요합니다." }, { status: 401 });
  const body = await request.json().catch(() => null) as { url?: unknown } | null;
  const url = typeof body?.url === "string" ? body.url.trim() : "";
  if (!url) return NextResponse.json({ error: "뉴스 원문 URL을 입력해 주세요." }, { status: 400 });
  try {
    return NextResponse.json({ metadata: await getPageMetadata(url) });
  } catch (error) {
    const message = error instanceof Error ? error.message : "메타데이터를 가져오지 못했습니다.";
    return NextResponse.json({ error: message }, { status: 422 });
  }
}
