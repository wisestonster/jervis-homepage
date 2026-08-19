import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import path from "node:path";
import { products } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";
import { listPublishedNews } from "@/lib/news-store";

// 마케팅 페이지 콘텐츠는 모두 이 파일에 있으므로, 파일 수정 시각을 실제 lastmod로 사용합니다.
const contentLastModified = statSync(
  path.join(/* turbopackIgnore: true */ process.cwd(), "lib", "content.ts"),
).mtime;

// 매 요청마다 새로 계산하지 않고 시간 단위로만 갱신해, 뉴스 등록 후에도 재배포 없이 반영되게 합니다.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [latestNews] = await listPublishedNews(1);
  const newsLastModified = latestNews ? new Date(latestNews.updatedAt) : contentLastModified;
  const homeLastModified = newsLastModified > contentLastModified ? newsLastModified : contentLastModified;

  const staticRoutes = [
    { path: "/", changeFrequency: "monthly" as const, priority: 1, lastModified: homeLastModified },
    { path: "/about", changeFrequency: "yearly" as const, priority: 0.8, lastModified: contentLastModified },
    { path: "/technology", changeFrequency: "monthly" as const, priority: 0.8, lastModified: contentLastModified },
    { path: "/project", changeFrequency: "monthly" as const, priority: 0.8, lastModified: contentLastModified },
    { path: "/product", changeFrequency: "monthly" as const, priority: 0.9, lastModified: contentLastModified },
    { path: "/news", changeFrequency: "weekly" as const, priority: 0.7, lastModified: newsLastModified },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.6, lastModified: contentLastModified },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: route.lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...products.map((product) => ({
      url: absoluteUrl(`/product/${product.slug}`),
      lastModified: contentLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

