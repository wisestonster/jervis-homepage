import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { JsonLd } from "@/components/page-ui";
import { common } from "@/lib/copy/common";
import { localeFrom, type LangParams } from "@/lib/i18n";
import { HTML_LANG, type Locale } from "@/lib/locale";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import "./world-models.css";

const meta: Record<Locale, { title: string; description: string; refNotes: { r3: string; r35: string } }> = {
  ko: {
    title: "월드모델",
    description: "월드모델 AI의 개념·계보·구조·주요 모델·논쟁·응용·한국 현황을 2026년 9월 기준 논문과 보고서로 정리한 한국어 레퍼런스",
    refNotes: { r3: "— 연표·주가 반응 보도 요약용", r35: "— 필자 중 한 명이 General Intuition CEO" },
  },
  en: {
    title: "World Models",
    description: "A reference on world-model AI — concepts, lineage, architecture, key models, debates, applications and the state of Korea — compiled from papers and reports as of September 2026.",
    refNotes: { r3: "— used for the timeline and the stock-reaction coverage summary", r35: "— one of the authors is the CEO of General Intuition" },
  },
  ja: {
    title: "ワールドモデル",
    description: "ワールドモデルAIの概念・系譜・構造・主要モデル・論争・応用・韓国の現状を、2026年9月時点の論文とレポートで整理したリファレンス。",
    refNotes: { r3: "— 年表と株価反応の報道要約用", r35: "— 著者の一人はGeneral IntuitionのCEO" },
  },
};

// 본문은 content/ 아래 HTML 파일에 원문 그대로 보관합니다(언어별 파일 + 공통 참고문헌 목록).
const read = (name: string) => readFileSync(path.join(/* turbopackIgnore: true */ process.cwd(), "content", name), "utf8");
const refsHtml = read("world-models.refs.html");
const bodyHtml = Object.fromEntries(
  (Object.keys(meta) as Locale[]).map((locale) => [
    locale,
    read(`world-models.${locale}.html`)
      .replace("<!--REFS-->", refsHtml)
      .replace("{{note_r3}}", meta[locale].refNotes.r3)
      .replace("{{note_r35}}", meta[locale].refNotes.r35),
  ]),
) as Record<Locale, string>;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFrom(params);
  return createPageMetadata({ title: meta[locale].title, description: meta[locale].description, path: "/insights/world-models", locale });
}

export default async function WorldModelsPage({ params }: LangParams) {
  const locale = await localeFrom(params);
  const c = common[locale].crumbs;
  return <>
    <JsonLd data={breadcrumbJsonLd([{ name: c.home, path: "/" }, { name: "INSIGHTS", path: "/insights/world-models" }, { name: meta[locale].title, path: "/insights/world-models" }], locale)} />
    <div className="wm" lang={HTML_LANG[locale]} dangerouslySetInnerHTML={{ __html: bodyHtml[locale] }} />
  </>;
}
