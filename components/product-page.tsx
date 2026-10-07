import type { Metadata } from "next";
import { ProductLanding } from "@/components/page-ui";
import { getLocalizedProduct } from "@/lib/copy/web3";
import { localeFrom, type LangParams } from "@/lib/i18n";
import { createProductMetadata } from "@/lib/seo";

/** `/product/[slug]` 개별 페이지가 공통으로 쓰는 메타데이터/본문 팩토리 */
export function productMetadata(slug: string) {
  return async function generateMetadata({ params }: LangParams): Promise<Metadata> {
    const locale = await localeFrom(params);
    return createProductMetadata(getLocalizedProduct(slug, locale), locale);
  };
}

export function productPage(slug: string) {
  return async function Page({ params }: LangParams) {
    const locale = await localeFrom(params);
    return <ProductLanding product={getLocalizedProduct(slug, locale)} locale={locale} />;
  };
}
