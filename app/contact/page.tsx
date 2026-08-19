import { PageHero, JsonLd } from "@/components/page-ui";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import ContactForm from "./contact-form";

export const metadata = createPageMetadata({
  title: "문의하기",
  description: "블록체인, Web3, RWA·STO, NFT와 AI 기술 프로젝트 및 저비스랩스 솔루션 도입을 문의하세요.",
  path: "/contact",
});

export default function ContactPage() {
  return <>
    <JsonLd data={breadcrumbJsonLd([{ name: "홈", path: "/" }, { name: "문의하기", path: "/contact" }])} />
    <PageHero
      eyebrow="06. CONTACT"
      title={<>새로운 비즈니스의 시작,<br />Jervis Labs와 함께 하세요.</>}
      description="블록체인과 Web3 프로젝트에 대한 기술 상담부터 제품 도입까지 편하게 문의해 주세요."
    />
    <section className="section section--subtle contact-form-section">
      <div className="container">
        <div className="contact-form-heading">
          <p className="eyebrow">SEND AN INQUIRY</p>
          <h2><span>문의</span>하기</h2>
          <p>아래 양식에 맞춰 문의주시면 답변드리겠습니다.</p>
        </div>
        <ContactForm />
      </div>
    </section>
    <section className="section">
      <div className="container contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">CONTACT INFORMATION</p>
          <h2>프로젝트의 가능성을<br />함께 검토합니다.</h2>
          <p>목표와 현재 단계, 필요한 기술을 알려주시면 가장 적합한 협업 방식을 제안해 드립니다.</p>
        </div>
        <div className="contact-card">
          <h3>연락처 정보</h3>
          <div className="contact-detail">
            <span className="contact-icon" aria-hidden="true">●</span>
            <div><strong>담당자</strong><p>Jerry Jung (정석현)</p></div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon" aria-hidden="true">✉</span>
            <div><strong>이메일</strong><a href="mailto:wisestone@jervis.kr">wisestone@jervis.kr</a></div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon" aria-hidden="true">◆</span>
            <div><strong>주소</strong><address>서울시 구로구 디지털로27가길 17, 803호<br />(08375) 대한민국</address></div>
          </div>
          <a className="button contact-email-button" href="mailto:wisestone@jervis.kr">✉ 이메일 문의</a>
        </div>
      </div>
    </section>
  </>;
}
