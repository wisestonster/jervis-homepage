import type { NextConfig } from "next";

function configuredSiteHost(): string | null {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return null;
  try {
    return new URL(configured).hostname;
  } catch {
    return null;
  }
}

const siteHost = configuredSiteHost();

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "www.investors.com" },
      { protocol: "https", hostname: "www.tbstat.com" },
    ],
  },
  // 로컬 호스트가 아닌 도메인(NEXT_PUBLIC_SITE_URL)으로 `next dev`에 접속할 때
  // 개발용 리소스(webpack-hmr 등)가 차단되지 않도록 허용합니다.
  ...(siteHost ? { allowedDevOrigins: [siteHost] } : {}),
};

export default nextConfig;
