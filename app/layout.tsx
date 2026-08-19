import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { absoluteUrl, createPageMetadata, getSiteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_NAME_EN, SITE_TITLE } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({ title: SITE_TITLE, description: SITE_DESCRIPTION, path: "/" }),
  metadataBase: getSiteUrl(),
  applicationName: SITE_NAME,
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  keywords: ["저비스랩스", "Jervis Labs", "블록체인", "Web3", "RWA", "STO", "NFT", "AI 저작권", "토큰화"],
  authors: [{ name: SITE_NAME, url: "/" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: false, email: false, address: false },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteUrl = getSiteUrl().origin;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: SITE_NAME,
        alternateName: SITE_NAME_EN,
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
        url: siteUrl,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "ko-KR",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return <html lang="ko"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <SiteHeader /><main>{children}</main><SiteFooter />
  </body></html>;
}
