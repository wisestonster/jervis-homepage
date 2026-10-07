import Image from "next/image";
import type { Metadata } from "next";
import { ContactCTA, JsonLd, PageHero } from "@/components/page-ui";
import { about, teamImages } from "@/lib/copy/about";
import { common } from "@/lib/copy/common";
import { localeFrom, type LangParams } from "@/lib/i18n";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFrom(params);
  return createPageMetadata({ title: about[locale].metaTitle, description: about[locale].metaDesc, path: "/about", locale });
}

export default async function AboutPage({ params }: LangParams) {
  const locale = await localeFrom(params);
  const t = about[locale];
  const c = common[locale];
  return <>
    <JsonLd data={breadcrumbJsonLd([{ name: c.crumbs.home, path: "/" }, { name: c.crumbs.about, path: "/about" }], locale)} />
    <PageHero eyebrow="01. ABOUT US" title={<>{t.heroTitle[0]}<br />{t.heroTitle[1]}</>} description={t.heroDesc} />
    <section className="section">
      <div className="container">
        <div className="mission-block">
          <p className="eyebrow">OUR MISSION</p>
          <h2>{t.mission.title}</h2>
          <p>{t.mission.body}</p>
        </div>
      </div>
    </section>
    <section className="section section--subtle">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">OUR HISTORY</p></div>
        <div className="history-list">
          {t.history.map((entry) => (
            <article key={entry.year}>
              <span>{entry.year}</span>
              <ul>{entry.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="awards-block">
          <p className="eyebrow">AWARDS</p>
          <ul className="awards-list">{t.awards.map((award) => <li key={award}>{award}</li>)}</ul>
        </div>
      </div>
    </section>
    <section className="section section--subtle">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">OUR TEAM</p><h2>{t.teamTitle}</h2></div>
        <div className="team-grid">{t.team.map((member, index) => <article className="team-card" key={member.name}><Image src={teamImages[index]} width={70} height={70} alt={member.alt} /><div><h3>{member.name}</h3><small>{member.role}</small><p>{member.copy}</p></div></article>)}</div>
      </div>
    </section>
    <ContactCTA locale={locale}>
      <Image src="/dada-logo.png" width={155} height={32} alt={c.sponsor.logoAlt} />
      <p>{c.sponsor.text}</p>
    </ContactCTA>
  </>;
}
