export const LOCALES = ["en", "ko", "ja"] as const;
export type Locale = (typeof LOCALES)[number];

/** 처음 방문한 사용자에게 보여 줄 기본 언어 */
export const DEFAULT_LOCALE: Locale = "en";
/** 마지막으로 선택한 언어를 기억하는 쿠키(접두사 없는 주소로 들어온 방문자를 리다이렉트할 때만 사용) */
export const LOCALE_COOKIE = "lang";

/** GNB에 표시되는 언어 코드 */
export const LOCALE_LABELS: Record<Locale, string> = { en: "EN", ko: "KR", ja: "JP" };
export const LOCALE_NAMES: Record<Locale, string> = { en: "English", ko: "한국어", ja: "日本語" };
export const HTML_LANG: Record<Locale, string> = { en: "en", ko: "ko", ja: "ja" };
export const OG_LOCALE: Record<Locale, string> = { en: "en_US", ko: "ko_KR", ja: "ja_JP" };

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** `/about` → `/ko/about`, `/` → `/ko`. 쿼리(`?type=`)는 유지하고, `#anchor`·외부 주소는 그대로 둡니다. */
export function localizedPath(locale: Locale, path: string): string {
  if (!path.startsWith("/")) return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/?") || path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

/** `/ko/about` → `/about` (접두사가 없으면 그대로) */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");
  if (!isLocale(first)) return pathname || "/";
  return rest.length ? `/${rest.join("/")}` : "/";
}
