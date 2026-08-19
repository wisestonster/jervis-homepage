import Link from "next/link";
import { PageHero, JsonLd } from "@/components/page-ui";
import { NewsCard } from "@/components/news-card";
import { listPublishedNewsPage } from "@/lib/news-store";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "뉴스",
  description: "블록체인, Web3, RWA, STO, DAO 분야의 최신 뉴스와 연구·기업 동향을 한국어 브리핑으로 제공합니다.",
  path: "/news",
});
export const dynamic = "force-dynamic";

const PAGE_SIZE = 9;

function pageHref(page: number) {
  return page === 1 ? "/news" : `/news?page=${page}`;
}

function paginationItems(current: number, total: number) {
  const pages = Array.from(
    new Set([1, total, current - 2, current - 1, current, current + 1, current + 2]),
  )
    .filter((page) => page >= 1 && page <= total)
    .sort((a, b) => a - b);
  const result: Array<number | "ellipsis"> = [];
  pages.forEach((page, index) => {
    if (index > 0 && page - pages[index - 1] > 1) result.push("ellipsis");
    result.push(page);
  });
  return result;
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const value = (await searchParams).page;
  const requestedPage = Number.parseInt(Array.isArray(value) ? value[0] : value || "1", 10);
  const { items, page, totalPages } = await listPublishedNewsPage(requestedPage, PAGE_SIZE);
  const pagination = paginationItems(page, totalPages);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "홈", path: "/" }, { name: "뉴스", path: "/news" }])} />
      <PageHero
        eyebrow="05. NEWS"
        title={<>Web3의 변화를<br />가장 가까이에서</>}
        description="블록체인, Web3, RWA, STO, DAO 분야의 뉴스와 연구·기업 발표를 검증된 출처 중심으로 정리합니다."
      />
      <section className="section section--subtle">
        <div className="container">
          <div className="news-grid news-grid--all">
            {items.map((item) => <NewsCard item={item} key={item.id} />)}
            {items.length === 0 && <p className="news-empty">게시된 뉴스가 없습니다.</p>}
          </div>
          {totalPages > 1 && (
            <nav className="news-pagination" aria-label="뉴스 페이지">
              {page > 1
                ? <Link className="news-pagination__direction" href={pageHref(page - 1)} rel="prev">이전</Link>
                : <span className="news-pagination__direction is-disabled" aria-disabled="true">이전</span>}
              <div className="news-pagination__pages">
                {pagination.map((item, index) => item === "ellipsis"
                  ? <span className="news-pagination__ellipsis" key={`ellipsis-${index}`} aria-hidden="true">…</span>
                  : <Link className={item === page ? "is-active" : ""} href={pageHref(item)} aria-current={item === page ? "page" : undefined} key={item}>{item}</Link>)}
              </div>
              {page < totalPages
                ? <Link className="news-pagination__direction" href={pageHref(page + 1)} rel="next">다음</Link>
                : <span className="news-pagination__direction is-disabled" aria-disabled="true">다음</span>}
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
