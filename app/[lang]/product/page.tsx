import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero, Arrow, ContactCTA, JsonLd } from "@/components/page-ui";
import { common } from "@/lib/copy/common";
import { getLocalizedProducts, solutionPage } from "@/lib/copy/web3";
import { localeFrom, type LangParams } from "@/lib/i18n";
import { localizedPath } from "@/lib/locale";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFrom(params);
  return createPageMetadata({ title: solutionPage[locale].metaTitle, description: solutionPage[locale].metaDesc, path: "/product", locale });
}

const images: Record<string, string> = {
  jervisbox: "/solution-jervisbox.webp",
  artpass: "/solution-artpass.webp",
  jervix: "/solution-jervix.webp",
  dokreels: "/solution-dokreels.webp",
  melomancedao: "/solution-melomancedao.png",
  coresetdao: "/solution-coresetdao.png",
  keedarifunding: "/solution-keedarifunding.png",
};

export default async function SolutionPage({ params }: LangParams) {
  const locale = await localeFrom(params);
  const t = solutionPage[locale];
  const c = common[locale].crumbs;
  const products = getLocalizedProducts(locale);
  return <>
    <JsonLd data={breadcrumbJsonLd([{ name: c.home, path: "/" }, { name: c.solution, path: "/product" }], locale)} />
    <PageHero
      eyebrow="WEB3 · SOLUTION"
      title={<>{t.heroTitle[0]}<br />{t.heroTitle[1]}</>}
      description={t.heroDesc}
    />
    <section className="section solution-section">
      <div className="container">
        <div className="solution-list">
          {products.map((solution, index) => (
            <Link href={localizedPath(locale, `/product/${solution.slug}`)} className={`solution-list__item ${solution.accent}`} key={solution.slug}>
              <div className="solution-list__index"><span>0{index + 1}</span><small>{solution.status}</small></div>
              <div className="solution-list__copy">
                <p>{solution.category}</p>
                <h2>{solution.name}</h2>
                <h3>{solution.tagline}</h3>
                <div className="solution-list__description">{solution.description}</div>
                <strong>{t.explore} <Arrow /></strong>
              </div>
              <div className="solution-list__visual">
                <Image src={images[solution.slug]} width={800} height={800} alt={t.alts[solution.slug]} priority={index === 0} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <ContactCTA locale={locale} />
  </>;
}
