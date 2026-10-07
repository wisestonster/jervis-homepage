import type { Metadata } from "next";
import "../globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { localeFrom, type LangParams } from "@/lib/i18n";
import { HTML_LANG, LOCALES } from "@/lib/locale";
import { absoluteUrl, createPageMetadata, getSiteUrl, siteCopy, SITE_NAME_EN } from "@/lib/seo";

/** 지원하는 3개 언어만 미리 만들고, 그 외 `/xx/...` 주소는 404 */
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFrom(params);
  const site = siteCopy(locale);
  return {
    ...createPageMetadata({ title: site.title, description: site.description, path: "/", locale }),
    metadataBase: getSiteUrl(),
    applicationName: site.name,
    title: { default: site.title, template: `%s | ${locale === "ko" ? `${site.name}(${SITE_NAME_EN})` : site.name}` },
    description: site.description,
    keywords: site.keywords,
    authors: [{ name: site.name, url: `/${locale}` }],
    creator: site.name,
    publisher: site.name,
    category: "technology",
    icons: { icon: "/favicon.svg" },
    manifest: "/manifest.webmanifest",
    formatDetection: { telephone: false, email: false, address: false },
    verification: process.env.GOOGLE_SITE_VERIFICATION
      ? {
          google: process.env.GOOGLE_SITE_VERIFICATION,
          other: process.env.NAVER_SITE_VERIFICATION ? { "naver-site-verification": process.env.NAVER_SITE_VERIFICATION } : undefined,
        }
      : process.env.NAVER_SITE_VERIFICATION
        ? { other: { "naver-site-verification": process.env.NAVER_SITE_VERIFICATION } }
        : undefined,
  };
}

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode } & LangParams>) {
  const locale = await localeFrom(params);
  const site = siteCopy(locale);
  const siteUrl = getSiteUrl().origin;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: site.name,
        alternateName: [SITE_NAME_EN, "저비스랩스", "JervisLabs", "주식회사 저비스랩스"],
        legalName: "주식회사 저비스랩스",
        url: siteUrl,
        logo: absoluteUrl("/jervis-labs-logo.png"),
        email: "wisestone@jervis.kr",
        address: {
          "@type": "PostalAddress",
          streetAddress: "디지털로27가길 17, 803호",
          addressLocality: "구로구",
          addressRegion: "서울특별시",
          postalCode: "08375",
          addressCountry: "KR",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: absoluteUrl(`/${locale}`),
        name: site.name,
        alternateName: [SITE_NAME_EN, "저비스랩스"],
        description: site.description,
        inLanguage: HTML_LANG[locale],
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return <html lang={HTML_LANG[locale]} data-scroll-behavior="smooth"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <SiteHeader locale={locale} /><main>{children}</main><SiteFooter locale={locale} />
  </body></html>;
}
