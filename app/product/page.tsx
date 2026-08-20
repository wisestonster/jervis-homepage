import Link from "next/link";
import Image from "next/image";
import { PageHero, Arrow, ContactCTA, JsonLd } from "@/components/page-ui";
import { products } from "@/lib/content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "솔루션",
  description: "AI 창작성 증명 JervisBox, RWA·STO 플랫폼 JerviX, AI 권리 인프라 CoReset DAO 등 저비스랩스의 다양한 솔루션을 만나보세요.",
  path: "/product",
});

const illustrations: Record<string, { src: string; alt: string }> = {
  jervisbox: { src: "/solution-jervisbox.webp", alt: "AI 창작 과정과 블록체인 검증을 표현한 일러스트" },
  artpass: { src: "/solution-artpass.webp", alt: "미술품과 블록체인 등기 증명서를 표현한 일러스트" },
  jervix: { src: "/solution-jervix.webp", alt: "실물자산의 디지털 토큰화와 거래를 표현한 일러스트" },
  dokreels: { src: "/solution-dokreels.webp", alt: "AI 숏폼 영상 콘텐츠 제작을 표현한 일러스트" },
  melomancedao: { src: "/solution-melomancedao.png", alt: "NFT와 DAO 거버넌스 기반 영화 제작을 표현한 일러스트" },
  coresetdao: { src: "/solution-coresetdao.png", alt: "공동저작권과 DAO 기반 권리 실행을 표현한 일러스트" },
};

export default function SolutionPage() {
  return <>
    <JsonLd data={breadcrumbJsonLd([{ name: "홈", path: "/" }, { name: "솔루션", path: "/product" }])} />
    <PageHero
      eyebrow="04. SOLUTION"
      title={<>비즈니스에 바로 적용하는<br />Jervis Labs 솔루션</>}
      description="창작성 증명, 미술품 등기, RWA·STO와 AI 숏폼까지 검증된 기술을 실제 비즈니스 솔루션으로 제공합니다."
    />
    <section className="section solution-section">
      <div className="container">
        <div className="solution-list">
          {products.map((solution, index) => {
            const illustration = illustrations[solution.slug];
            return <Link href={`/product/${solution.slug}`} className={`solution-list__item ${solution.accent}`} key={solution.slug}>
              <div className="solution-list__index"><span>0{index + 1}</span><small>{solution.status}</small></div>
              <div className="solution-list__copy">
                <p>{solution.category}</p>
                <h2>{solution.name}</h2>
                <h3>{solution.tagline}</h3>
                <div className="solution-list__description">{solution.description}</div>
                <strong>솔루션 살펴보기 <Arrow /></strong>
              </div>
              <div className="solution-list__visual">
                <Image src={illustration.src} width={800} height={800} alt={illustration.alt} priority={index === 0} />
              </div>
            </Link>;
          })}
        </div>
      </div>
    </section>
    <ContactCTA />
  </>;
}
