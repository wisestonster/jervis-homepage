import Image from "next/image";
import { ContactCTA, JsonLd, PageHero } from "@/components/page-ui";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "회사소개",
  description: "블록체인과 AI 기술을 실제 비즈니스 성과로 연결하는 저비스랩스의 기술 역량과 사업 방향을 소개합니다.",
  path: "/about",
});

type TeamMember = { name: string; role: string; copy: string; image: string; alt: string };

const team: TeamMember[] = [
  { name: "Jerry Jung", role: "대표", copy: "블록체인 기업 경영과 기술 전략을 총괄하며 비즈니스 혁신을 이끕니다.", image: "/team-jerry.png", alt: "Jerry Jung 프로필 일러스트" },
  { name: "Tommy Han", role: "Dev Leader", copy: "블록체인 개발팀을 리드하며 기술적 아키텍처와 구현을 책임집니다.", image: "/team-tommy.png", alt: "Tommy Han 프로필 일러스트" },
  { name: "Echo Lee", role: "Web3 Developer", copy: "Web3 기술과 탈중앙화 애플리케이션 개발을 전담하는 전문가입니다.", image: "/team-echo.png", alt: "Echo Lee 프로필 일러스트" },
  { name: "UI/UX Designer", role: "디자이너", copy: "사용자 중심의 직관적이고 아름다운 인터페이스를 디자인합니다.", image: "/team-designer.png", alt: "UI/UX Designer 프로필 일러스트" },
];

export default function AboutPage() {
  return <>
    <JsonLd data={breadcrumbJsonLd([{ name: "홈", path: "/" }, { name: "회사소개", path: "/about" }])} />
    <PageHero eyebrow="01. ABOUT US" title={<>혁신을 통한<br />비즈니스 변화</>} description="JervisLabs는 블록체인 기술의 무한한 가능성을 현실로 만드는 전문기업입니다" />
    <section className="section">
      <div className="container">
        <div className="mission-block">
          <p className="eyebrow">OUR MISSION</p>
          <h2>블록체인 기술을 통해 더 투명하고 효율적인 디지털 세상을 만들어갑니다.</h2>
          <p>기술의 복잡함은 줄이고 비즈니스의 가능성은 확장합니다. 산업과 서비스에 최적화된 블록체인·Web3 솔루션을 설계하고 실행합니다.</p>
        </div>
      </div>
    </section>
    <section className="section section--subtle">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">OUR TEAM</p><h2>기술과 비즈니스를 연결하는 사람들</h2></div>
        <div className="team-grid">{team.map((member) => <article className="team-card" key={member.name}><Image src={member.image} width={70} height={70} alt={member.alt}/><div><h3>{member.name}</h3><small>{member.role}</small><p>{member.copy}</p></div></article>)}</div>
      </div>
    </section>
    <ContactCTA />
  </>;
}
