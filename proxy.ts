import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/lib/locale";

/**
 * 언어별 URL(`/en/...`, `/ko/...`, `/ja/...`) 라우팅.
 * - 접두사가 있으면 그대로 통과시키고, 마지막으로 방문한 언어를 쿠키에 기억합니다.
 * - 접두사가 없으면(예: `/about`) 기억된 언어, 없으면 KO로 리다이렉트합니다.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (isLocale(first)) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, first, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    return response;
  }

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved) ? saved : DEFAULT_LOCALE;
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // API, 관리자, Next 내부 경로, OG 이미지, 확장자가 있는 정적 파일(이미지·robots·sitemap 등)은 제외
  matcher: ["/((?!api/|admin|_next/|opengraph-image|.*\\..*).*)"],
};
