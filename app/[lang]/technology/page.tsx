import Image from "next/image";
import type { Metadata } from "next";
import { ContactCTA, JsonLd, PageHero } from "@/components/page-ui";
import { common } from "@/lib/copy/common";
import { getTechnologies, techPage } from "@/lib/copy/web3";
import { localeFrom, type LangParams } from "@/lib/i18n";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFrom(params);
  return createPageMetadata({ title: techPage[locale].metaTitle, description: techPage[locale].metaDesc, path: "/technology", locale });
}

export default async function TechnologyPage({ params }: LangParams) {
  const locale = await localeFrom(params);
  const t = techPage[locale];
  const c = common[locale].crumbs;
  const technologies = getTechnologies(locale);
  return <>
    <JsonLd data={breadcrumbJsonLd([{ name: c.home, path: "/" }, { name: c.technology, path: "/technology" }], locale)} />
    <PageHero eyebrow="WEB3 · TECHNOLOGY" title={<>{t.heroTitle[0]}<br />{t.heroTitle[1]}</>} description={t.heroDesc} />
    <section className="section">
      <div className="container">
        <div className="capabilities" aria-label={t.aria}>
          <article className="capability-card">
            <header className="capability-header">
              <p className="capability-kicker">CAPABILITY 01</p>
              <h2>{t.cap1.title}</h2>
              <p>{t.cap1.sub}</p>
            </header>
            <div className="capability-one-grid">
              <div className="capability-module-grid" aria-label={t.cap1.modulesAria}>
                <div className="capability-module capability-module--blue">Defi</div>
                <div className="capability-module capability-module--dark capability-module--dao">DAO</div>
                <div className="capability-module capability-module--blue">Wallet</div>
                <div className="capability-module capability-module--dark capability-module--token">Tokenization</div>
              </div>
              <ol className="capability-benefits">
                {t.cap1.benefits.map((benefit, index) => <li key={benefit}><span>{index + 1}</span><strong>{benefit}</strong></li>)}
              </ol>
            </div>
            <p className="capability-bottom">{t.cap1.bottom}</p>
          </article>

          <article className="capability-card">
            <header className="capability-header">
              <p className="capability-kicker">CAPABILITY 02</p>
              <h2>{t.cap2.title}</h2>
            </header>
            <div className="capability-two-grid">
              <section className="capability-info">
                <span className="capability-label">TEAM</span>
                <Image className="capability-logo" src="/jervis-labs-logo.png" width={198} height={53} alt="Jervis Labs" />
                <strong>{t.cap2.teamStrong}</strong>
              </section>
              <section className="capability-info capability-reference">
                <span className="capability-label">REFERENCE</span>
                <ol>{t.cap2.refs.map((ref) => <li key={ref}>{ref}</li>)}</ol>
                <strong>{t.cap2.refStrong}</strong>
              </section>
              <section className="capability-info capability-regulation">
                <div className="capability-scale" aria-hidden="true">⚖</div>
                <div><h3>{t.cap2.regTitle}</h3><p>{t.cap2.regDesc}</p></div>
              </section>
              <section className="capability-info capability-web3">
                <h3>{t.cap2.webTitle}</h3>
                <div className="capability-chips">{t.cap2.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
                <strong className="capability-token">{t.cap2.token}</strong>
                <p>{t.cap2.webDesc}</p>
              </section>
            </div>
            <p className="capability-bottom">{t.cap2.bottom}</p>
          </article>

          <article className="capability-card">
            <header className="capability-header">
              <p className="capability-kicker">CAPABILITY 03</p>
              <h2>{t.cap3.title}</h2>
            </header>
            <div className="capability-three-grid">
              <section className="capability-community">
                <h3>{t.cap3.community}</h3>
                <div className="capability-values">
                  <div><span className="capability-value-icon" aria-hidden="true">✋</span><strong>{t.cap3.values[0]}</strong></div>
                  <div><span className="capability-value-icon" aria-hidden="true">🏆</span><strong>{t.cap3.values[1]}</strong></div>
                </div>
                <p>{t.cap3.communityDesc}</p>
              </section>
              <section className="dao-panel">
                <h3>DAO Smart Contract</h3>
                <p className="dao-subtitle">Treasury · Community · Project</p>
                <ol className="dao-list">
                  {t.cap3.daoList.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
                </ol>
                <strong className="dao-bottom">{t.cap3.daoBottom}</strong>
              </section>
            </div>
          </article>

          <article className="capability-card capability-card--proof">
            <header className="capability-header">
              <p className="capability-kicker">{t.cap4.kicker}</p>
              <h2>{t.cap4.title}</h2>
              <p>{t.cap4.desc}</p>
            </header>
            <div className="capability-four-ui">
              <section className="proof-panel">
                <div className="proof-top"><strong>JervisBox</strong><span>PROOF OF PROCESS</span><small>ON-CHAIN</small></div>
                <div className="proof-body">
                  <div className="proof-copy">
                    <span>{t.cap4.proof.meta}</span>
                    <h3>{t.cap4.proof.h3[0]}<br /><em>{t.cap4.proof.h3[1]}</em></h3>
                    <p>{t.cap4.proof.p}</p>
                    <div><button type="button">{t.cap4.proof.btn1}</button><button type="button">{t.cap4.proof.btn2}</button></div>
                  </div>
                  <div className="proof-hash">
                    <span>ON-CHAIN PROOF · POLYGON</span>
                    <code>0x9c0d04287f919a8933<br />495d8c311854e6b1e69c</code>
                    <small>{t.cap4.proof.time}</small>
                    <b>Sealed</b>
                  </div>
                </div>
              </section>
              <section className="certificate-panel">
                <div className="certificate-seal">{t.cap4.cert.seal}</div>
                <span>{t.cap4.cert.label}</span>
                <h3>Family Memory</h3>
                <dl>
                  <div><dt>{t.cap4.cert.project}</dt><dd>{t.cap4.cert.projectVal}</dd></div>
                  <div><dt>{t.cap4.cert.issued}</dt><dd>{t.cap4.cert.issuedVal}</dd></div>
                  <div className="certificate-root"><dt>{t.cap4.cert.root}</dt><dd>0xb1d9d81fa4e4692cfa9e998c2f6a2363a58024c4a9a4</dd></div>
                </dl>
                <div className="certificate-stats"><span><b>2</b>{t.cap4.cert.stats[0]}</span><span><b>1</b>{t.cap4.cert.stats[1]}</span><span><b>0</b>{t.cap4.cert.stats[2]}</span><span><b>0m</b>{t.cap4.cert.stats[3]}</span></div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section className="section section--subtle">
      <div className="container technology-list">
        {technologies.map((tech) => (
          <article key={tech.index}>
            <div>
              <span>{tech.index}</span>
              <h2>{tech.title}</h2>
              <p>{tech.summary}</p>
              {tech.description && <p className="muted">{tech.description}</p>}
            </div>
            <div>
              {tech.details.map(([title, copy]) => (
                <div className="tech-detail" key={title}>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
    <ContactCTA locale={locale} />
  </>;
}
