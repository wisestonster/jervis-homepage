import Link from "next/link";
import Image from "next/image";
import FilmFlowBackground from "@/components/film-flow-background";
import { ContactCTA, Arrow } from "@/components/page-ui";
import { home } from "@/lib/copy/home";
import { localizedPath } from "@/lib/locale";
import { localeFrom, type LangParams } from "@/lib/i18n";

const services = [
  { href: "/cinemind", name: "Cinemind", tag: "AI PREDICTION ENGINE", image: "/images/cinemind-hero.webp", accent: "svc--cinemind" },
  { href: "/shot-x", name: "Shot-X", tag: "AI SHORT-DRAMA STUDIO", image: "/images/shotx-hero.webp", accent: "svc--shotx" },
];

export default async function Home({ params }: LangParams) {
  const locale = await localeFrom(params);
  const t = home[locale];
  return (
    <>
      <section className="home-hero">
        <FilmFlowBackground />
        <div className="container home-hero__grid">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>
              {t.h1[0]}
              <br />
              {t.h1[1]}<span>{t.h1[2]}</span>
            </h1>
            <p className="hero-lede">{t.lede}</p>
            <div className="hero-actions">
              <Link className="button" href={localizedPath(locale, "/cinemind")}>
                {t.ctas[0]} <Arrow />
              </Link>
              <Link className="button button--secondary" href={localizedPath(locale, "/shot-x")}>
                {t.ctas[1]} <Arrow />
              </Link>
              <Link className="button button--secondary" href={localizedPath(locale, "/contact")}>
                {t.ctas[2]}
              </Link>
            </div>
          </div>
          <div className="home-visual">
            <Image src="/images/home-hero.webp" width={1400} height={1045} priority sizes="(max-width: 980px) 100vw, 540px" alt={t.heroAlt} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">VISION</p>
            <h2>
              {t.vision.title[0]}
              <br />
              {t.vision.title[1]}
            </h2>
          </div>
          <div>
            <p className="intro-lede">{t.vision.lede}</p>
            <p>{t.vision.body}</p>
            <Link className="text-link" href={localizedPath(locale, "/about")}>
              {t.vision.link} <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--subtle">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">OUR SERVICES</p>
            <h2>{t.services.title}</h2>
          </div>
          <div className="home-services">
            {services.map((service, index) => (
              <Link className={`home-service ${service.accent}`} href={localizedPath(locale, service.href)} key={service.href}>
                <div className="home-service__image"><Image src={service.image} width={1600} height={905} alt={t.services.items[index].alt} sizes="(max-width: 980px) 100vw, 580px" /></div>
                <div className="home-service__body">
                  <span>{service.tag}</span>
                  <h3>{service.name}<em className="alpha-badge alpha-badge--lg">ALPHA</em></h3>
                  <p className="home-service__title">{t.services.items[index].title}</p>
                  <p>{t.services.items[index].copy}</p>
                  <strong>{t.services.more} <Arrow /></strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">HOW IT CONNECTS</p>
            <h2>{t.loop.title}</h2>
          </div>
          <ol className="svc-steps svc-steps--compact svc-steps--grid">
            {t.loop.steps.map(([no, title, copy]) => (
              <li key={no}><span className="svc-steps__no">{no}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
            ))}
          </ol>
        </div>
      </section>
      <ContactCTA locale={locale} />
    </>
  );
}
