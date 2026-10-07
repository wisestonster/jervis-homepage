"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { HTML_LANG, LOCALES, LOCALE_COOKIE, LOCALE_LABELS, LOCALE_NAMES, localizedPath, stripLocale, type Locale } from "@/lib/locale";

function persistLocale(next: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
}

/** GNB 언어 선택: 같은 페이지의 다른 언어 주소(`/ko/about` → `/ja/about`)로 이동합니다. */
export function LanguageSwitcher({ locale, label, onChange }: { locale: Locale; label: string; onChange?: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  function choose(next: Locale) {
    if (next === locale) return;
    persistLocale(next);
    onChange?.();
    const target = `${localizedPath(next, stripLocale(pathname))}${window.location.search}${window.location.hash}`;
    startTransition(() => router.push(target));
  }

  return <div className="lang-switch" role="group" aria-label={label} aria-busy={pending}>
    {LOCALES.map((code) => <button
      key={code}
      type="button"
      lang={HTML_LANG[code]}
      title={LOCALE_NAMES[code]}
      aria-label={LOCALE_NAMES[code]}
      aria-pressed={code === locale}
      className={code === locale ? "is-active" : undefined}
      onClick={() => choose(code)}
    >{LOCALE_LABELS[code]}</button>)}
  </div>;
}
