import type { Metadata } from "next";
import { PageHero, JsonLd } from "@/components/page-ui";
import { common } from "@/lib/copy/common";
import { contact } from "@/lib/copy/contact";
import { localeFrom, type LangParams } from "@/lib/i18n";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import ContactForm from "./contact-form";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFrom(params);
  return createPageMetadata({ title: contact[locale].metaTitle, description: contact[locale].metaDesc, path: "/contact", locale });
}

export default async function ContactPage({ params, searchParams }: LangParams & { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  const locale = await localeFrom(params);
  const t = contact[locale];
  const c = common[locale].crumbs;
  return <>
    <JsonLd data={breadcrumbJsonLd([{ name: c.home, path: "/" }, { name: c.contact, path: "/contact" }], locale)} />
    <PageHero
      eyebrow="06. CONTACT"
      title={<>{t.heroTitle[0]}<br />{t.heroTitle[1]}</>}
      description={t.heroDesc}
    />
    <section className="section section--subtle contact-form-section">
      <div className="container">
        <div className="contact-form-heading">
          <p className="eyebrow">SEND AN INQUIRY</p>
          <h2><span>{t.formTitle[0]}</span>{t.formTitle[1]}</h2>
          <p>{t.formIntro}</p>
        </div>
        <ContactForm defaultType={type} locale={locale} />
      </div>
    </section>
    <section className="section">
      <div className="container contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">CONTACT INFORMATION</p>
          <h2>{t.infoTitle[0]}<br />{t.infoTitle[1]}</h2>
          <p>{t.infoDesc}</p>
        </div>
        <div className="contact-card">
          <h3>{t.card.title}</h3>
          <div className="contact-detail">
            <span className="contact-icon" aria-hidden="true">●</span>
            <div><strong>{t.card.person}</strong><p>Jerry Jung (정석현)</p></div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon" aria-hidden="true">✉</span>
            <div><strong>{t.card.email}</strong><a href="mailto:wisestone@jervis.kr">wisestone@jervis.kr</a></div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon" aria-hidden="true">◆</span>
            <div><strong>{t.card.address}</strong><address>{t.card.addressLines[0]}<br />{t.card.addressLines[1]}</address></div>
          </div>
          <a className="button contact-email-button" href="mailto:wisestone@jervis.kr">{t.card.emailBtn}</a>
        </div>
      </div>
    </section>
  </>;
}
