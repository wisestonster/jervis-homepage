import Image from "next/image";
import { ContactCTA, JsonLd, PageHero } from "@/components/page-ui";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "회사소개",
  description: "블록체인과 AI 기술을 실제 비즈니스 성과로 연결하는 저비스랩스의 기술 역량과 사업 방향을 소개합니다.",
  path: "/about",
});

const team = [
  ["Jerry Jung", "대표", "블록체인 기업 경영과 기술 전략을 총괄하며 비즈니스 혁신을 이끕니다."],
  ["Tommy Han", "Dev Leader", "블록체인 개발팀을 리드하며 기술적 아키텍처와 구현을 책임집니다."],
  ["Echo Lee", "Web3 Developer", "Web3 기술과 탈중앙화 애플리케이션 개발을 전담하는 전문가입니다."],
  ["UI/UX Designer", "디자이너", "사용자 중심의 직관적이고 아름다운 인터페이스를 디자인합니다."],
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
        <div className="capabilities" aria-label="Jervis Labs 핵심 역량">
          <article className="capability-card">
            <header className="capability-header">
              <p className="capability-kicker">CAPABILITY 01</p>
              <h2>고객 요구사항별 블록체인 기술 조합</h2>
              <p>블록체인 특장점을 조합하여 고객 니즈에 맞는 서비스 제공</p>
            </header>
            <div className="capability-one-grid">
              <div className="capability-module-grid" aria-label="블록체인 기술 모듈">
                <div className="capability-module capability-module--blue">Defi</div>
                <div className="capability-module capability-module--dark capability-module--dao">DAO</div>
                <div className="capability-module capability-module--blue">Wallet</div>
                <div className="capability-module capability-module--dark capability-module--token">Tokenization</div>
              </div>
              <ol className="capability-benefits">
                <li><span>1</span><strong>속도 ↑</strong></li>
                <li><span>2</span><strong>확장성 ↑</strong></li>
                <li><span>3</span><strong>안정성과 신뢰 ↑</strong></li>
              </ol>
            </div>
            <p className="capability-bottom">블록체인 비즈니스 로직 설계를 통해 확장성 높은 서비스를 빠르고 안정적으로 제공</p>
          </article>

          <article className="capability-card">
            <header className="capability-header">
              <p className="capability-kicker">CAPABILITY 02</p>
              <h2>산업 친화적 모듈 제공으로 신속한 사업화 가능</h2>
            </header>
            <div className="capability-two-grid">
              <section className="capability-info">
                <span className="capability-label">TEAM</span>
                <Image className="capability-logo" src="/jervis-labs-logo.png" width={198} height={53} alt="Jervis Labs" />
                <strong>다양한 블록체인 개발 프로젝트 참여 경험</strong>
              </section>
              <section className="capability-info capability-reference">
                <span className="capability-label">REFERENCE</span>
                <ol>
                  <li>PUBLISH PROTOCOL</li>
                  <li>기부후원 영수증 NFT 발행</li>
                  <li>DAO 프로토콜 기획 및 개발</li>
                  <li>원리금 수취권 NFT 발행</li>
                </ol>
                <strong>다양한 케이스를 통해 기술운영 노하우 축적</strong>
              </section>
              <section className="capability-info capability-regulation">
                <div className="capability-scale" aria-hidden="true">⚖</div>
                <div><h3>기존 규제 충족</h3><p>기존 법과 제도 환경에 적합한 서비스 개발 지원</p></div>
              </section>
              <section className="capability-info capability-web3">
                <h3>Web 3.0 최적화 솔루션</h3>
                <div className="capability-chips"><span>투표</span><span>거버넌스</span><span>트레저리</span></div>
                <strong className="capability-token">토큰화</strong>
                <p>Web 3.0 기술 기반의 탈중앙화 된 최적화 솔루션 제공</p>
              </section>
            </div>
            <p className="capability-bottom">기존 규제를 충족하는 서비스부터 가상자산 및 Web 3.0 관련 서비스까지 다양한 조합 가능</p>
          </article>

          <article className="capability-card">
            <header className="capability-header">
              <p className="capability-kicker">CAPABILITY 03</p>
              <h2>DAO 프로토콜 기획 / 개발 / 운영 역량 보유</h2>
            </header>
            <div className="capability-three-grid">
              <section className="capability-community">
                <h3>고객 커뮤니티의 문화 형성과 운영 방향 설정이 매우 중요</h3>
                <div className="capability-values">
                  <div><span className="capability-value-icon" aria-hidden="true">✋</span><strong>자발적인 참여</strong></div>
                  <div><span className="capability-value-icon" aria-hidden="true">🏆</span><strong>기여자에 대한 공정한 보상</strong></div>
                </div>
                <p>커뮤니티에 자유롭게 의견을 개진하고 참여할 수 있는 환경 조성</p>
              </section>
              <section className="dao-panel">
                <h3>DAO Smart Contract</h3>
                <p className="dao-subtitle">Treasury · Community · Project</p>
                <ol className="dao-list">
                  <li><span>01</span>커뮤니티 참여자는 대가를 지불하고 DAO 거버넌스 토큰을 소유</li>
                  <li><span>02</span>커뮤니티 참여자는 토큰을 활용하여 DAO가 어떤 프로젝트를 실행할지 투표</li>
                  <li><span>03</span>커뮤니티가 선정한 프로젝트 및 의사결정 실행</li>
                </ol>
                <strong className="dao-bottom">과도한 중앙화를 견제하기 위한 지배구조 내부장치 DAO</strong>
              </section>
            </div>
          </article>

          <article className="capability-card capability-card--proof">
            <header className="capability-header">
              <p className="capability-kicker">CAPABILITY 04 · 특허 출원 중</p>
              <h2>AI 생성 콘텐츠의 저작권 증명을 위한 블록체인 기반 창작성 증명 및 시스템</h2>
              <p>저작권 보호 기술, 인공지능(AI)을 활용하여 생성된 영상, 음원, 텍스트, 이미지 등과 같은 디지털 콘텐츠에 대하여 인간 창작자의 창작적 기여를 객관적으로 증명하고, 이를 통해 저작권의 성립 및 귀속을 명확히 하기 위한 블록체인 기반 창작성 증명(Proof of Creativity) 방법</p>
            </header>
            <div className="capability-four-ui">
              <section className="proof-panel">
                <div className="proof-top"><strong>JervisBox</strong><span>PROOF OF PROCESS</span><small>ON-CHAIN</small></div>
                <div className="proof-body">
                  <div className="proof-copy">
                    <span>크리에이터의 일상 · 2026</span>
                    <h3>증거는 파일이 아니라<br /><em>과정입니다.</em></h3>
                    <p>프롬프트, 레퍼런스, AI 생성 결과와 사람의 편집 과정을 순서대로 기록합니다.</p>
                    <div><button type="button">기록 시작하기</button><button type="button">해시 검증하기</button></div>
                  </div>
                  <div className="proof-hash">
                    <span>ON-CHAIN PROOF · POLYGON</span>
                    <code>0x9c0d04287f919a8933<br />495d8c311854e6b1e69c</code>
                    <small>타임스탬프 · 2026-08-05 01:45 UTC</small>
                    <b>Sealed</b>
                  </div>
                </div>
              </section>
              <section className="certificate-panel">
                <div className="certificate-seal">원본 인증</div>
                <span>창작성 원본 증명서</span>
                <h3>Family Memory</h3>
                <dl>
                  <div><dt>프로젝트</dt><dd>가족 사진으로 영상 생성</dd></div>
                  <div><dt>발행 일시</dt><dd>2026년 7월 29일</dd></div>
                  <div className="certificate-root"><dt>최종 MERKLE ROOT</dt><dd>0xb1d9d81fa4e4692cfa9e998c2f6a2363a58024c4a9a4</dd></div>
                </dl>
                <div className="certificate-stats"><span><b>2</b>이벤트</span><span><b>1</b>AI 작업</span><span><b>0</b>사람 편집</span><span><b>0m</b>기간</span></div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section className="section section--subtle">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">OUR TEAM</p><h2>기술과 비즈니스를 연결하는 사람들</h2></div>
        <div className="team-grid">{team.map(([name, role, copy]) => <article className="team-card" key={name}><span>{name.split(" ").map(value => value[0]).join("")}</span><div><h3>{name}</h3><small>{role}</small><p>{copy}</p></div></article>)}</div>
      </div>
    </section>
    <ContactCTA />
  </>;
}
