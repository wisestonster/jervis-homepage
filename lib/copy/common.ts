import type { Locale } from "@/lib/locale";

export type Common = {
  site: { name: string; title: string; description: string; keywords: string[] };
  header: { home: string; menu: string; mainNav: string; language: string };
  footer: { line2: string; sitemap: string };
  cta: { title: [string, string]; button: string };
  sponsor: { text: string; logoAlt: string };
  crumbs: { home: string; about: string; technology: string; project: string; solution: string; contact: string; news: string; cinemind: string; shotx: string };
  product: {
    coreFeatures: string; howItWorks: string; howItWorksTitle: string; builtFor: string;
    demoDefault: string; inquiry: string; comingSoon: string;
    poster: (name: string) => string; icon: (name: string) => string; status: string; ready: string; inDev: string;
  };
  news: {
    metaTitle: string; metaDescription: string; heroTitle: string; heroDescription: string; empty: string; pagination: string; prev: string; next: string; note: string;
    kinds: { news: string; paper: string; company: string; report: string; social: string };
    why: string; impact: string; cross: (n: number) => string; original: string; imageAlt: (title: string) => string;
  };
};

export const common: Record<Locale, Common> = {
  ko: {
    site: {
      name: "저비스랩스",
      title: "저비스랩스(Jervis Labs) | AI 예측엔진·제작 자동화 기술 기업",
      description: "콘텐츠 기반 군집지능 AI 예측엔진 Cinemind와 AI 숏드라마 제작 스튜디오 Shot-X로 콘텐츠 시장 반응을 사전에 시뮬레이션하고 제작을 자동화합니다.",
      keywords: ["저비스랩스", "Jervis Labs", "JervisLabs", "저비스 랩스", "Cinemind", "Shot-X", "AI 예측엔진", "군집지능", "콘텐츠 흥행 예측", "가상 소비자", "AI 숏드라마", "제작 자동화", "WEB3", "블록체인"],
    },
    header: { home: "Jervis Labs 홈", menu: "메뉴 열기", mainNav: "주요 메뉴", language: "언어 선택" },
    footer: { line2: "AI 예측엔진과 자동화 기술로 콘텐츠·비즈니스의 의사결정을 혁신합니다.", sitemap: "사이트맵" },
    cta: { title: ["새로운 비즈니스의 시작,", "Jervis Labs와 함께하세요."], button: "상담 문의" },
    sponsor: { text: "저비스랩스는 디지털자산기부연구회(Digital Asset Donation Association)의 스폰서입니다.", logoAlt: "디지털자산기부연구회 로고" },
    crumbs: { home: "홈", about: "회사소개", technology: "기술", project: "프로젝트", solution: "솔루션", contact: "문의하기", news: "뉴스", cinemind: "Cinemind", shotx: "Shot-X" },
    product: {
      coreFeatures: "서비스의 핵심 기능", howItWorks: "HOW IT WORKS", howItWorksTitle: "간결하고 검증 가능한 흐름", builtFor: "BUILT FOR",
      demoDefault: "데모 서비스", inquiry: "도입 문의", comingSoon: "COMING SOON",
      poster: (name) => `${name} 포스터`, icon: (name) => `${name} 아이콘`, status: "STATUS", ready: "SERVICE READY", inDev: "IN DEVELOPMENT",
    },
    news: {
      metaTitle: "뉴스",
      metaDescription: "AI 예측·생성·자동화와 Web3·블록체인 분야의 최신 뉴스와 연구·기업 동향을 한국어 브리핑으로 제공합니다.",
      heroTitle: "AI·Web3 뉴스",
      heroDescription: "AI 예측·생성·자동화와 Web3·블록체인 분야의 뉴스와 연구·기업 발표를 검증된 출처 중심으로 정리합니다.",
      empty: "게시된 뉴스가 없습니다.", pagination: "뉴스 페이지", prev: "이전", next: "다음", note: "",
      kinds: { news: "뉴스", paper: "논문", company: "기업 발표", report: "보고서", social: "SNS" },
      why: "왜 중요한가", impact: "실무 영향", cross: (n) => `교차 검증 출처 ${n}개`, original: "원문 보기", imageAlt: (title) => `${title} 관련 이미지`,
    },
  },
  en: {
    site: {
      name: "Jervis Labs",
      title: "Jervis Labs | AI Prediction Engine & Production Automation",
      description: "Cinemind, a swarm-intelligence AI prediction engine built on content data, and Shot-X, an AI short-drama studio. Simulate content market reaction before release and automate production.",
      keywords: ["Jervis Labs", "JervisLabs", "저비스랩스", "Cinemind", "Shot-X", "AI prediction engine", "swarm intelligence", "box office prediction", "virtual consumers", "AI short drama", "production automation", "WEB3", "blockchain"],
    },
    header: { home: "Jervis Labs home", menu: "Open menu", mainNav: "Main menu", language: "Language" },
    footer: { line2: "Transforming content and business decisions with AI prediction and automation.", sitemap: "Sitemap" },
    cta: { title: ["Start something new", "with Jervis Labs."], button: "Contact us" },
    sponsor: { text: "Jervis Labs is a sponsor of the Digital Asset Donation Association.", logoAlt: "Digital Asset Donation Association logo" },
    crumbs: { home: "Home", about: "About", technology: "Technology", project: "Projects", solution: "Solutions", contact: "Contact", news: "News", cinemind: "Cinemind", shotx: "Shot-X" },
    product: {
      coreFeatures: "Core features", howItWorks: "HOW IT WORKS", howItWorksTitle: "A simple, verifiable flow", builtFor: "BUILT FOR",
      demoDefault: "Demo service", inquiry: "Adoption inquiry", comingSoon: "COMING SOON",
      poster: (name) => `${name} poster`, icon: (name) => `${name} icon`, status: "STATUS", ready: "SERVICE READY", inDev: "IN DEVELOPMENT",
    },
    news: {
      metaTitle: "News",
      metaDescription: "Latest news, research and company announcements on AI prediction, generation and automation, and on Web3 and blockchain.",
      heroTitle: "AI & Web3 News",
      heroDescription: "News, research and company announcements on AI prediction, generation and automation and on Web3 and blockchain, curated from verified sources.",
      empty: "No news has been published yet.", pagination: "News pages", prev: "Previous", next: "Next",
      note: "Article summaries are curated and provided in Korean. Use the original link to read the source.",
      kinds: { news: "News", paper: "Paper", company: "Company", report: "Report", social: "Social" },
      why: "Why it matters", impact: "Practical impact", cross: (n) => `${n} cross-checked sources`, original: "Read original", imageAlt: (title) => `Image for ${title}`,
    },
  },
  ja: {
    site: {
      name: "Jervis Labs",
      title: "Jervis Labs | AI予測エンジン・制作自動化テクノロジー企業",
      description: "コンテンツに基づく群知能AI予測エンジン「Cinemind」と、AIショートドラマ制作スタジオ「Shot-X」。コンテンツへの市場の反応を公開前にシミュレーションし、制作を自動化します。",
      keywords: ["Jervis Labs", "JervisLabs", "저비스랩스", "Cinemind", "Shot-X", "AI予測エンジン", "群知能", "ヒット予測", "仮想消費者", "AIショートドラマ", "制作自動化", "WEB3", "ブロックチェーン"],
    },
    header: { home: "Jervis Labs ホーム", menu: "メニューを開く", mainNav: "メインメニュー", language: "言語" },
    footer: { line2: "AI予測エンジンと自動化技術で、コンテンツとビジネスの意思決定を革新します。", sitemap: "サイトマップ" },
    cta: { title: ["新しいビジネスの始まりを、", "Jervis Labsと共に。"], button: "お問い合わせ" },
    sponsor: { text: "Jervis Labsは、デジタル資産寄付研究会（Digital Asset Donation Association）のスポンサーです。", logoAlt: "デジタル資産寄付研究会ロゴ" },
    crumbs: { home: "ホーム", about: "会社概要", technology: "技術", project: "プロジェクト", solution: "ソリューション", contact: "お問い合わせ", news: "ニュース", cinemind: "Cinemind", shotx: "Shot-X" },
    product: {
      coreFeatures: "サービスの主な機能", howItWorks: "HOW IT WORKS", howItWorksTitle: "シンプルで検証可能なフロー", builtFor: "BUILT FOR",
      demoDefault: "デモサービス", inquiry: "導入のお問い合わせ", comingSoon: "COMING SOON",
      poster: (name) => `${name} ポスター`, icon: (name) => `${name} アイコン`, status: "STATUS", ready: "SERVICE READY", inDev: "IN DEVELOPMENT",
    },
    news: {
      metaTitle: "ニュース",
      metaDescription: "AIの予測・生成・自動化、およびWeb3・ブロックチェーン分野の最新ニュース、研究、企業動向をお届けします。",
      heroTitle: "AI・Web3ニュース",
      heroDescription: "AIの予測・生成・自動化、Web3・ブロックチェーン分野のニュース、研究、企業発表を、検証済みの情報源を中心にまとめています。",
      empty: "公開中のニュースはありません。", pagination: "ニュースのページ", prev: "前へ", next: "次へ",
      note: "記事の要約は韓国語で提供しています。原文は各リンクからご確認ください。",
      kinds: { news: "ニュース", paper: "論文", company: "企業発表", report: "レポート", social: "SNS" },
      why: "なぜ重要か", impact: "実務への影響", cross: (n) => `クロスチェック済み情報源 ${n}件`, original: "原文を見る", imageAlt: (title) => `${title} 関連画像`,
    },
  },
};
