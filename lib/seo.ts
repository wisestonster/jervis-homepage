import type { Metadata } from "next";
import type { Product } from "@/lib/content";
import { common } from "@/lib/copy/common";
import { DEFAULT_LOCALE, LOCALES, localizedPath, OG_LOCALE, type Locale } from "@/lib/locale";

export const SITE_NAME_EN = "Jervis Labs";

/** 언어별 사이트 이름/제목/설명 */
export function siteCopy(locale: Locale = DEFAULT_LOCALE) {
  return common[locale].site;
}

export const DEFAULT_SITE_URL = "https://jervis.kr";

export function getSiteUrl(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  try {
    return new URL(configuredUrl || DEFAULT_SITE_URL);
  } catch {
    return new URL(DEFAULT_SITE_URL);
  }
}

export function absoluteUrl(path: string): string {
  return new URL(path, getSiteUrl()).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
  locale = DEFAULT_LOCALE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  locale?: Locale;
}): Metadata {
  const siteName = siteCopy(locale).name;
  return {
    title,
    description,
    alternates: {
      canonical: localizedPath(locale, path),
      languages: {
        ...Object.fromEntries(LOCALES.map((code) => [code, localizedPath(code, path)])),
        "x-default": localizedPath(DEFAULT_LOCALE, path),
      },
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale],
      siteName,
      title,
      description,
      url: localizedPath(locale, path),
      images: [{ url: image, width: 1200, height: 630, alt: `${title} | ${siteName}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

const productImages: Record<string, string> = {
  jervisbox: "/solution-jervisbox.webp",
  artpass: "/solution-artpass.webp",
  jervix: "/solution-jervix.webp",
  dokreels: "/solution-dokreels.webp",
  melomancedao: "/solution-melomancedao.png",
  coresetdao: "/solution-coresetdao.png",
  keedarifunding: "/solution-keedarifunding.png",
};

export function createProductMetadata(product: Product, locale: Locale = DEFAULT_LOCALE): Metadata {
  const description = `${product.tagline} ${product.description}`.slice(0, 155).trim();
  return createPageMetadata({
    title: `${product.name} — ${product.category}`,
    description,
    path: `/product/${product.slug}`,
    image: productImages[product.slug],
    locale,
  });
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>, locale: Locale = DEFAULT_LOCALE) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(localizedPath(locale, item.path)),
    })),
  };
}

export function productServiceJsonLd(product: Product, locale: Locale = DEFAULT_LOCALE) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: product.name,
    serviceType: product.category,
    description: product.description,
    url: absoluteUrl(localizedPath(locale, `/product/${product.slug}`)),
    provider: { "@id": `${getSiteUrl().origin}/#organization` },
    areaServed: "KR",
  };
}
