import Link from "next/link";
import Image from "next/image";
import { Arrow } from "@/components/arrow";
import type { Product } from "@/lib/content";
import { common } from "@/lib/copy/common";
import { localizedPath, type Locale } from "@/lib/locale";
import { breadcrumbJsonLd, productServiceJsonLd } from "@/lib/seo";

export { Arrow };
export function JsonLd({ data }: { data: object }) { return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />; }
export function PageHero({ eyebrow, title, description, dark = false }: { eyebrow: string; title: React.ReactNode; description: string; dark?: boolean }) { return <section className={dark ? "page-hero page-hero--dark" : "page-hero"}><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-hero__copy">{description}</p></div></section>; }

export function ContactCTA({ children, locale }: { children?: React.ReactNode; locale: Locale }) {
  const t = common[locale].cta;
  return <section className="cta"><div className="container cta-inner"><div><p className="eyebrow">LET&apos;S BUILD TOGETHER</p><h2>{t.title[0]}<br />{t.title[1]}</h2></div><Link className="button button--light" href={localizedPath(locale, "/contact")}>{t.button} <Arrow /></Link></div>{children && <div className="container cta-sponsor">{children}</div>}</section>;
}

export async function ProductLanding({ product, locale }: { product: Product; locale: Locale }) {
  const t = common[locale].product;
  const c = common[locale].crumbs;
  return <>
    <JsonLd data={productServiceJsonLd(product, locale)} />
    <JsonLd data={breadcrumbJsonLd([{ name: c.home, path: "/" }, { name: c.solution, path: "/product" }, { name: product.name, path: `/product/${product.slug}` }], locale)} />
    <section className={`product-hero ${product.accent}`}><div className="container product-hero__grid"><div><p className="eyebrow">{product.status}</p><h1>{product.name}</h1><p className="product-category">{product.category}</p><h2>{product.tagline}</h2><p className="product-description">{product.description}</p><div className="hero-actions">{product.demo ? <a className="button" href={product.demo} target="_blank" rel="noreferrer">{product.demoLabel ?? t.demoDefault} <Arrow /></a> : <span className="button button--disabled">{t.comingSoon}</span>}<Link className="button button--secondary" href={localizedPath(locale, "/contact")}>{t.inquiry}</Link></div></div>{product.posterImage ? <div className="product-poster"><Image src={product.posterImage} width={891} height={1270} alt={t.poster(product.name)} /></div> : <div className="product-console"><div className="console-top"><span>{product.name.toUpperCase()}</span><i /></div><div className="console-mark">{product.markImage ? <Image src={product.markImage} width={120} height={120} alt={t.icon(product.name)} /> : product.name.slice(0, 2).toUpperCase()}</div><p>{product.category}</p><div className="console-status"><span>{t.status}</span><strong>{product.demo ? t.ready : t.inDev}</strong></div></div>}</div></section>
    <section className="section"><div className="container"><div className="section-heading"><p className="eyebrow">CORE FEATURES</p><h2>{t.coreFeatures}</h2></div><div className="feature-grid">{product.features.map(([title, copy], index) => <article className="feature-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="section section--subtle"><div className="container"><div className="section-heading"><p className="eyebrow">{t.howItWorks}</p><h2>{t.howItWorksTitle}</h2></div><div className="flow-grid">{product.flow.map(([title, copy], index) => <article key={title}><span>STEP 0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="audience"><p className="eyebrow">{t.builtFor}</p><div>{product.audiences.map((item) => <span key={item}>{item}</span>)}</div></div></div></section><ContactCTA locale={locale} /></>;
}
