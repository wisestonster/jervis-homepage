import Link from "next/link";
import Image from "next/image";
import { Arrow } from "@/components/arrow";

/** 실제 서비스 화면 캡처가 들어갈 자리를 표시하는 더미 영역. 캡처 후 `src`만 넘기면 이미지로 교체됩니다. */
export function ScreenSlot({ label, hint, ratio = "16 / 10", src, alt }: { label: string; hint?: string; ratio?: string; src?: string; alt?: string }) {
  if (src) {
    return <figure className="svc-slot svc-slot--filled" style={{ aspectRatio: ratio }}><Image src={src} alt={alt ?? label} fill sizes="(max-width: 740px) 100vw, 1200px" /></figure>;
  }
  return <figure className="svc-slot" style={{ aspectRatio: ratio }} aria-label={`${label} screen sample`}>
    <div className="svc-slot__bar"><i /><i /><i /></div>
    <div className="svc-slot__body"><span>SCREEN SAMPLE</span><strong>{label}</strong><small>{hint ?? "Screenshot placeholder"}</small></div>
  </figure>;
}

export function SectionHead({ eyebrow, title, copy, center = false }: { eyebrow: string; title: React.ReactNode; copy?: React.ReactNode; center?: boolean }) {
  return <div className={center ? "section-heading svc-head svc-head--center" : "section-heading svc-head"}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="svc-head__copy">{copy}</p>}</div>;
}

export type Cta = { href: string; label: string; secondary?: boolean };

export function ServiceHero({ accent, eyebrow, name, title, lede, tags, ctas, image, imageAlt }: {
  accent: string; eyebrow: string; name: string; title: React.ReactNode; lede: React.ReactNode; tags?: string[]; ctas: Cta[]; image: string; imageAlt: string;
}) {
  return <section className={`svc-hero ${accent}`}><div className="container svc-hero__grid">
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <p className="svc-hero__name">{name}<span className="alpha-badge alpha-badge--lg">ALPHA</span></p>
      <h1>{title}</h1>
      <p className="svc-hero__lede">{lede}</p>
      {tags && <ul className="svc-tags">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
      <div className="hero-actions">{ctas.map((cta) => <Link key={cta.href + cta.label} className={cta.secondary ? "button button--ghost" : "button button--light"} href={cta.href}>{cta.label} <Arrow /></Link>)}</div>
    </div>
    <div className="svc-hero__visual"><Image src={image} alt={imageAlt} width={1600} height={905} priority sizes="(max-width: 980px) 100vw, 600px" /></div>
  </div></section>;
}

export function ServiceCTA({ accent, title, copy, ctas }: { accent: string; title: React.ReactNode; copy?: string; ctas: Cta[] }) {
  return <section className={`svc-cta ${accent}`}><div className="container svc-cta__inner">
    <div><p className="eyebrow">GET STARTED</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
    <div className="hero-actions">{ctas.map((cta) => <Link key={cta.href + cta.label} className={cta.secondary ? "button button--ghost" : "button button--light"} href={cta.href}>{cta.label} <Arrow /></Link>)}</div>
  </div></section>;
}

export function Faq({ items }: { items: Array<[string, string]> }) {
  return <div className="svc-faq">{items.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>;
}

export function DataTable({ head, rows, caption }: { head: string[]; rows: string[][]; caption?: string }) {
  return <div className="svc-table" role="region" aria-label={caption} tabIndex={0}><table>
    <thead><tr>{head.map((cell, index) => <th key={index} scope="col">{cell}</th>)}</tr></thead>
    <tbody>{rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row">{cell}</th> : <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
  </table></div>;
}
