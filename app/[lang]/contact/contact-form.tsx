"use client";

import { useEffect, useState, type FormEvent } from "react";
import { contact } from "@/lib/copy/contact";
import type { Locale } from "@/lib/locale";

const INQUIRY_EMAIL = "wisestone@jervis.kr";

/** 서버로 전송되는 값(담당자가 읽는 메일에 쓰이므로 언어와 무관하게 고정) */
const INQUIRY_TYPES = ["Cinemind", "Shot-X", "프로젝트", "제품 도입", "기술 컨설팅", "파트너십", "기타"];

export default function ContactForm({ defaultType, locale }: { defaultType?: string; locale: Locale }) {
  const t = contact[locale].form;
  const initialType = defaultType && INQUIRY_TYPES.includes(defaultType) ? defaultType : INQUIRY_TYPES[0];
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

  function errorMessage(httpStatus: number) {
    if (httpStatus === 413) return t.errors.tooLarge;
    if (httpStatus === 415) return t.errors.badFormat;
    if (httpStatus === 400) return t.errors.invalid;
    if (httpStatus === 503) return t.errors.mail;
    return t.errors.fallback;
  }

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
    setStatusMessage(t.statusSending);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        setStatus("error");
        setStatusMessage(errorMessage(response.status));
        return;
      }

      formElement.reset();
      setStatus("success");
      setStatusMessage(t.success);
    } catch {
      setStatus("error");
      setStatusMessage(t.errors.fallback);
    }
  }

  return <>
    <form className="inquiry-form" onSubmit={handleSubmit}>
    <div className="form-honeypot" aria-hidden="true">
      <label htmlFor="website">{t.honeypot}</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
    <p className="required-note"><span>*</span> {t.required}</p>
    <div className="form-field form-field--wide">
      <label htmlFor="subject">{t.subject} <span>*</span></label>
      <input id="subject" name="subject" type="text" placeholder={t.subjectPh} required />
    </div>
    <div className="inquiry-form-grid">
      <div className="form-field">
        <label htmlFor="name">{t.name} <span>*</span></label>
        <input id="name" name="name" type="text" placeholder={t.namePh} required />
      </div>
      <div className="form-field">
        <label htmlFor="phone">{t.phone} <span>*</span></label>
        <input id="phone" name="phone" type="tel" inputMode="numeric" placeholder={t.phonePh} required />
      </div>
      <div className="form-field">
        <label htmlFor="email">{t.email} <span>*</span></label>
        <input id="email" name="email" type="email" placeholder={t.emailPh} required />
      </div>
      <div className="form-field">
        <label htmlFor="type">{t.type} <span>*</span></label>
        <select id="type" name="type" defaultValue={initialType} required>
          {INQUIRY_TYPES.map((item) => <option key={item} value={item}>{t.types[item]}</option>)}
        </select>
      </div>
    </div>
    <div className="form-field form-field--wide">
      <label htmlFor="message">{t.message} <span>*</span></label>
      <textarea id="message" name="message" placeholder={t.messagePh} rows={7} required />
    </div>
    <div className="privacy-consent">
      <label>
        <input type="checkbox" name="privacyConsent" required />
        <span>{t.consent}</span>
      </label>
      <button className="privacy-policy-link" type="button" onClick={() => setPrivacyPolicyOpen(true)}>{t.policyLink}</button>
    </div>
    <div className="inquiry-actions">
      <button type="reset" className="button button--secondary" disabled={status === "sending"}>{t.cancel}</button>
      <button type="submit" className="button" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.submit}
      </button>
    </div>
    {statusMessage && <p className={`inquiry-status inquiry-status--${status}`} role="status" aria-live="polite">{statusMessage}</p>}
    </form>

    {privacyPolicyOpen && <div className="privacy-modal" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) setPrivacyPolicyOpen(false);
    }}>
      <section className="privacy-dialog" role="dialog" aria-modal="true" aria-labelledby="privacy-policy-title">
        <header>
          <div><p>PRIVACY POLICY</p><h2 id="privacy-policy-title">{t.privacy.title}</h2></div>
          <button type="button" aria-label={t.privacy.close} onClick={() => setPrivacyPolicyOpen(false)}>×</button>
        </header>
        <div className="privacy-dialog__content">
          <p>{t.privacy.intro}</p>
          <dl>
            {t.privacy.rows.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}
          </dl>
          <p className="privacy-dialog__contact">{t.privacy.officer} · {t.privacy.contactLabel} <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a></p>
        </div>
        <footer><button className="button" type="button" onClick={() => setPrivacyPolicyOpen(false)}>{t.privacy.confirm}</button></footer>
      </section>
    </div>}
  </>;
}
