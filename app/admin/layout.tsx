import type { Metadata } from "next";
import "../globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

// 관리자 화면은 언어 전환 없이 한국어로만 제공하며 검색 노출 대상이 아닙니다.
export const metadata: Metadata = {
  title: { default: "NEWS 관리자", template: "%s | 저비스랩스" },
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>
    <SiteHeader locale="ko" showLanguage={false} /><main>{children}</main><SiteFooter locale="ko" />
  </body></html>;
}
