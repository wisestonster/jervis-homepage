import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd } from "@/components/page-ui";
import { Faq, ScreenSlot, SectionHead, ServiceCTA, ServiceHero } from "@/components/service-ui";
import { common } from "@/lib/copy/common";
import { shotx } from "@/lib/copy/shotx";
import { localeFrom, type LangParams } from "@/lib/i18n";
import { localizedPath } from "@/lib/locale";
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, getSiteUrl } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFrom(params);
  const t = shotx[locale];
  return createPageMetadata({ title: t.metaTitle, description: t.metaDesc, path: "/shot-x", image: "/images/shotx-hero.webp", locale });
}

const ACCENT = "svc--shotx";
const SHOW_FAQ = false; // FAQ 섹션은 숨김 처리(내용은 보존)

export default async function ShotXPage({ params }: LangParams) {
  const locale = await localeFrom(params);
  const t = shotx[locale];
  const c = common[locale].crumbs;
  const ctas = [{ href: localizedPath(locale, "/contact?type=Shot-X"), label: t.ctas[0] }, { href: "#process", label: t.ctas[1], secondary: true }];
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Shot-X",
    serviceType: t.serviceType,
    description: t.serviceDesc,
    url: absoluteUrl(localizedPath(locale, "/shot-x")),
    provider: { "@id": `${getSiteUrl().origin}/#organization` },
    areaServed: "KR",
  };
  return <>
    <JsonLd data={serviceJsonLd} />
    <JsonLd data={breadcrumbJsonLd([{ name: c.home, path: "/" }, { name: c.shotx, path: "/shot-x" }], locale)} />

    <ServiceHero
      accent={ACCENT}
      eyebrow="02. SHOT-X · AI SHORT-DRAMA STUDIO"
      name="Shot-X"
      title={<>{t.hero.title[0]}<br />{t.hero.title[1]}</>}
      lede={t.hero.lede}
      tags={t.hero.tags}
      ctas={ctas}
      image="/images/shotx-hero.webp"
      imageAlt={t.hero.alt}
    />

    <section className="section">
      <div className="container">
        <SectionHead eyebrow="THE PROBLEM" title={t.problemHead} />
        <div className="svc-grid svc-grid--2">{t.problems.map(([title, copy], index) => <article className="svc-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="section section--subtle">
      <div className="container">
        <SectionHead eyebrow="WHY SHOT-X" title={t.whyHead} />
        <div className="svc-grid svc-grid--3">{t.differences.map(([title, copy], index) => <article className="svc-card svc-card--tall" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <div className="svc-slot-wrap"><ScreenSlot label={t.dash.label} src="/images/shotx-dashboard.webp" ratio="1911 / 902" alt={t.dash.alt} /></div>
      </div>
    </section>

    <section className="section" id="process">
      <div className="container">
        <SectionHead eyebrow="10-STEP PROCESS" title={t.processHead} copy={t.processCopy} />
        <figure className="svc-figure svc-figure--wide">
          <Image src="/images/shotx-pipeline.webp" width={1600} height={270} alt={t.pipelineAlt} sizes="(max-width: 980px) 100vw, 1100px" />
        </figure>
        <ol className="svc-steps">{t.steps.map(([no, title, copy, output]) => <li key={no}><span className="svc-steps__no">{no}</span><div><h3>{title}</h3><p>{copy}</p></div><span className="svc-steps__out"><small>{t.resultLabel}</small>{output}</span></li>)}</ol>
      </div>
    </section>

    <section className="section section--subtle">
      <div className="container">
        <SectionHead eyebrow="KEY FEATURES" title={t.featuresHead} />
        <div className="svc-grid svc-grid--2">
          {t.features.slice(0, 2).map(([title, copy]) => <article className="svc-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          <article className="svc-card"><h3>{t.predict.title}</h3><p>{t.predict.body}</p></article>
          {t.features.slice(2).map(([title, copy]) => <article className="svc-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHead eyebrow="BUILT FOR" title={t.audienceHead} />
        <div className="svc-grid svc-grid--3">{t.audiences.map(([title, copy]) => <article className="svc-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHead eyebrow="TRUST & SAFETY" title={t.trustHead} />
        <ul className="svc-checks">{t.trust.map(([title, copy]) => <li key={title}><strong>{title}</strong><p>{copy}</p></li>)}</ul>
      </div>
    </section>

    {SHOW_FAQ && (
    <section className="section">
      <div className="container svc-faq-layout">
        <SectionHead eyebrow="FAQ" title={t.faqHead} />
        <Faq items={t.faq} />
      </div>
    </section>
    )}

    <section className="section section--subtle">
      <div className="container">
        <SectionHead eyebrow="COMING SOON" title={t.soon.head} />
        <ul className="svc-soon svc-soon--grid">
          {t.soon.items.map(([title, body]) => <li key={title}><strong>{title}</strong>{body}</li>)}
        </ul>
        <p className="svc-note">{t.soon.note}</p>
        <p className="svc-note">{t.soon.alpha}</p>
      </div>
    </section>

    <ServiceCTA accent={ACCENT} title={<>{t.cta.title[0]}<br />{t.cta.title[1]}</>} copy={t.cta.copy} ctas={[{ href: localizedPath(locale, "/contact?type=Shot-X"), label: t.ctas[2] }, { href: localizedPath(locale, "/contact?type=Shot-X"), label: t.ctas[3], secondary: true }]} />
  </>;
}
