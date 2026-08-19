"use client";

import { useEffect, useState, type FormEvent } from "react";

const INQUIRY_EMAIL = "wisestonster@gmail.com";

export default function ContactForm() {
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (!privacyPolicyOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPrivacyPolicyOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [privacyPolicyOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      subject: String(form.get("subject") || ""),
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      type: String(form.get("type") || ""),
      message: String(form.get("message") || ""),
      privacyConsent: form.get("privacyConsent") === "on",
      website: String(form.get("website") || ""),
    };

    setStatus("sending");
    setStatusMessage("문의를 전송하고 있습니다.");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "문의 전송에 실패했습니다.");

      formElement.reset();
      setStatus("success");
      setStatusMessage("문의가 접수되었습니다. 확인 후 빠르게 답변드리겠습니다.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }

  return <>
    <form className="inquiry-form" onSubmit={handleSubmit}>
    <div className="form-honeypot" aria-hidden="true">
      <label htmlFor="website">웹사이트</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
    <p className="required-note"><span>*</span> 필수 입력 사항입니다.</p>
    <div className="form-field form-field--wide">
      <label htmlFor="subject">문의 제목 <span>*</span></label>
      <input id="subject" name="subject" type="text" placeholder="제목을 입력해주세요." required />
    </div>
    <div className="inquiry-form-grid">
      <div className="form-field">
        <label htmlFor="name">이름 <span>*</span></label>
        <input id="name" name="name" type="text" placeholder="이름을 입력해주세요." required />
      </div>
      <div className="form-field">
        <label htmlFor="phone">연락처 <span>*</span></label>
        <input id="phone" name="phone" type="tel" inputMode="numeric" placeholder="숫자만 입력해주세요." required />
      </div>
      <div className="form-field">
        <label htmlFor="email">메일 <span>*</span></label>
        <input id="email" name="email" type="email" placeholder="메일주소를 입력해주세요." required />
      </div>
      <div className="form-field">
        <label htmlFor="type">문의 유형 <span>*</span></label>
        <select id="type" name="type" defaultValue="프로젝트" required>
          <option>프로젝트</option>
          <option>제품 도입</option>
          <option>기술 컨설팅</option>
          <option>파트너십</option>
          <option>기타</option>
        </select>
      </div>
    </div>
    <div className="form-field form-field--wide">
      <label htmlFor="message">문의 내용 <span>*</span></label>
      <textarea id="message" name="message" placeholder="상담을 위해 문의 내용을 구체적으로 입력해주세요." rows={7} required />
    </div>
    <div className="privacy-consent">
      <label>
        <input type="checkbox" name="privacyConsent" required />
        <span>(필수) 개인정보 수집에 동의합니다.</span>
      </label>
      <button className="privacy-policy-link" type="button" onClick={() => setPrivacyPolicyOpen(true)}>개인정보처리방침</button>
    </div>
    <div className="inquiry-actions">
      <button type="reset" className="button button--secondary" disabled={status === "sending"}>취소</button>
      <button type="submit" className="button" disabled={status === "sending"}>
        {status === "sending" ? "전송 중…" : "문의하기"}
      </button>
    </div>
    {statusMessage && <p className={`inquiry-status inquiry-status--${status}`} role="status" aria-live="polite">{statusMessage}</p>}
    </form>

    {privacyPolicyOpen && <div className="privacy-modal" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) setPrivacyPolicyOpen(false);
    }}>
      <section className="privacy-dialog" role="dialog" aria-modal="true" aria-labelledby="privacy-policy-title">
        <header>
          <div><p>PRIVACY POLICY</p><h2 id="privacy-policy-title">개인정보처리방침</h2></div>
          <button type="button" aria-label="개인정보처리방침 닫기" onClick={() => setPrivacyPolicyOpen(false)}>×</button>
        </header>
        <div className="privacy-dialog__content">
          <p>저비스랩스는 문의 접수와 답변을 위해 아래와 같이 개인정보를 수집·이용합니다.</p>
          <dl>
            <div><dt>수집 항목</dt><dd>이름, 연락처, 이메일 주소, 문의 제목, 문의 유형, 문의 내용</dd></div>
            <div><dt>수집·이용 목적</dt><dd>문의 내용 확인, 상담 및 답변, 원활한 의사소통</dd></div>
            <div><dt>보유 및 이용 기간</dt><dd>문의 처리 목적 달성 후 지체 없이 파기합니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우에는 해당 기간 동안 보관합니다.</dd></div>
            <div><dt>동의 거부 권리</dt><dd>개인정보 수집·이용에 동의하지 않을 권리가 있습니다. 다만 필수 항목 수집에 동의하지 않으면 문의 접수와 답변이 제한될 수 있습니다.</dd></div>
          </dl>
          <p className="privacy-dialog__contact">개인정보 관련 문의: <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a></p>
        </div>
        <footer><button className="button" type="button" onClick={() => setPrivacyPolicyOpen(false)}>확인</button></footer>
      </section>
    </div>}
  </>;
}
