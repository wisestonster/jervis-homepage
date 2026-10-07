import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { JsonLd } from "@/components/page-ui";
import { common } from "@/lib/copy/common";
import { localeFrom, type LangParams } from "@/lib/i18n";
import { HTML_LANG, LOCALES, type Locale } from "@/lib/locale";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import "../world-models/world-models.css";

type Notes = { n1: string; n2: string; n3: string; n12: string; n15: string; refsSub: string };

const meta: Record<Locale, { title: string; description: string; notes: Notes }> = {
  ko: {
    title: "MiroFish",
    description: "문서 한 편으로 가상 사회를 만들어 미래를 탐색하는 오픈소스 군집지능 엔진 MiroFish의 구조·기반 기술 OASIS·활용·한계를 공식 자료와 논문, 검증 보고서로 정리한 한국어 레퍼런스",
    notes: {
      n1: "저장소.", n2: "소개 사이트(공식 저장소와 별개로 운영되는 것으로 보이며 운영 주체 미확인).", n3: "프로젝트",
      n12: "MiroFish 개발자와 성다 그룹 투자 관련 보도.", n15: "(비공식 한국어 포크)",
      refsSub: "날짜는 원문 공개일 기준. 모든 링크는 2026년 10월 7일 확인(14·15번은 검색 결과 요약 기준). 제목은 각 출처의 원어로 표기했습니다.",
    },
  },
  en: {
    title: "MiroFish",
    description: "A reference on MiroFish, the open-source swarm-intelligence engine that builds a virtual society from a single document to explore the future — its structure, the OASIS engine beneath it, uses and limits — compiled from official material, papers and validation reports.",
    notes: {
      n1: "repository.", n2: "Introduction site (appears to be run separately from the official repository; operator unconfirmed).", n3: "project",
      n12: "Report on MiroFish’s developer and the Shanda Group investment.", n15: "(unofficial Korean fork)",
      refsSub: "Dates are original publication dates. All links checked on 7 October 2026 (items 14 and 15 per search-result summaries). Titles are given in the original language of each source.",
    },
  },
  ja: {
    title: "MiroFish",
    description: "文書一つから仮想社会を作って未来を探るオープンソースの群知能エンジンMiroFishの構造・基盤技術OASIS・活用・限界を、公式資料・論文・検証レポートで整理したリファレンス。",
    notes: {
      n1: "リポジトリ。", n2: "紹介サイト(公式リポジトリとは別に運営されているとみられ、運営主体は未確認)。", n3: "プロジェクト",
      n12: "MiroFish開発者と盛大グループの投資に関する報道。", n15: "(非公式の韓国語フォーク)",
      refsSub: "日付は原文の公開日を基準としています。すべてのリンクは2026年10月7日に確認しました(14・15番は検索結果の要約に基づく)。題名は各出典の原語のまま記載しています。",
    },
  },
};

// 본문은 content/mirofish.{ko,en,ja}.html에 보관하고, 공통 참고문헌 목록(mirofish.refs.html)은 언어별 문구로 채웁니다.
const read = (name: string) => readFileSync(path.join(/* turbopackIgnore: true */ process.cwd(), "content", name), "utf8");
const refsHtml = read("mirofish.refs.html");
const bodyHtml = Object.fromEntries(
  LOCALES.map((locale) => {
    const n = meta[locale].notes;
    return [locale, read(`mirofish.${locale}.html`)
      .replace("<!--REFS-->", refsHtml)
      .replace("{{refs_sub}}", n.refsSub)
      .replace("{{n1}}", n.n1).replace("{{n2}}", n.n2).replace("{{n3}}", n.n3)
      .replace("{{n12}}", n.n12).replace("{{n15}}", n.n15)];
  }),
) as Record<Locale, string>;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFrom(params);
  return createPageMetadata({ title: meta[locale].title, description: meta[locale].description, path: "/insights/mirofish", locale });
}

export default async function MiroFishPage({ params }: LangParams) {
  const locale = await localeFrom(params);
  const c = common[locale].crumbs;
  return <>
    <JsonLd data={breadcrumbJsonLd([{ name: c.home, path: "/" }, { name: "INSIGHTS", path: "/insights/mirofish" }, { name: "MiroFish", path: "/insights/mirofish" }], locale)} />
    <div className="wm" lang={HTML_LANG[locale]} dangerouslySetInnerHTML={{ __html: bodyHtml[locale] }} />
  </>;
}
