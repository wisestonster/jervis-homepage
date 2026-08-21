import Image from "next/image";
import { ContactCTA, JsonLd, PageHero } from "@/components/page-ui";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "회사소개",
  description: "블록체인과 AI 기술을 실제 비즈니스 성과로 연결하는 저비스랩스의 기술 역량과 사업 방향을 소개합니다.",
  path: "/about",
});

type HistoryYear = { year: string; items: string[] };

const history: HistoryYear[] = [
  { year: "2022", items: [
    "'저비스랩스' 설립",
    "이광재 의원 정치후원금 NFT 프로젝트",
    "DAO 기반의 기부후원 Jervis 프로토콜 개발",
    "월드비전 가상자산후원 플랫폼 개발",
    "조선일보 포인트, 멤버십 NFT 개발",
    "K-디아스포라 가상자산 후원 서비스 개발",
    "리오브 온체인 기록 프로젝트 개발",
  ] },
  { year: "2023", items: [
    "'캔디플러스' 카메라 NFT 서비스 개발",
    "AGLA 토큰 관리 대시보드 개발",
    "'멜로망스DAO' 민팅 및 후원 서비스 개발",
    "도로위험정보 SAFELAB 스마트컨트랙트 개발",
    "디자인저작권관리 및 NFT 생성시스템 블록체인 인프라 구축",
  ] },
  { year: "2024", items: [
    "칸웨이 NFT마켓 개발",
    "칸짱NFT 민팅 및 NFT 마켓 개발 운영",
  ] },
  { year: "2025", items: [
    "저비스랩스 기업부설연구소 설립",
    "숏폼플랫폼 '칸태움' 앱 개발",
  ] },
  { year: "2026", items: [
    "저작권기반 DAO 플랫폼 '코리셋DAO' 개발",
    "코리셋 오픈북 코어엔진 개발",
  ] },
];

const awards = [
  "Blocko Dapp Contest 수상",
  "ICP Hackathon 우승 'Play Samble'",
];

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
        <div className="section-heading"><p className="eyebrow">OUR HISTORY</p></div>
        <div className="history-list">
          {history.map((entry) => (
            <article key={entry.year}>
              <span>{entry.year}</span>
              <ul>{entry.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="awards-block">
          <p className="eyebrow">AWARDS</p>
          <ul className="awards-list">{awards.map((award) => <li key={award}>{award}</li>)}</ul>
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
