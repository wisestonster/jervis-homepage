import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, JsonLd } from "@/components/page-ui";
import { NewsCard } from "@/components/news-card";
import { common } from "@/lib/copy/common";
import { localeFrom, type LangParams } from "@/lib/i18n";
import { listPublishedNewsPage } from "@/lib/news-store";
import { localizedPath, type Locale } from "@/lib/locale";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFrom(params);
  const t = common[locale].news;
  return createPageMetadata({ title: t.metaTitle, description: t.metaDescription, path: "/news", locale });
}
export const dynamic = "force-dynamic";

const PAGE_SIZE = 9;

function pageHref(locale: Locale, page: number) {
  return localizedPath(locale, page === 1 ? "/news" : `/news?page=${page}`);
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
  params,
  searchParams,
}: LangParams & {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const locale = await localeFrom(params);
  const t = common[locale].news;
  const c = common[locale].crumbs;
  const value = (await searchParams).page;
  const requestedPage = Number.parseInt(Array.isArray(value) ? value[0] : value || "1", 10);
  const { items, page, totalPages } = await listPublishedNewsPage(requestedPage, PAGE_SIZE);
  const pagination = paginationItems(page, totalPages);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: c.home, path: "/" }, { name: c.news, path: "/news" }], locale)} />
      <PageHero eyebrow="05. NEWS" title={t.heroTitle} description={t.heroDescription} />
      <section className="section section--subtle">
        <div className="container">
          {t.note && <p className="muted news-note">{t.note}</p>}
          <div className="news-grid news-grid--all">
            {items.map((item) => <NewsCard item={item} locale={locale} key={item.id} />)}
            {items.length === 0 && <p className="news-empty">{t.empty}</p>}
          </div>
          {totalPages > 1 && (
            <nav className="news-pagination" aria-label={t.pagination}>
              {page > 1
                ? <Link className="news-pagination__direction" href={pageHref(locale, page - 1)} rel="prev">{t.prev}</Link>
                : <span className="news-pagination__direction is-disabled" aria-disabled="true">{t.prev}</span>}
              <div className="news-pagination__pages">
                {pagination.map((item, index) => item === "ellipsis"
                  ? <span className="news-pagination__ellipsis" key={`ellipsis-${index}`} aria-hidden="true">…</span>
                  : <Link className={item === page ? "is-active" : ""} href={pageHref(locale, item)} aria-current={item === page ? "page" : undefined} key={item}>{item}</Link>)}
              </div>
              {page < totalPages
                ? <Link className="news-pagination__direction" href={pageHref(locale, page + 1)} rel="next">{t.next}</Link>
                : <span className="news-pagination__direction is-disabled" aria-disabled="true">{t.next}</span>}
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
