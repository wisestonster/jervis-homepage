import "server-only";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/locale";

/** `app/[lang]` 아래 모든 페이지·레이아웃이 받는 params 형태 */
export type LangParams = { params: Promise<{ lang: string }> };

/** URL의 `[lang]` 세그먼트를 검증해 Locale로 돌려줍니다. 지원하지 않는 값이면 404. */
export async function localeFrom(params: LangParams["params"]): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}
