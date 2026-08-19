import Link from "next/link";
import { ContactCTA, Arrow } from "@/components/page-ui";
import { NewsCard } from "@/components/news-card";
import { products, technologies } from "@/lib/content";
import { listPublishedNews } from "@/lib/news-store";

export const dynamic = "force-dynamic";

export default async function Home() {
  const latestNews = await listPublishedNews(3);
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div>
            <p className="eyebrow">BLOCKCHAIN · WEB3 · AI</p>
            <h1>
              Enabling
              <br />
              Blockchain & AI
              <br />
              <span>Transformation</span>
            </h1>
            <p className="hero-lede">
              하이브리드 블록체인, Web3, NFT, AI 기반 저작권 증명 등 첨단 기술로
              블록체인 비즈니스 혁신을 주도합니다
            </p>
            <div className="hero-actions">
              <Link className="button" href="/project">
                프로젝트 보기 <Arrow />
              </Link>
              <Link className="button button--secondary" href="/contact">
                상담 문의
              </Link>
            </div>
          </div>
          <div className="system-panel">
            <div className="panel-top">
              <span>JERVIS LABS / CORE STACK</span>
              <i />
            </div>
            {technologies.map((tech) => (
              <div className="system-row" key={tech.index}>
                <span>{tech.index}</span>
                <strong>{tech.title}</strong>
                <small>{tech.summary}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">ABOUT JERVIS LABS</p>
            <h2>
              혁신을 통한
              <br />
              비즈니스 변화
            </h2>
          </div>
          <div>
            <p className="intro-lede">
              JervisLabs는 블록체인 기술의 무한한 가능성을 현실로 만드는
              전문기업입니다
            </p>
            <p>
              다양한 프로젝트에서 검증된 기술력과 풍부한 경험을 바탕으로, Web3와
              AI가 결합된 새로운 디지털 생태계를 설계합니다.
            </p>
            <Link className="text-link" href="/about">
              회사 소개 보기 <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--subtle">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">SOLUTIONS</p>
              <h2>기술을 실제 솔루션으로.</h2>
            </div>
            <Link className="text-link" href="/product">
              전체 솔루션 보기 <Arrow />
            </Link>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <Link
                className={`product-card ${product.accent}`}
                href={`/product/${product.slug}`}
                key={product.slug}
              >
                <span>{product.status}</span>
                <h3>{product.name}</h3>
                <p className="product-card__category">{product.category}</p>
                <p>{product.tagline}</p>
                <strong>
                  EXPLORE <Arrow />
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">LATEST NEWS</p>
              <h2>Jervis 추천 최근 이슈</h2>
            </div>
            <Link className="text-link" href="/news">
              전체 뉴스 보기 <Arrow />
            </Link>
          </div>
          <div className="news-grid">
            {latestNews.map((item) => <NewsCard item={item} compact key={item.id} />)}
            {latestNews.length === 0 && <p className="news-empty">노출 중인 뉴스가 없습니다.</p>}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
