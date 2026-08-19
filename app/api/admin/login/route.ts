import { NextResponse } from "next/server";
import { ADMIN_COOKIE, adminConfigured, adminCookieOptions, createAdminSession, verifyPassword } from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!adminConfigured()) return NextResponse.json({ error: "관리자 환경 변수가 설정되지 않았습니다." }, { status: 503 });
  const body = await request.json().catch(() => null) as { password?: unknown } | null;
  if (!body || typeof body.password !== "string" || !verifyPassword(body.password)) {
    return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, createAdminSession(), adminCookieOptions);
  return response;
}

