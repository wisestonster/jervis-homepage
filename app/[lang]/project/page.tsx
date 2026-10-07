import Image from "next/image";
import type { Metadata } from "next";
import { ContactCTA, JsonLd, PageHero } from "@/components/page-ui";
import { common } from "@/lib/copy/common";
import { getProjectCases, getProjects, projectPage } from "@/lib/copy/web3";
import { localeFrom, type LangParams } from "@/lib/i18n";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFrom(params);
  return createPageMetadata({ title: projectPage[locale].metaTitle, description: projectPage[locale].metaDesc, path: "/project", locale });
}

export default async function ProjectPage({ params }: LangParams) {
  const locale = await localeFrom(params);
  const t = projectPage[locale];
  const c = common[locale].crumbs;
  const projects = getProjects(locale);
  const cases = getProjectCases(locale);
  return <>
    <JsonLd data={breadcrumbJsonLd([{ name: c.home, path: "/" }, { name: c.project, path: "/project" }], locale)} />
    <PageHero dark eyebrow="WEB3 · PROJECT" title={<>{t.heroTitle[0]}<br />{t.heroTitle[1]}</>} description={t.heroDesc} />
    <section className="section projects-section">
      <div className="container project-list">
        {projects.map((project, index) => <article key={project.name}><span>0{index + 1}</span><div><small>{project.type}</small><h2>{project.name}</h2><p>{project.summary}</p></div><ul>{project.details.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
      </div>
    </section>
    <section className="section section--subtle">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">USE CASES</p><h2>{t.useCases}</h2></div>
        <div className="case-grid">{cases.map((item) => <article key={item.title}><Image src={item.image} width={72} height={72} alt={item.alt} /><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </div>
    </section>
    <ContactCTA locale={locale} />
  </>;
}
