import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd } from "@/components/page-ui";
import { Faq, ScreenSlot, SectionHead, ServiceCTA, ServiceHero } from "@/components/service-ui";
import { cinemind } from "@/lib/copy/cinemind";
import { common } from "@/lib/copy/common";
import { localeFrom, type LangParams } from "@/lib/i18n";
import { localizedPath } from "@/lib/locale";
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, getSiteUrl } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFrom(params);
  const t = cinemind[locale];
  return createPageMetadata({ title: t.metaTitle, description: t.metaDesc, path: "/cinemind", image: "/images/cinemind-hero.webp", locale });
}

const ACCENT = "svc--cinemind";
const SHOW_FAQ = false; // FAQ 섹션은 숨김 처리(내용은 보존)

export default async function CinemindPage({ params }: LangParams) {
  const locale = await localeFrom(params);
  const t = cinemind[locale];
  const c = common[locale].crumbs;
  const ctas = [{ href: localizedPath(locale, "/contact?type=Cinemind"), label: t.ctas[0] }, { href: "#how", label: t.ctas[1], secondary: true }];
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cinemind",
    serviceType: t.serviceType,
    description: t.serviceDesc,
    url: absoluteUrl(localizedPath(locale, "/cinemind")),
    provider: { "@id": `${getSiteUrl().origin}/#organization` },
    areaServed: "KR",
  };
  return <>
    <JsonLd data={serviceJsonLd} />
    <JsonLd data={breadcrumbJsonLd([{ name: c.home, path: "/" }, { name: c.cinemind, path: "/cinemind" }], locale)} />

    <ServiceHero
      accent={ACCENT}
      eyebrow="01. CINEMIND · SWARM-INTELLIGENCE PREDICTION ENGINE"
      name="Cinemind"
      title={<>{t.hero.title[0]}<br />{t.hero.title[1]}</>}
      lede={t.hero.lede}
      tags={t.hero.tags}
      ctas={ctas}
      image="/images/cinemind-hero.webp"
      imageAlt={t.hero.alt}
    />

    <section className="section">
      <div className="container">
        <SectionHead eyebrow="THE PROBLEM" title={t.problemHead} />
        <div className="svc-grid svc-grid--2">{t.problems.map(([title, copy], index) => <article className="svc-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <aside className="svc-stat"><strong>-33.1%</strong><div><p>{t.stat.text}</p><small>{t.stat.source}</small></div></aside>
      </div>
    </section>

    <section className="section section--subtle" id="how">
      <div className="container">
        <SectionHead eyebrow="WHY CINEMIND" title={t.whyHead} />
        <div className="svc-grid svc-grid--3">{t.differences.map(([title, copy], index) => <article className="svc-card svc-card--tall" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <figure className="svc-figure">
          <Image src="/images/cinemind-network.webp" width={1600} height={905} alt={t.fig.alt} sizes="(max-width: 980px) 100vw, 1100px" />
          <figcaption><strong>{t.fig.title}</strong> {t.fig.copy}</figcaption>
        </figure>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHead eyebrow="HOW IT WORKS" title={t.howHead} copy={t.howCopy} />
        <ol className="svc-steps">{t.steps.map(([no, title, copy, output]) => <li key={no}><span className="svc-steps__no">{no}</span><div><h3>{title}</h3><p>{copy}</p></div><span className="svc-steps__out"><small>{t.resultLabel}</small>{output}</span></li>)}</ol>
        <div className="svc-slot-wrap"><ScreenSlot label={t.dash.label} src="/images/cinemind-dashboard.webp" ratio="1819 / 909" alt={t.dash.alt} /></div>
      </div>
    </section>

    <section className="section section--subtle">
      <div className="container">
        <SectionHead eyebrow="KEY FEATURES" title={t.featuresHead} />
        <div className="svc-grid svc-grid--2">
          <article className="svc-card"><div><h3>{t.cards.analysis.title}</h3><p>{t.cards.analysis.body}</p></div></article>
          <article className="svc-card"><div><h3>{t.cards.fit.title}</h3><p>{t.cards.fit.body}</p></div></article>
          <article className="svc-card">
            <div>
              <h3>{t.cards.conditionsTitle}</h3>
              <ul className="svc-defs">{t.conditions.map(([title, copy]) => <li key={title}><strong>{title}</strong><span>{copy}</span></li>)}</ul>
            </div>
          </article>
          <article className="svc-card">
            <div>
              <h3>{t.cards.reportTitle}</h3>
              <p>{t.cards.reportIntro}</p>
              <ol className="svc-defs svc-defs--num">{t.reportItems.map(([title, copy]) => <li key={title}><strong>{title}</strong><span>{copy}</span></li>)}</ol>
            </div>
          </article>
          <article className="svc-card">
            <div><h3>{t.cards.interview.title}</h3><p>{t.cards.interview.body}</p><h3 className="svc-feature__sub">{t.cards.interview.subTitle}</h3><p>{t.cards.interview.subBody}</p></div>
          </article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHead eyebrow="USE CASE" title={t.useCase.head} copy={t.useCase.copy} />
        <div className="svc-paths">
          <article className="svc-path svc-path--down"><p className="svc-path__who">{t.useCase.down.who}</p><ol>{t.useCase.down.steps.map((step) => <li key={step}>{step}</li>)}</ol><strong>{t.useCase.down.result}</strong></article>
          <article className="svc-path svc-path--up"><p className="svc-path__who">{t.useCase.up.who}</p><ol>{t.useCase.up.steps.map((step) => <li key={step}>{step}</li>)}</ol><strong>{t.useCase.up.result}</strong></article>
        </div>
        <p className="svc-note">{t.useCase.note}</p>
        <h3 className="svc-sub">{t.useCase.qTitle}</h3>
        <ul className="svc-questions">{t.questions.map((q) => <li key={q}>{q}</li>)}</ul>
      </div>
    </section>

    <section className="section section--subtle">
      <div className="container">
        <SectionHead eyebrow="BUILT FOR" title={t.audienceHead} />
        <div className="svc-grid svc-grid--2">{t.audiences.map(([title, copy]) => <article className="svc-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHead eyebrow="TRUST & SAFETY" title={t.trustHead} />
        <ul className="svc-checks">{t.trust.map(([title, copy]) => <li key={title}><strong>{title}</strong><p>{copy}</p></li>)}</ul>
      </div>
    </section>

    <section className="section section--subtle" id="pilot">
      <div className="container">
        <SectionHead eyebrow="ENGAGEMENT" title={t.engagement.head} copy={t.engagement.copy} />
        <h3 className="svc-sub">{t.engagement.pilotTitle}</h3>
        <p className="svc-lede">{t.engagement.lede}</p>
        <ol className="svc-steps svc-steps--compact">{t.pilotSteps.map(([no, title, copy]) => <li key={no}><span className="svc-steps__no">{no}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
        <dl className="svc-facts">
          {t.engagement.facts.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}
        </dl>
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
        <ul className="svc-soon">{t.soon.items.map((item) => <li key={item}>{item}</li>)}</ul>
        <p className="svc-note">{t.soon.note}</p>
        <p className="svc-note">{t.soon.alpha}</p>
      </div>
    </section>

    <ServiceCTA accent={ACCENT} title={<>{t.cta.title[0]}<br />{t.cta.title[1]}</>} copy={t.cta.copy} ctas={[{ href: localizedPath(locale, "/contact?type=Cinemind"), label: t.ctas[2] }, { href: localizedPath(locale, "/contact?type=Cinemind"), label: t.ctas[3], secondary: true }]} />
  </>;
}
