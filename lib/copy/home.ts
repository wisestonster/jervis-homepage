import type { Locale } from "@/lib/locale";

export type HomeCopy = {
  eyebrow: string; h1: [string, string, string]; lede: string; ctas: [string, string, string]; heroAlt: string;
  vision: { title: [string, string]; lede: string; body: string; link: string };
  services: { title: string; more: string; items: Array<{ title: string; copy: string; alt: string }> };
  loop: { title: string; steps: Array<[string, string, string]> };
};

export const home: Record<Locale, HomeCopy> = {
  ko: {
    eyebrow: "AI PREDICTION ENGINE · AUTOMATION",
    h1: ["콘텐츠 기반", "군집지능 ", "AI 예측엔진"],
    lede: "기획 단계에서 글로벌 흥행까지, 가상 소비자 생태계로 콘텐츠 시장 반응을 사전에 시뮬레이션합니다. 예측에서 제작 자동화까지 AI로 연결합니다.",
    ctas: ["Cinemind 보기", "Shot-X 보기", "상담 문의"],
    heroAlt: "수많은 가상 소비자 노드가 연결된 군집지능 네트워크 구체와 필름 릴을 표현한 일러스트",
    vision: {
      title: ["불확실성을 줄이고", "IP의 가치를 키웁니다"],
      lede: "기획 단계의 글로벌 시장 반응 검증으로 콘텐츠 투자 불확실성을 줄이고 IP 가치를 극대화합니다",
      body: "Jervis Labs는 영화·영상·웹툰 데이터를 활용한 가상 소비자 AI 에이전트와 집단 반응 시뮬레이션, 그리고 AI 제작 자동화 기술로 콘텐츠 의사결정과 제작 방식을 바꿉니다.",
      link: "회사 소개 보기",
    },
    services: {
      title: "예측하고, 만들고, 자동화합니다.", more: "자세히 보기",
      items: [
        { title: "콘텐츠 흥행 예측 서비스", copy: "영화·영상·웹툰 기획 데이터로 가상 소비자 AI 에이전트를 만들고, 집단 반응을 시뮬레이션해 공개 전에 시장 반응을 비교합니다.", alt: "가상 소비자 군중이 네트워크로 연결되어 극장 스크린의 작품에 반응하는 모습을 표현한 일러스트" },
        { title: "AI 숏드라마 제작 스튜디오", copy: "아이디어 한 줄에서 숏드라마 한 편까지. 기획·대본·콘티·영상·편집·출력을 하나의 프로젝트에서 끝냅니다.", alt: "세로형 스마트폰 프레임과 스토리보드, 타임라인으로 숏드라마 제작 과정을 표현한 일러스트" },
      ],
    },
    loop: {
      title: "기획에서 흥행까지, 하나의 AI 루프.",
      steps: [
        ["01", "기획 데이터", "대본·시놉시스·예고편·웹툰 원고를 구조 데이터로 바꿉니다."],
        ["02", "Cinemind — 예측", "가상 소비자 생태계에서 결말·예고편·공개 주기별 시장 반응을 미리 실험합니다."],
        ["03", "Shot-X — 제작", "선택한 기획을 숏드라마로 빠르게 영상화하고, 캐릭터와 톤을 회차 전반에 일관되게 유지합니다."],
        ["04", "성과로 재보정", "공개 후 실제 성과와 예측을 비교해 모델을 보정하며 정확도를 쌓아 갑니다."],
      ],
    },
  },
  en: {
    eyebrow: "AI PREDICTION ENGINE · AUTOMATION",
    h1: ["Content-based swarm intelligence", "", "AI prediction engine"],
    lede: "From concept to global hit, we simulate content market reaction in advance through a virtual consumer ecosystem. AI connects everything from prediction to production automation.",
    ctas: ["View Cinemind", "View Shot-X", "Contact us"],
    heroAlt: "Illustration of a swarm-intelligence network sphere of countless virtual-consumer nodes with film reels",
    vision: {
      title: ["Reduce uncertainty,", "grow the value of IP"],
      lede: "Validate global market reaction at the planning stage to reduce content investment uncertainty and maximize IP value",
      body: "Jervis Labs changes how content decisions are made and how content is produced, with virtual-consumer AI agents and group-reaction simulation built on film, video and webtoon data, plus AI production automation.",
      link: "About us",
    },
    services: {
      title: "Predict, create and automate.", more: "Learn more",
      items: [
        { title: "Content box-office prediction service", copy: "Builds virtual-consumer AI agents from film, video and webtoon planning data and simulates group reactions so you can compare market response before release.", alt: "Illustration of a crowd of virtual consumers connected by a network, reacting to a work on a cinema screen" },
        { title: "AI short-drama production studio", copy: "From a one-line idea to a finished short drama. Planning, scripting, storyboarding, video, editing and export — all in one project.", alt: "Illustration of the short-drama production process with vertical phone frames, storyboards and a timeline" },
      ],
    },
    loop: {
      title: "From concept to hit, one AI loop.",
      steps: [
        ["01", "Planning data", "Turns scripts, synopses, trailers and webtoon manuscripts into structured data."],
        ["02", "Cinemind — Predict", "Experiment in advance with market reaction by ending, trailer and release cadence in a virtual-consumer ecosystem."],
        ["03", "Shot-X — Produce", "Quickly turn the chosen plan into a short drama while keeping characters and tone consistent across episodes."],
        ["04", "Recalibrate with results", "After release, compare actual results against predictions and refine the model to build accuracy."],
      ],
    },
  },
  ja: {
    eyebrow: "AI PREDICTION ENGINE · AUTOMATION",
    h1: ["コンテンツに基づく群知能", "", "AI予測エンジン"],
    lede: "企画段階からグローバルヒットまで、仮想消費者のエコシステムでコンテンツへの市場の反応を事前にシミュレーションします。予測から制作の自動化まで、AIでつなぎます。",
    ctas: ["Cinemindを見る", "Shot-Xを見る", "お問い合わせ"],
    heroAlt: "無数の仮想消費者ノードがつながる群知能ネットワークの球体とフィルムリールを表したイラスト",
    vision: {
      title: ["不確実性を減らし、", "IPの価値を高めます"],
      lede: "企画段階でグローバル市場の反応を検証することで、コンテンツ投資の不確実性を減らし、IPの価値を最大化します",
      body: "Jervis Labsは、映画・映像・ウェブトゥーンのデータを活用した仮想消費者AIエージェントと集団反応シミュレーション、そしてAI制作自動化技術で、コンテンツの意思決定と制作のあり方を変えます。",
      link: "会社概要を見る",
    },
    services: {
      title: "予測し、つくり、自動化します。", more: "詳しく見る",
      items: [
        { title: "コンテンツのヒット予測サービス", copy: "映画・映像・ウェブトゥーンの企画データから仮想消費者AIエージェントを生成し、集団の反応をシミュレーションして、公開前に市場の反応を比較します。", alt: "仮想消費者の群衆がネットワークでつながり、劇場のスクリーンの作品に反応する様子を表したイラスト" },
        { title: "AIショートドラマ制作スタジオ", copy: "アイデア一行から、ショートドラマ一本まで。企画・脚本・コンテ・映像・編集・出力を、ひとつのプロジェクトで完結します。", alt: "縦型のスマートフォンフレーム、ストーリーボード、タイムラインでショートドラマの制作過程を表したイラスト" },
      ],
    },
    loop: {
      title: "企画からヒットまで、ひとつのAIループ。",
      steps: [
        ["01", "企画データ", "脚本・シノプシス・予告編・ウェブトゥーン原稿を構造化データに変換します。"],
        ["02", "Cinemind — 予測", "仮想消費者のエコシステムで、結末・予告編・公開サイクル別の市場の反応を事前に実験します。"],
        ["03", "Shot-X — 制作", "選んだ企画を素早くショートドラマとして映像化し、キャラクターとトーンをエピソード全体で一貫して保ちます。"],
        ["04", "成果で再補正", "公開後の実際の成果と予測を照らし合わせてモデルを修正し、精度を高めていきます。"],
      ],
    },
  },
};
