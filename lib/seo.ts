import type { Metadata } from "next";
import type { Product } from "@/lib/content";

export const SITE_NAME = "저비스랩스";
export const SITE_NAME_EN = "Jervis Labs";
export const SITE_TITLE = "저비스랩스 | 블록체인·Web3·AI 기술 기업";
export const SITE_DESCRIPTION = "하이브리드 블록체인, Web3, NFT, RWA·STO와 AI 창작성 증명 기술로 비즈니스의 디지털 전환을 지원합니다.";
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
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      images: [{ url: image, width: 1200, height: 630, alt: `${title} | ${SITE_NAME}` }],
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
};

export function createProductMetadata(product: Product): Metadata {
  const description = `${product.tagline} ${product.description}`.slice(0, 155).trim();
  return createPageMetadata({
    title: `${product.name} — ${product.category}`,
    description,
    path: `/product/${product.slug}`,
    image: productImages[product.slug],
  });
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productServiceJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: product.name,
    serviceType: product.category,
    description: product.description,
    url: absoluteUrl(`/product/${product.slug}`),
    provider: { "@id": `${getSiteUrl().origin}/#organization` },
    areaServed: "KR",
  };
}
