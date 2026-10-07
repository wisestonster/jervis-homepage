import type { Locale } from "@/lib/locale";

export type AboutCopy = {
  metaTitle: string; metaDesc: string; heroTitle: [string, string]; heroDesc: string;
  mission: { title: string; body: string };
  history: Array<{ year: string; items: string[] }>;
  awards: string[];
  teamTitle: string;
  team: Array<{ name: string; role: string; copy: string; alt: string }>;
};

const teamImages = ["/team-jerry.png", "/team-tommy.png", "/team-echo.png", "/team-designer.png"];
export { teamImages };

export const about: Record<Locale, AboutCopy> = {
  ko: {
    metaTitle: "회사소개",
    metaDesc: "AI 예측엔진과 제작 자동화 기술로 콘텐츠 시장의 불확실성을 줄이는 저비스랩스의 기술 역량과 사업 방향을 소개합니다.",
    heroTitle: ["혁신을 통한", "비즈니스 변화"],
    heroDesc: "JervisLabs는 AI 기술의 무한한 가능성을 현실로 만드는 전문기업입니다",
    mission: {
      title: "AI 기술을 통해 더 투명하고 효율적인 콘텐츠 시장을 만들어갑니다.",
      body: "기술의 복잡함은 줄이고 비즈니스의 가능성은 확장합니다. 콘텐츠 산업과 서비스에 최적화된 AI 예측·제작 자동화 솔루션을 설계하고 실행합니다.",
    },
    history: [
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
        "도로 위험 정보 SAFELAB 스마트 컨트랙트 개발",
        "디자인 저작권 관리 및 NFT 생성 시스템 블록체인 인프라 구축",
      ] },
      { year: "2024", items: [
        "칸웨이 NFT 마켓 개발",
        "칸짱 NFT 민팅 및 NFT 마켓 개발·운영",
      ] },
      { year: "2025", items: [
        "저비스랩스 기업부설연구소 설립",
        "숏폼 플랫폼 '칸태움' 앱 개발",
      ] },
      { year: "2026", items: [
        "저작권 기반 DAO 플랫폼 '코리셋DAO' 개발",
        "코리셋 오픈북 코어엔진 개발",
        "콘텐츠 흥행 예측 AI 'Cinemind' ALPHA 버전 개발",
        "AI 숏드라마 제작 스튜디오 'Shot-X' ALPHA 버전 개발",
      ] },
    ],
    awards: ["Blocko Dapp Contest 수상", "ICP Hackathon 우승 'Play Samble'"],
    teamTitle: "기술과 비즈니스를 연결하는 사람들",
    team: [
      { name: "Jerry Jung", role: "대표", copy: "AI 기업 경영과 기술 전략을 총괄하며 비즈니스 혁신을 이끕니다.", alt: "Jerry Jung 프로필 일러스트" },
      { name: "Tommy Han", role: "Dev Leader", copy: "AI 개발팀을 리드하며 대규모 에이전트 실행 구조와 기술 아키텍처를 책임집니다.", alt: "Tommy Han 프로필 일러스트" },
      { name: "Echo Lee", role: "AI Developer", copy: "AI 서비스와 자동화 애플리케이션 개발을 전담하는 전문가입니다.", alt: "Echo Lee 프로필 일러스트" },
      { name: "UI/UX Designer", role: "디자이너", copy: "사용자 중심의 직관적이고 아름다운 인터페이스를 디자인합니다.", alt: "UI/UX Designer 프로필 일러스트" },
    ],
  },
  en: {
    metaTitle: "About",
    metaDesc: "Learn about Jervis Labs' technology capabilities and business direction: reducing uncertainty in the content market with AI prediction engines and production automation.",
    heroTitle: ["Innovation that", "transforms business"],
    heroDesc: "Jervis Labs is a specialist company turning the limitless potential of AI into reality",
    mission: {
      title: "We use AI to build a more transparent and efficient content market.",
      body: "We reduce technical complexity and expand business possibilities, designing and delivering AI prediction and production-automation solutions optimized for the content industry and its services.",
    },
    history: [
      { year: "2022", items: [
        "Founded 'Jervis Labs'",
        "Political donation NFT project for Rep. Lee Kwang-jae",
        "Developed the DAO-based donation 'Jervis Protocol'",
        "Developed a crypto-donation platform for World Vision",
        "Developed points and membership NFTs for Chosun Ilbo",
        "Developed a crypto-donation service for the K-diaspora",
        "Developed the Reob on-chain records project",
      ] },
      { year: "2023", items: [
        "Developed the 'Candy Plus' camera NFT service",
        "Developed the AGLA token management dashboard",
        "Developed minting and funding services for 'MelomanceDAO'",
        "Developed smart contracts for SAFELAB road-hazard information",
        "Built blockchain infrastructure for design copyright management and an NFT creation system",
      ] },
      { year: "2024", items: [
        "Developed the Khanway NFT market",
        "Developed and operated Khanjjang NFT minting and the NFT market",
      ] },
      { year: "2025", items: [
        "Established the Jervis Labs corporate R&D center",
        "Developed the 'Khanteum' short-form platform app",
      ] },
      { year: "2026", items: [
        "Developed 'CoReset DAO', a copyright-based DAO platform",
        "Developed the CoReset Openbook core engine",
        "Developed the ALPHA version of 'Cinemind', a content hit-prediction AI",
        "Developed the ALPHA version of 'Shot-X', an AI short-drama production studio",
      ] },
    ],
    awards: ["Winner, Blocko Dapp Contest", "Winner, ICP Hackathon — 'Play Samble'"],
    teamTitle: "People who connect technology and business",
    team: [
      { name: "Jerry Jung", role: "CEO", copy: "Oversees AI business management and technology strategy and leads business innovation.", alt: "Profile illustration of Jerry Jung" },
      { name: "Tommy Han", role: "Dev Leader", copy: "Leads the AI development team and is responsible for large-scale agent execution architecture and technical design.", alt: "Profile illustration of Tommy Han" },
      { name: "Echo Lee", role: "AI Developer", copy: "A specialist dedicated to developing AI services and automation applications.", alt: "Profile illustration of Echo Lee" },
      { name: "UI/UX Designer", role: "Designer", copy: "Designs intuitive, beautiful, user-centered interfaces.", alt: "Profile illustration of the UI/UX designer" },
    ],
  },
  ja: {
    metaTitle: "会社概要",
    metaDesc: "AI予測エンジンと制作自動化技術でコンテンツ市場の不確実性を減らす、Jervis Labsの技術力と事業の方向性をご紹介します。",
    heroTitle: ["革新で、", "ビジネスを変える"],
    heroDesc: "Jervis Labsは、AI技術の無限の可能性を現実にする専門企業です",
    mission: {
      title: "AI技術を通じて、より透明で効率的なコンテンツ市場をつくります。",
      body: "技術の複雑さを減らし、ビジネスの可能性を広げます。コンテンツ産業とサービスに最適化された、AI予測・制作自動化ソリューションを設計・実行します。",
    },
    history: [
      { year: "2022", items: [
        "「Jervis Labs」設立",
        "李光宰議員 政治後援金NFTプロジェクト",
        "DAOベースの寄付・支援「Jervisプロトコル」開発",
        "ワールド・ビジョン向け暗号資産寄付プラットフォーム開発",
        "朝鮮日報ポイント・メンバーシップNFT開発",
        "K-ディアスポラ向け暗号資産寄付サービス開発",
        "Reobオンチェーン記録プロジェクト開発",
      ] },
      { year: "2023", items: [
        "「Candy Plus」カメラNFTサービス開発",
        "AGLAトークン管理ダッシュボード開発",
        "「MelomanceDAO」ミンティング・支援サービス開発",
        "道路危険情報「SAFELAB」スマートコントラクト開発",
        "デザイン著作権管理およびNFT生成システムのブロックチェーンインフラ構築",
      ] },
      { year: "2024", items: [
        "「Khanway」NFTマーケット開発",
        "「Khanjjang」NFTミンティングおよびNFTマーケットの開発・運営",
      ] },
      { year: "2025", items: [
        "Jervis Labs企業附設研究所を設立",
        "ショート動画プラットフォーム「Khanteum」アプリ開発",
      ] },
      { year: "2026", items: [
        "著作権ベースのDAOプラットフォーム「CoReset DAO」開発",
        "CoReset Openbookコアエンジン開発",
        "コンテンツのヒット予測AI「Cinemind」ALPHA版を開発",
        "AIショートドラマ制作スタジオ「Shot-X」ALPHA版を開発",
      ] },
    ],
    awards: ["Blocko Dapp Contest 受賞", "ICP Hackathon 優勝「Play Samble」"],
    teamTitle: "技術とビジネスをつなぐ人々",
    team: [
      { name: "Jerry Jung", role: "代表", copy: "AI企業の経営と技術戦略を統括し、ビジネス革新を牽引します。", alt: "Jerry Jungのプロフィールイラスト" },
      { name: "Tommy Han", role: "Dev Leader", copy: "AI開発チームを率い、大規模エージェントの実行構造と技術アーキテクチャを担います。", alt: "Tommy Hanのプロフィールイラスト" },
      { name: "Echo Lee", role: "AI Developer", copy: "AIサービスと自動化アプリケーションの開発を専任で担当する専門家です。", alt: "Echo Leeのプロフィールイラスト" },
      { name: "UI/UX Designer", role: "デザイナー", copy: "ユーザー中心の、直感的で美しいインターフェースをデザインします。", alt: "UI/UXデザイナーのプロフィールイラスト" },
    ],
  },
};
