import type { Locale } from "@/lib/locale";

type Pair = [string, string];

export type CinemindCopy = {
  metaTitle: string; metaDesc: string; serviceType: string; serviceDesc: string;
  ctas: [string, string, string, string];
  hero: { title: [string, string]; lede: string; tags: [string, string, string, string]; alt: string };
  problemHead: string;
  problems: Pair[];
  stat: { text: string; source: string };
  whyHead: string;
  differences: Pair[];
  fig: { alt: string; title: string; copy: string };
  howHead: string; howCopy: string; resultLabel: string;
  steps: Array<[string, string, string, string]>;
  dash: { label: string; alt: string };
  featuresHead: string;
  cards: {
    analysis: { title: string; body: string };
    fit: { title: string; body: string };
    conditionsTitle: string;
    reportTitle: string; reportIntro: string;
    interview: { title: string; body: string; subTitle: string; subBody: string };
  };
  conditions: Pair[];
  reportItems: Pair[];
  useCase: { head: string; copy: string; down: { who: string; steps: string[]; result: string }; up: { who: string; steps: string[]; result: string }; note: string; qTitle: string };
  questions: string[];
  audienceHead: string;
  audiences: Pair[];
  trustHead: string;
  trust: Pair[];
  engagement: { head: string; copy: string; pilotTitle: string; lede: string; facts: Pair[] };
  pilotSteps: Array<[string, string, string]>;
  faqHead: string;
  faq: Pair[];
  soon: { head: string; items: string[]; note: string; alpha: string };
  cta: { title: [string, string]; copy: string };
};

const ko: CinemindCopy = {
  metaTitle: "Cinemind — 콘텐츠 흥행 예측 AI 시뮬레이션",
  metaDesc: "가상 소비자 AI 에이전트 집단이 영화·영상·웹툰·숏드라마의 시장 반응을 공개 전에 시뮬레이션합니다. 결말·예고편·공개 주기를 바꿔 가며 비교하세요.",
  serviceType: "가상 소비자 AI 에이전트 기반 콘텐츠 흥행 예측 서비스",
  serviceDesc: "영화·영상·웹툰 기획 데이터를 활용해 가상 소비자 AI 에이전트를 생성하고, 집단 반응 시뮬레이션으로 콘텐츠 시장 반응을 공개 전에 예측합니다.",
  ctas: ["협업 문의", "작동 방식 보기", "협업 문의", "소개 자료 받기"],
  hero: {
    title: ["기획 단계에서 글로벌 흥행까지,", "공개 전에 시장 반응을 먼저 실험합니다"],
    lede: "Cinemind는 수천에서 수십만 명 규모의 가상 소비자 생태계에서 작품에 대한 시장 반응을 미리 시뮬레이션하는 콘텐츠 의사결정 엔진입니다. 대본·시놉시스·예고편·웹툰 원고를 올리고 결말, 예고편, 공개 주기를 바꿔 보면서 어떤 선택이 관심과 확산을 만드는지 공개 전에 비교해 보세요.",
    tags: ["영화", "영상", "웹툰", "숏드라마"],
    alt: "가상 소비자 군중이 네트워크로 연결되어 극장 스크린의 작품에 반응하는 모습을 표현한 일러스트",
  },
  problemHead: "이런 고민, 있으셨나요?",
  stat: { text: "2025년 순제작비 30억 원 이상 한국 상업영화 30편의 평균 추정 수익률. 손익분기점을 넘긴 작품은 6편(20%)이었습니다.", source: "출처: 영화진흥위원회 「2025년 한국 영화산업 결산」(아주경제, 2026.07.20 재인용)" },
  whyHead: "Cinemind는 이렇게 다릅니다",
  fig: { alt: "작품의 인물·사건·감정 관계망과 관객군·플랫폼 시장 관계망이 연결된 2층 구조 인포그래픽", title: "콘텐츠 관계망 × 시장 관계망", copy: "위층은 인물·사건·감정의 콘텐츠 관계망, 아래층은 관객군·팬덤·평론가·플랫폼의 시장 관계망입니다. 취향·서사 적합성과 노출 이력으로 두 층을 이어 어떤 장면이 어떤 관객의 행동을 이끄는지 추적합니다." },
  howHead: "이렇게 사용합니다", howCopy: "자료 입력부터 비교 리포트까지, 다섯 단계로 실험이 끝납니다.", resultLabel: "결과물",
  dash: { label: "Cinemind 홈 화면", alt: "Cinemind 시작 화면: 기획서·시나리오·시놉시스 파일을 올리는 영역과 등장 집단·반응 경로·기간·비교할 실제 영화 설정, 최근 프로젝트 목록" },
  featuresHead: "주요 기능",
  cards: {
    analysis: { title: "작품을 구조 데이터로 바꾸는 콘텐츠 분석", body: "대본·영상·웹툰에서 인물(관계·동기·성격 변화), 사건(인과·순서·반전 위치), 갈등(대립 축·고조·해소), 감정 변화(장면·회차별 감정 곡선), 장면·회차(길이·배치·클리프행어)를 뽑아냅니다. 회차별 긴장·호감 곡선과 인물 관계도로 이탈 위험 구간과 반전 지점을 한눈에 봅니다." },
    fit: { title: "서사 요소 × 관객군 적합도", body: "빠른 도입부, 로맨스 비중, 반전 결말, 원작 충실도, 클리프행어 같은 서사 요소가 원작 팬·신규 20대·해외 로맨스 팬·스릴러 선호층 등 관객군에 얼마나 맞는지 표로 보여 줍니다. 적합도가 엇갈리는 요소는 바로 조건 변경 실험으로 이어 갈 수 있습니다." },
    conditionsTitle: "바꿀 수 있는 다섯 가지 조건",
    reportTitle: "예측 리포트", reportIntro: "조건별 회차 관심도 곡선과 함께 다섯 가지를 정리해 드립니다.",
    interview: { title: "에이전트 인터뷰", body: "“왜 2화에서 시청을 보류했나요?”처럼 가상 소비자에게 직접 묻습니다. 답변은 해당 에이전트에 기록된 노출·행동 이력과 맞춰 볼 수 있고, 실제 소비자 인터뷰 결과와는 구분해서 표시합니다.", subTitle: "언제든 재현할 수 있는 실험", subBody: "모든 실행의 에이전트 상태·노출·행동 이력이 자동으로 쌓이고, 실험 버전과 시드를 기록합니다. 같은 조건이면 같은 실험을 다시 돌려 볼 수 있습니다." },
  },
  useCase: {
    head: "이런 결정에 씁니다", copy: "예시: 반전 결말을 넣을까? — 8화에 결말을 공개하는 반전 하나가 관객군마다 전혀 다른 길을 만듭니다.",
    down: { who: "원작 팬", steps: ["설정 훼손으로 받아들임", "부정 리뷰 작성", "커뮤니티 논쟁 확산"], result: "관심 하락 · 양극화" },
    up: { who: "신규 관객", steps: ["예측 못 한 전개에 몰입", "추천·공유", "신규 유입 증가"], result: "관심 상승" },
    note: "결말 A(반전)와 결말 B(원작)를 같은 관객 구성·같은 초기 조건으로 반복 실행해 비교하면, 8화 결말 공개 이후 관객군별로 경로가 갈리는 지점과 그 이유를 확인할 수 있습니다. (예시)",
    qTitle: "이런 질문에 답합니다",
  },
  audienceHead: "이런 분께 맞습니다",
  trustHead: "믿고 쓰실 수 있도록",
  engagement: { head: "도입 방식", copy: "지금은 국내 영화 제작사의 IP를 대상으로 파일럿을 진행하고 있습니다.", pilotTitle: "파일럿", lede: "공개 일정이 정해진 작품의 실제 선택지 1~2건을 골라, 예측부터 사후 검증까지 함께합니다.", facts: [["산출물", "사전 예측 리포트 · 사후 대조 리포트 · 보정 내역"], ["성공 기준 (사전 합의)", "예측 방향 일치 · 단순 기준 모형 대비 개선 · 실제 의사결정 활용 · 구독 전환 의향"], ["참여 조건", "공개 일정 확정 · 성과 데이터 공유 가능 · 의사결정 대안 2개 이상"], ["기간·가격", "파일럿 범위에 따라 협의"]] },
  faqHead: "자주 묻는 질문",
  soon: { head: "곧 제공될 기능", items: ["다국가 예측엔진 베타 — 국가·문화권별 페르소나 확장", "수천~수십만 에이전트 규모로 시뮬레이션 확대", "실제 데이터로 보정된 규모별 비용·속도 안내"], note: "공개 일정은 확정되는 대로 안내해 드립니다.", alpha: "현재 개발자 테스트(ALPHA) 단계입니다. 기능과 일정은 변경될 수 있습니다." },
  cta: { title: ["결정하기 전에,", "반응부터 실험하세요"], copy: "공개 후에 확인하던 시장 반응을 이제 기획 단계에서 미리 봅니다. 기획에서 글로벌 흥행까지, Cinemind와 함께 준비하세요." },
problems: [
  ["결정은 공개 전에 하고, 반응은 공개 후에야 알 수 있습니다.", "제작·판권·마케팅에 들어갈 돈은 공개 전에 확정되지만, 그 시점에는 실제 관객 반응 데이터가 없습니다."],
  ["설문과 FGI는 작고 느립니다.", "표본을 모으는 데 비용이 들고, 기획을 바꿀 때마다 다시 조사해야 합니다. 응답을 하나하나 합칠 뿐이라 관객끼리 주고받는 영향은 담지 못합니다."],
  ["과거 흥행작 비교로는 \"이렇게 바꾸면?\"에 답할 수 없습니다.", "이미 나온 결과만 설명할 수 있고, 새로운 장르·포맷이나 해외 시장은 비교할 대상부터 부족합니다."],
  ["입소문이 어디로 번질지는 공개해 봐야 압니다.", "나라·취향별 반응 차이, 팬덤·리뷰·SNS를 거쳐 퍼지는 입소문과 논쟁은 공개 뒤에야 보입니다."],
],

differences: [
  ["한 사람에게 묻지 않고, 집단에 풀어 놓습니다", "나라·문화·취향이 다른 가상 소비자 수백 명 규모의 집단이 서로 추천하고, 공유하고, 논쟁합니다. 규모는 수천~수십만 명으로 확대할 예정입니다. 관심도·몰입·이탈·확산 지표로 대안들을 비교합니다."],
  ["작품과 시장을 따로 이해하고, 연결합니다", "작품 속 인물·사건·갈등·감정 변화는 콘텐츠 관계망으로, 관객군·팬덤·평론가·인플루언서·매체·플랫폼은 시장 관계망으로 만든 뒤 두 관계망을 잇습니다. 어떤 장면이 어떤 관객의 행동을 이끄는지 추적할 수 있습니다."],
  ["가상 소비자도 보고 들은 것을 기억합니다", "같은 관객이라도 예고편을 봤는지, 친구 추천을 받았는지, 논란을 접했는지에 따라 판단이 달라집니다. 가상 소비자는 성향, 사전 경험, 현재 상태, 경험 기억을 갖고 시청·보류·이탈·결제·추천·비판을 스스로 고릅니다."],
  ["반응이 시간과 채널을 따라 번지는 과정을 봅니다", "공개 전 → 공개 초기 → 확산 → 지속까지 여러 회차로 실행합니다. SNS, 팬 커뮤니티, 리뷰 공간, 콘텐츠 플랫폼마다 다른 노출·행동 규칙을 적용합니다."],
  ["숫자만 주지 않고 근거까지 보여 줍니다", "반응이 꺾인 시점, 확산을 이끈 관객군, 원인이 된 장면·대사를 리포트로 받습니다. 궁금한 것은 가상 소비자에게 직접 물어볼 수 있습니다."],
  ["실제 성과로 계속 보정합니다", "공개 후 실제 관객 수·시청·결제 데이터와 예측을 맞대어 보고, 어긋난 만큼 모델을 고칩니다. 실험이 쌓일수록 보정 기준이 늘어납니다."],
],

steps: [
  ["01", "자료 입력", "대본·시놉시스·예고편·웹툰 원고를 올리고, 타깃 국가와 관객군을 고릅니다", "인물·사건·감정 구조 데이터"],
  ["02", "관계망 확인", "추출된 인물·사건·감정·회차를 검토하고 고칩니다", "콘텐츠·시장 관계망"],
  ["03", "실험 조건 설정", "기준안과 변경안을 정하고 결말·예고편·공개 주기 같은 변수를 지정합니다", "실험 설계서"],
  ["04", "실행", "에이전트 수와 실행 회차를 정해 돌리고 진행 상황을 지켜봅니다", "회차별 반응 로그"],
  ["05", "리포트·심층 질의", "결과를 비교하고, 가상 소비자 인터뷰로 근거를 따라갑니다", "비교 리포트"],
],

conditions: [
  ["작품", "도입부, 인물 설정, 사건 순서, 결말"],
  ["시장", "출시 국가, 타깃 관객, 원작 팬 비중"],
  ["마케팅", "예고편, 포스터, 홍보 메시지, 초기 노출 집단"],
  ["유통", "공개 주기, 무료 회차, 가격, 출시 시점"],
  ["외부 사건", "경쟁작 등장, 부정적 리뷰, 특정 장면의 화제화"],
],

reportItems: [
  ["반응 전환점", "관심이 오르거나 꺾인 시점"],
  ["주도·억제 관객군", "확산을 이끌었거나 막은 집단"],
  ["연결된 요소", "반응 변화와 관련된 장면·대사·홍보 요소"],
  ["핵심 가정·부족 데이터", "결과를 크게 바꾸는 가정을 밝힘"],
  ["후속 질의", "특정 에이전트에게 이유를 묻는 심층 질문"],
],

questions: [
  "이 결말과 저 결말 중 어느 쪽이 해외 로맨스 팬에게 더 오래 남을까?",
  "예고편에서 복수 서사를 먼저 보여 주면 2화 이탈이 줄어들까?",
  "주 2회 공개와 몰아 보기 공개 중 입소문이 더 크게 나는 쪽은?",
  "경쟁작이 같은 주에 나오면 우리 작품의 초기 관심은 얼마나 흔들릴까?",
],

audiences: [
  ["영화 제작·투자사", "제작 승인, 판권 구매, 캐스팅, 마케팅 예산처럼 되돌리기 어려운 결정을 앞둔 팀. 공개 전에 대안별 반응을 비교해 근거 있는 결정을 내릴 수 있습니다."],
  ["숏드라마·OTT·영상 제작사", "회차 구성과 공개 주기를 정해야 하는 팀. 특히 숏드라마는 회차 공개 주기가 짧아 예측 → 검증 → 보정이 빠르게 돌아갑니다."],
  ["웹툰·IP 보유사", "원작을 영상화하거나 해외로 내보낼 때 원작 팬과 신규 관객의 반응이 어떻게 갈릴지 미리 확인하고 싶은 팀."],
  ["플랫폼·배급사", "IP 포트폴리오 전체와 캠페인 의사결정에 반응 예측을 붙이고 싶은 팀. 연간 계약형 API와 전용 분석 환경으로 자체 콘텐츠·시청·구매 데이터와 연동할 수 있습니다."],
],

trust: [
  ["예측은 먼저 기록하고, 나중에 검증합니다", "공개 전에 예측을 제출해 시점을 고정하고, 사후에 고치지 않습니다. 맞힌 사례와 틀린 사례를 함께 보고합니다."],
  ["시뮬레이션 결과임을 분명히 밝힙니다", "리포트에 나온 차이는 모델 안에서의 효과입니다. 실제 인과 효과는 A/B 테스트 같은 별도 실험으로 검증하도록 안내합니다."],
  ["실제 데이터로 성능을 확인합니다", "공개 전 시점 정보만 넣은 미공개 검증셋으로 실제 관심·시청·구매 지표와 비교하고, 유사작·장르 평균 같은 단순 기준 모형보다 얼마나 나은지 평가합니다."],
  ["고객 자료는 따로 보관합니다", "업로드한 작품 원문은 고객별로 격리해 저장하며, 학습에 쓰려면 별도 동의를 받습니다."],
  ["개인을 식별하지 않습니다", "관객·시장 데이터는 개인 식별 정보를 빼고 집계 단위로만 씁니다."],
  ["데이터를 섞지 않습니다", "콘텐츠 원문, 관객·시장 데이터, 실제 성과, 시뮬레이션 로그를 분리해 쌓고, 학습용과 검증용 데이터를 나눕니다."],
],

pilotSteps: [
  ["01", "의사결정 선정", "결말·예고편·공개 주기·타깃 국가 중 1~2건을 고릅니다"],
  ["02", "사전 예측 기록", "공개 전에 예측을 제출하고 시점을 고정합니다. 사후 수정은 하지 않습니다"],
  ["03", "공개", "고객사가 실제로 작품을 공개하고 캠페인을 진행합니다"],
  ["04", "성과 대조", "관객·시청·구매 지표와 예측을 비교합니다"],
  ["05", "모델 보정", "오차 원인을 분석하고 파라미터를 조정합니다"],
  ["06", "사례 보고서", "고객 동의 범위 안에서 레퍼런스로 정리합니다"],
],

faq: [
  ["어떤 자료를 올리면 되나요?", "대본, 시놉시스, 예고편 영상, 웹툰 원고를 올릴 수 있습니다. 마케팅 소재가 있으면 함께 넣어 예고편·포스터 조건 실험에 씁니다."],
  ["가상 소비자는 실제 사람의 데이터인가요?", "아니요. 공개 통계, 리뷰, 커뮤니티 공개 글 등을 집계 단위로 참고해 만든 가상의 페르소나입니다. 개인 식별 정보는 쓰지 않습니다."],
  ["예측 결과를 그대로 믿어도 되나요?", "시뮬레이션은 실제 관객 데이터를 대신하지 않습니다. 점수 하나보다는 어떤 조건이 어떤 관객군에서 위험이나 기회를 만드는지 찾는 데 쓰시고, 중요한 결정은 실제 테스트와 함께 검증하시길 권합니다. Cinemind는 공개 후 실제 성과와 대조해 모델을 계속 보정합니다."],
  ["ChatGPT나 Claude에게 대본 평가를 맡기는 것과 무엇이 다른가요?", "범용 AI는 한 번의 프롬프트로 요약·평가를 돌려줍니다. Cinemind는 작품 구조와 시장 관계망을 연결한 뒤, 기억을 가진 가상 소비자 집단이 시간과 채널을 따라 서로 영향을 주고받는 과정을 여러 회차에 걸쳐 실행합니다. 조건을 바꿔 비교하고, 결과의 근거를 추적할 수 있습니다."],
  ["우리 작품 원고가 다른 곳에 쓰이지는 않나요?", "업로드한 원문은 고객별로 격리 저장합니다. 모델 학습에 쓰려면 별도로 동의를 받습니다."],
  ["해외 시장 반응도 볼 수 있나요?", "출시 국가와 타깃 관객을 조건으로 바꿔 비교할 수 있습니다. 국가·문화권별 페르소나는 계속 늘려 가고 있으며, 현재 지원 국가는 도입 상담 시 안내해 드립니다."],
  ["숏드라마에도 쓸 수 있나요?", "네. 회차가 많고 공개 주기가 짧아 회차별 이탈 구간과 클리프행어 효과를 보기에 특히 잘 맞습니다."],
],
};

const en: CinemindCopy = {
  metaTitle: "Cinemind — AI Simulation for Content Box-Office Prediction",
  metaDesc: "A crowd of virtual-consumer AI agents simulates market reaction to films, video, webtoons and short dramas before release. Compare endings, trailers and release cadences.",
  serviceType: "Content box-office prediction service based on virtual-consumer AI agents",
  serviceDesc: "Creates virtual-consumer AI agents from film, video and webtoon planning data and predicts content market reaction before release through group-reaction simulation.",
  ctas: ["Collaboration inquiry", "See how it works", "Collaboration inquiry", "Request an overview"],
  hero: {
    title: ["From concept to global hit,", "test market reaction before release"],
    lede: "Cinemind is a content decision engine that simulates market reaction to your work in advance, inside an ecosystem where thousands to hundreds of thousands of virtual consumers live. Upload a script, synopsis, trailer or webtoon manuscript, change the ending, trailer or release cadence, and compare which choices create interest and buzz before release.",
    tags: ["Film", "Video", "Webtoon", "Short drama"],
    alt: "Illustration of a crowd of virtual consumers connected by a network, reacting to a work on a cinema screen",
  },
  problemHead: "Sound familiar?",
  problems: [
    ["Decisions are made before release, but reactions only show up after.", "Money for production, rights and marketing is committed before release, yet at that point there is no real audience-reaction data."],
    ["Surveys and FGIs are small and slow.", "Collecting samples costs money, and every change to the plan means re-running the research. They simply add up individual answers and can't capture how audiences influence one another."],
    ["Comparing past hits can't answer “what if we change this?”", "They can only explain results that already exist, and for new genres, formats or overseas markets there is little to compare against to begin with."],
    ["You only learn where word of mouth spreads after release.", "Differences in reaction by country and taste, and the buzz and controversy that spread through fandoms, reviews and social media, only become visible after release."],
  ],
  stat: { text: "Average estimated profit rate of 30 Korean commercial films with net production costs of KRW 3 billion or more in 2025. Only 6 films (20%) passed break-even.", source: "Source: Korean Film Council, “2025 Year-End Review of the Korean Film Industry” (cited by Ajunews, 2026.07.20)" },
  whyHead: "How Cinemind is different",
  differences: [
    ["Ask a crowd, not one person", "A group of hundreds of virtual consumers from different countries, cultures and tastes recommend, share and argue with one another. We plan to scale up to thousands to hundreds of thousands. Alternatives are compared by interest, immersion, drop-off and spread metrics."],
    ["Understand the work and the market separately, then connect them", "Characters, events, conflicts and emotional shifts in the work become a content network, while audience groups, fandoms, critics, influencers, media and platforms become a market network — and the two are linked. You can trace which scene drives which audience's behavior."],
    ["Virtual consumers remember what they see and hear", "Even the same viewer judges differently depending on whether they saw the trailer, got a friend's recommendation or ran into a controversy. Each virtual consumer has a disposition, prior experience, current state and memory, and chooses on its own to watch, hold off, drop off, pay, recommend or criticize."],
    ["Watch reactions spread across time and channels", "Runs across multiple rounds — pre-release, early release, spread and sustain — applying different exposure and behavior rules for social media, fan communities, review spaces and content platforms."],
    ["Evidence, not just numbers", "Get the moment reaction turned, the audience groups that drove spread, and the scenes and lines behind it in a report. If you're curious, ask the virtual consumers directly."],
    ["Continuously calibrated with real results", "After release, we compare actual audience, viewing and payment data with predictions and correct the model by the gap. The more experiments accumulate, the more calibration baselines grow."],
  ],
  fig: { alt: "Two-layer infographic linking the work's character-event-emotion network with the audience-group and platform market network", title: "Content network × market network", copy: "The upper layer is the content network of characters, events and emotions; the lower layer is the market network of audience groups, fandoms, critics and platforms. Linking the two by taste and narrative fit and by exposure history, we trace which scene drives which audience's behavior." },
  howHead: "How to use it", howCopy: "From inputting materials to a comparison report, an experiment is done in five steps.", resultLabel: "Output",
  steps: [
    ["01", "Input materials", "Upload scripts, synopses, trailers or webtoon manuscripts and choose target countries and audience groups", "Character, event and emotion structure data"],
    ["02", "Review the networks", "Review and edit the extracted characters, events, emotions and episodes", "Content & market networks"],
    ["03", "Set experiment conditions", "Define the baseline and variant, and specify variables such as ending, trailer and release cadence", "Experiment design"],
    ["04", "Run", "Set the number of agents and rounds, run it and watch progress", "Per-round reaction logs"],
    ["05", "Report & deep queries", "Compare results and follow the evidence through virtual-consumer interviews", "Comparison report"],
  ],
  dash: { label: "Cinemind home screen", alt: "Cinemind start screen: an area to upload plan, scenario and synopsis files, settings for cast groups, reaction paths, period and real films to compare, and a list of recent projects" },
  featuresHead: "Key features",
  cards: {
    analysis: { title: "Content analysis that turns a work into structured data", body: "From scripts, video and webtoons we extract characters (relationships, motives, personality changes), events (causality, order, twist positions), conflicts (axes of opposition, escalation, resolution), emotional shifts (scene- and episode-level emotion curves), and scenes and episodes (length, placement, cliffhangers). Episode-level tension and likability curves and character relationship maps show drop-off risk zones and twist points at a glance." },
    fit: { title: "Narrative elements × audience-group fit", body: "A table shows how well narrative elements such as a fast opening, share of romance, twist ending, fidelity to the original and cliffhangers fit audience groups like original fans, new viewers in their 20s, overseas romance fans and thriller lovers. Elements where fit diverges can go straight into a condition-change experiment." },
    conditionsTitle: "Five conditions you can change",
    reportTitle: "Prediction report", reportIntro: "Along with per-episode interest curves by condition, we summarize five things for you.",
    interview: { title: "Agent interviews", body: "Ask virtual consumers directly, such as “Why did you hold off watching at episode 2?” Answers can be checked against the exposure and behavior history actually recorded for that agent, and are labeled separately from real consumer interviews.", subTitle: "Experiments you can reproduce anytime", subBody: "Each run automatically accumulates agent states, exposure and behavior history and records the experiment version and seed. With the same conditions, you can run the same experiment again." },
  },
  conditions: [
    ["Work", "Opening, character setup, event order, ending"],
    ["Market", "Release country, target audience, share of original fans"],
    ["Marketing", "Trailer, poster, promotional message, initial exposure group"],
    ["Distribution", "Release cadence, free episodes, price, release timing"],
    ["External events", "Competitor release, negative reviews, a particular scene going viral"],
  ],
  reportItems: [
    ["Reaction turning points", "When interest rose or fell"],
    ["Leading & suppressing audience groups", "The groups that drove or blocked spread"],
    ["Connected elements", "Scenes, lines and promotional elements tied to shifts in reaction"],
    ["Key assumptions & missing data", "Surfaces assumptions that change results significantly"],
    ["Follow-up queries", "In-depth questions asking specific agents why"],
  ],
  useCase: {
    head: "Decisions it supports", copy: "Example: should we add a twist ending? — A single twist revealed in episode 8 sends each audience group down a completely different path.",
    down: { who: "Original fans", steps: ["Take it as a violation of the setting", "Post negative reviews", "Controversy spreads in communities"], result: "Interest falls · polarization" },
    up: { who: "New viewers", steps: ["Immersed in an unexpected turn", "Recommend and share", "New inflow increases"], result: "Interest rises" },
    note: "Run Ending A (twist) and Ending B (original) repeatedly with the same audience mix and initial conditions, and you can see where paths diverge by audience group after the episode 8 reveal — and why. (Example)",
    qTitle: "Questions it answers",
  },
  questions: [
    "Which ending stays with overseas romance fans longer?",
    "If the trailer leads with the revenge storyline, will episode-2 drop-off shrink?",
    "Which creates bigger word of mouth: twice-a-week releases or binge release?",
    "If a competitor launches the same week, how much will our initial interest wobble?",
  ],
  audienceHead: "Who it's for",
  audiences: [
    ["Film production & investment companies", "Teams facing hard-to-reverse decisions such as production approval, rights purchase, casting and marketing budgets. Compare reactions to each alternative before release and decide on solid evidence."],
    ["Short-drama, OTT & video production companies", "Teams that must set episode structure and release cadence. Short dramas in particular have short release cycles, so predict → verify → calibrate runs quickly."],
    ["Webtoon & IP holders", "Teams who want to see in advance how original fans and new audiences will react differently when adapting a work to video or taking it overseas."],
    ["Platforms & distributors", "Teams that want to attach reaction prediction to whole IP portfolios and campaign decisions. An annual-contract API and a dedicated analysis environment can connect to your own content, viewing and purchase data."],
  ],
  trustHead: "So you can rely on it",
  trust: [
    ["Predictions are recorded first, verified later", "Predictions are submitted before release to lock the timestamp and are never edited afterward. Hits and misses are reported together."],
    ["We state clearly that these are simulation results", "Differences in a report are effects inside the model. We advise verifying actual causal effects with separate experiments such as A/B tests."],
    ["Performance is checked against real data", "We compare against real interest, viewing and purchase metrics on a held-out validation set that contains only pre-release information, and evaluate how much better we do than simple baselines such as similar titles or genre averages."],
    ["Your materials are stored separately", "Uploaded manuscripts are stored isolated per customer, and separate consent is required before they are used for training."],
    ["We don't identify individuals", "Audience and market data are used only in aggregate, with personally identifiable information removed."],
    ["Data is never mixed", "Content manuscripts, audience and market data, real results and simulation logs are stored separately, and training and validation data are kept apart."],
  ],
  engagement: { head: "How we work together", copy: "We are currently running a pilot on the IP of Korean film production companies.", pilotTitle: "Pilot", lede: "Pick one or two real choices on a work with a set release date and work with you from prediction through post-release verification.", facts: [["Deliverables", "Pre-release prediction report · Post-release comparison report · Calibration log"], ["Success criteria (agreed in advance)", "Direction of prediction matches · Improvement over simple baselines · Used in real decisions · Intent to subscribe"], ["Participation requirements", "Confirmed release date · Able to share performance data · Two or more decision alternatives"], ["Duration & pricing", "Negotiated based on pilot scope"]] },
  pilotSteps: [
    ["01", "Select decisions", "Choose one or two among ending, trailer, release cadence and target country"],
    ["02", "Record predictions in advance", "Submit predictions before release to lock the timestamp. No edits afterward"],
    ["03", "Release", "The customer actually releases the work and runs the campaign"],
    ["04", "Compare results", "Compare audience, viewing and purchase metrics with the predictions"],
    ["05", "Calibrate the model", "Analyze causes of error and adjust parameters"],
    ["06", "Case report", "Summarize as a reference within the scope the customer consents to"],
  ],
  faqHead: "Frequently asked questions",
  faq: [
    ["What materials can I upload?", "You can upload scripts, synopses, trailer videos and webtoon manuscripts. If you have marketing materials, include them to use in trailer and poster experiments."],
    ["Are the virtual consumers based on real people's data?", "No. They are fictional personas created with reference to public statistics, reviews and publicly posted community content at an aggregate level. Personally identifiable information is not used."],
    ["Can I trust the predictions as they are?", "A simulation does not replace real audience data. Use it to find which conditions create risk or opportunity for which audience groups rather than to read a single score, and verify important decisions with real tests as well. Cinemind keeps calibrating the model against real post-release results."],
    ["How is this different from asking ChatGPT or Claude to evaluate a script?", "A general-purpose AI returns a summary and evaluation from one prompt. Cinemind connects the work's structure with a market network and then runs, over multiple rounds, a group of virtual consumers with memory influencing one another across time and channels. You can compare by changing conditions and trace the evidence behind results."],
    ["Will my manuscript be used anywhere else?", "Uploaded manuscripts are stored isolated per customer. Separate consent is requested before they are used for model training."],
    ["Can I see overseas market reactions?", "You can change the release country and target audience as conditions and compare. We keep adding country- and culture-specific personas; we will tell you which countries are currently supported during adoption consultation."],
    ["Can it be used for short dramas?", "Yes. With many episodes and short release cycles, it is especially well suited to seeing per-episode drop-off points and cliffhanger effects."],
  ],
  soon: { head: "Coming soon", items: ["Multi-country prediction engine beta — expanding personas by country and culture", "Scaling simulations up to thousands to hundreds of thousands of agents", "Cost and speed guidance by scale, calibrated with real data"], note: "We will let you know the release schedule once it is confirmed.", alpha: "This product is currently in developer testing (ALPHA). Features and schedules may change." },
  cta: { title: ["Before you decide,", "experiment with reaction"], copy: "Preview the market reaction you used to check only after release, right at the planning stage. From concept to global hit, prepare with Cinemind." },
};

const ja: CinemindCopy = {
  metaTitle: "Cinemind — コンテンツのヒット予測AIシミュレーション",
  metaDesc: "仮想消費者AIエージェントの集団が、映画・映像・ウェブトゥーン・ショートドラマへの市場の反応を公開前にシミュレーションします。結末・予告編・公開サイクルを変えて比較できます。",
  serviceType: "仮想消費者AIエージェントによるコンテンツヒット予測サービス",
  serviceDesc: "映画・映像・ウェブトゥーンの企画データから仮想消費者AIエージェントを生成し、集団反応シミュレーションによって、コンテンツへの市場の反応を公開前に予測します。",
  ctas: ["協業のお問い合わせ", "仕組みを見る", "協業のお問い合わせ", "資料を請求する"],
  hero: {
    title: ["企画段階からグローバルヒットまで、", "公開前に市場の反応を先に実験します"],
    lede: "Cinemindは、数千〜数十万人の仮想消費者が暮らすエコシステムで、作品に対する市場の反応を事前にシミュレーションするコンテンツ意思決定エンジンです。脚本・シノプシス・予告編・ウェブトゥーン原稿をアップロードし、結末・予告編・公開サイクルを変えながら、どの選択が関心と拡散を生むのかを公開前に比較してみてください。",
    tags: ["映画", "映像", "ウェブトゥーン", "ショートドラマ"],
    alt: "仮想消費者の群衆がネットワークでつながり、劇場のスクリーンの作品に反応する様子を表したイラスト",
  },
  problemHead: "こんなお悩みはありませんか？",
  problems: [
    ["意思決定は公開前に、反応は公開後にしかわかりません。", "制作・権利・マーケティングに投じる費用は公開前に確定しますが、その時点では実際の観客の反応データがありません。"],
    ["アンケートやFGIは小規模で時間がかかります。", "サンプルを集めるのに費用がかかり、企画を変えるたびに調査をやり直す必要があります。回答を一つずつ足し合わせるだけなので、観客同士が与え合う影響までは捉えられません。"],
    ["過去のヒット作との比較では、「こう変えたら？」に答えられません。", "すでに出た結果しか説明できず、新しいジャンル・フォーマットや海外市場では、比較対象そのものが不足します。"],
    ["口コミがどこへ広がるかは、公開してみないとわかりません。", "国や好みによる反応の違い、ファンダム・レビュー・SNSを通じて広がる口コミや議論は、公開後にようやく見えてきます。"],
  ],
  stat: { text: "2025年、純制作費30億ウォン以上の韓国の商業映画30本の平均推定収益率。損益分岐点を超えた作品は6本（20%）でした。", source: "出典：韓国映画振興委員会「2025年 韓国映画産業 決算」（アジュ経済、2026.07.20 再引用）" },
  whyHead: "Cinemindはここが違います",
  differences: [
    ["一人に尋ねず、集団に解き放ちます", "国・文化・好みの異なる数百人規模の仮想消費者の集団が、互いに推薦し、共有し、議論します。規模は数千〜数十万人へ拡大する予定です。関心度・没入・離脱・拡散の指標で、代替案を比較します。"],
    ["作品と市場を別々に理解し、つなぎます", "作品内の人物・出来事・葛藤・感情の変化はコンテンツ関係網に、観客層・ファンダム・評論家・インフルエンサー・メディア・プラットフォームは市場関係網にしたうえで、二つの関係網をつなぎます。どの場面がどの観客の行動を促すのかを追跡できます。"],
    ["仮想消費者も、見聞きしたことを覚えています", "同じ観客でも、予告編を見たか、友人の推薦を受けたか、炎上に触れたかによって判断が変わります。仮想消費者は、性向、事前の経験、現在の状態、経験の記憶を持ち、視聴・保留・離脱・課金・推薦・批判を自ら選びます。"],
    ["反応が時間とチャネルに沿って広がる過程を見ます", "公開前 → 公開初期 → 拡散 → 持続まで、複数のラウンドで実行します。SNS、ファンコミュニティ、レビューの場、コンテンツプラットフォームごとに異なる露出・行動ルールを適用します。"],
    ["数字だけでなく、根拠まで示します", "反応が下降に転じた時点、拡散を牽引した観客層、原因となった場面・台詞をレポートで受け取れます。気になることは、仮想消費者に直接尋ねられます。"],
    ["実際の成果で、継続的に補正します", "公開後の実際の観客数・視聴・決済データと予測を照らし合わせ、ずれた分だけモデルを修正します。実験が積み重なるほど、補正の基準が増えていきます。"],
  ],
  fig: { alt: "作品の人物・出来事・感情の関係網と、観客層・プラットフォームの市場関係網がつながった2層構造のインフォグラフィック", title: "コンテンツ関係網 × 市場関係網", copy: "上の層は人物・出来事・感情のコンテンツ関係網、下の層は観客層・ファンダム・評論家・プラットフォームの市場関係網です。好み・物語の適合性と露出履歴で2つの層をつなぎ、どの場面がどの観客の行動を促すのかを追跡します。" },
  howHead: "このように使います", howCopy: "資料の入力から比較レポートまで、5つのステップで実験が完了します。", resultLabel: "成果物",
  steps: [
    ["01", "資料の入力", "脚本・シノプシス・予告編・ウェブトゥーン原稿をアップロードし、ターゲット国と観客層を選びます", "人物・出来事・感情の構造データ"],
    ["02", "関係網の確認", "抽出された人物・出来事・感情・エピソードを確認し、修正します", "コンテンツ・市場の関係網"],
    ["03", "実験条件の設定", "基準案と変更案を決め、結末・予告編・公開サイクルなどの変数を指定します", "実験設計書"],
    ["04", "実行", "エージェント数と実行ラウンド数を決めて実行し、進行状況を見守ります", "ラウンド別の反応ログ"],
    ["05", "レポート・深掘り質問", "結果を比較し、仮想消費者へのインタビューで根拠をたどります", "比較レポート"],
  ],
  dash: { label: "Cinemindホーム画面", alt: "Cinemindの開始画面：企画書・シナリオ・シノプシスのファイルをアップロードする領域と、登場集団・反応経路・期間・比較する実在の映画の設定、最近のプロジェクト一覧" },
  featuresHead: "主な機能",
  cards: {
    analysis: { title: "作品を構造データに変えるコンテンツ分析", body: "脚本・映像・ウェブトゥーンから、人物（関係・動機・性格の変化）、出来事（因果・順序・どんでん返しの位置）、葛藤（対立軸・高まり・解消）、感情の変化（場面・エピソード別の感情曲線）、場面・エピソード（長さ・配置・クリフハンガー）を抽出します。エピソード別の緊張・好感度の曲線と人物関係図で、離脱リスクの区間とどんでん返しのポイントをひと目で把握できます。" },
    fit: { title: "物語要素 × 観客層の適合度", body: "速い導入部、ロマンスの比重、どんでん返しの結末、原作への忠実度、クリフハンガーなどの物語要素が、原作ファン・新規20代・海外のロマンスファン・スリラー好き層などの観客層にどれだけ合うかを、表で示します。適合度が分かれる要素は、そのまま条件変更の実験につなげられます。" },
    conditionsTitle: "変更できる5つの条件",
    reportTitle: "予測レポート", reportIntro: "エピソード別の関心度曲線とともに、次の5つをまとめてお届けします。",
    interview: { title: "エージェントインタビュー", body: "「なぜ2話で視聴を保留したのですか？」のように、仮想消費者に直接尋ねられます。回答は、そのエージェントに実際に記録された露出・行動履歴と照らして確認でき、実際の消費者インタビューの結果とは区別して表示します。", subTitle: "いつでも再現できる実験", subBody: "すべての実行のエージェントの状態・露出・行動履歴が自動で蓄積され、実験のバージョンとシードを記録します。同じ条件であれば、同じ実験をもう一度実行できます。" },
  },
  conditions: [
    ["作品", "導入部、人物設定、出来事の順序、結末"],
    ["市場", "公開国、ターゲット観客、原作ファンの比率"],
    ["マーケティング", "予告編、ポスター、プロモーションメッセージ、初期露出グループ"],
    ["流通", "公開サイクル、無料エピソード、価格、公開時期"],
    ["外部の出来事", "競合作の登場、否定的なレビュー、特定の場面の話題化"],
  ],
  reportItems: [
    ["反応の転換点", "関心が高まった、または冷めた時点"],
    ["牽引・抑制した観客層", "拡散を牽引した、または妨げた集団"],
    ["関連する要素", "反応の変化に関連する場面・台詞・プロモーション要素"],
    ["重要な仮定・不足データ", "結果を大きく左右する仮定を明示"],
    ["追加の質問", "特定のエージェントに理由を尋ねる深掘り質問"],
  ],
  useCase: {
    head: "このような意思決定に使います", copy: "例：どんでん返しの結末を入れるべきか？ — 8話で結末が明かされる一つのどんでん返しが、観客層ごとにまったく異なる道をつくります。",
    down: { who: "原作ファン", steps: ["設定の毀損と受け止める", "否定的なレビューを書く", "コミュニティで議論が拡散"], result: "関心の低下 · 二極化" },
    up: { who: "新規の観客", steps: ["予想外の展開に没入", "推薦・共有", "新規流入の増加"], result: "関心の上昇" },
    note: "結末A（どんでん返し）と結末B（原作どおり）を、同じ観客構成・同じ初期条件で繰り返し実行して比較すると、8話の結末公開以降、観客層ごとに経路が分かれる地点とその理由を確認できます。（例）",
    qTitle: "こんな問いに答えます",
  },
  questions: [
    "この結末とあの結末、海外のロマンスファンの心により長く残るのはどちらか？",
    "予告編で復讐の物語を先に見せると、2話での離脱は減るか？",
    "週2回公開と一気見公開では、口コミがより大きく広がるのはどちらか？",
    "競合作が同じ週に公開されたら、自社作品の初期の関心はどれほど揺らぐか？",
  ],
  audienceHead: "こんな方に向いています",
  audiences: [
    ["映画の制作・投資会社", "制作承認、権利購入、キャスティング、マーケティング予算など、やり直しの難しい意思決定を控えたチーム。公開前に代替案ごとの反応を比較し、根拠のある判断ができます。"],
    ["ショートドラマ・OTT・映像制作会社", "エピソード構成と公開サイクルを決める必要があるチーム。特にショートドラマは公開サイクルが短く、予測 → 検証 → 補正が素早く回ります。"],
    ["ウェブトゥーン・IP保有会社", "原作を映像化したり海外へ展開したりする際、原作ファンと新規の観客の反応がどう分かれるかを事前に確認したいチーム。"],
    ["プラットフォーム・配給会社", "IPポートフォリオ全体やキャンペーンの意思決定に、反応予測を取り入れたいチーム。年間契約型APIと専用分析環境で、自社のコンテンツ・視聴・購買データと連携できます。"],
  ],
  trustHead: "安心してお使いいただくために",
  trust: [
    ["予測は先に記録し、後から検証します", "公開前に予測を提出して時点を固定し、事後には修正しません。的中した事例と外れた事例を併せて報告します。"],
    ["シミュレーション結果であることを明確にします", "レポートに示される差は、モデル内での効果です。実際の因果効果は、A/Bテストなど別の実験で検証するようご案内します。"],
    ["実際のデータで性能を確認します", "公開前の時点の情報のみを入れた未公開の検証セットで、実際の関心・視聴・購買指標と比較し、類似作やジャンル平均といった単純な基準モデルをどれだけ上回るかを評価します。"],
    ["お客様の資料は別々に保管します", "アップロードされた作品の原文はお客様ごとに分離して保存し、学習に使う場合は別途ご同意をいただきます。"],
    ["個人を特定しません", "観客・市場データは、個人を特定できる情報を除き、集計単位でのみ使用します。"],
    ["データを混ぜません", "コンテンツの原文、観客・市場データ、実際の成果、シミュレーションログを分離して蓄積し、学習用と検証用のデータを分けます。"],
  ],
  engagement: { head: "導入方法", copy: "現在、韓国の映画制作会社のIPを対象に、パイロットを実施しています。", pilotTitle: "パイロット", lede: "公開日程が決まっている作品の、実際の選択肢1〜2件を選び、予測から事後検証まで一緒に進めます。", facts: [["成果物", "事前予測レポート · 事後照合レポート · 補正履歴"], ["成功基準（事前合意）", "予測方向の一致 · 単純な基準モデルに対する改善 · 実際の意思決定での活用 · 購読への転換意向"], ["参加条件", "公開日程の確定 · 成果データの共有が可能 · 意思決定の代替案が2つ以上"], ["期間・価格", "パイロットの範囲に応じて協議"]] },
  pilotSteps: [
    ["01", "意思決定の選定", "結末・予告編・公開サイクル・ターゲット国のうち1〜2件を選びます"],
    ["02", "事前予測の記録", "公開前に予測を提出し、時点を固定します。事後の修正は行いません"],
    ["03", "公開", "お客様が実際に作品を公開し、キャンペーンを実施します"],
    ["04", "成果の照合", "観客・視聴・購買の指標と予測を比較します"],
    ["05", "モデルの補正", "誤差の原因を分析し、パラメータを調整します"],
    ["06", "事例レポート", "お客様の同意の範囲内で、リファレンスとしてまとめます"],
  ],
  faqHead: "よくあるご質問",
  faq: [
    ["どのような資料をアップロードすればよいですか？", "脚本、シノプシス、予告編映像、ウェブトゥーン原稿をアップロードできます。マーケティング素材があれば、一緒に入れて予告編・ポスターの条件実験に使います。"],
    ["仮想消費者は、実在の人物のデータですか？", "いいえ。公開統計、レビュー、コミュニティの公開投稿などを集計単位で参考にして作成した、架空のペルソナです。個人を特定できる情報は使用しません。"],
    ["予測結果をそのまま信じてよいですか？", "シミュレーションは、実際の観客データの代わりにはなりません。一つのスコアよりも、どの条件がどの観客層にリスクや機会を生むのかを見つけるためにお使いいただき、重要な意思決定は実際のテストと併せて検証することをおすすめします。Cinemindは、公開後の実際の成果と照合してモデルを補正し続けます。"],
    ["ChatGPTやClaudeに脚本の評価を任せるのと、何が違いますか？", "汎用AIは、一度のプロンプトで要約・評価を返します。Cinemindは、作品の構造と市場関係網をつなげたうえで、記憶を持つ仮想消費者の集団が時間とチャネルに沿って互いに影響を与え合う過程を、複数ラウンドにわたって実行します。条件を変えて比較でき、結果の根拠を追跡できます。"],
    ["私たちの作品の原稿が、他で使われることはありませんか？", "アップロードされた原文は、お客様ごとに分離して保存します。モデルの学習に使う場合は、別途ご同意をいただきます。"],
    ["海外市場の反応も見られますか？", "公開国とターゲット観客を条件として変え、比較できます。国・文化圏別のペルソナは拡充を続けており、現在の対応国は導入のご相談の際にご案内します。"],
    ["ショートドラマにも使えますか？", "はい。エピソード数が多く公開サイクルが短いため、エピソードごとの離脱区間やクリフハンガーの効果を見るのに特に適しています。"],
  ],
  soon: { head: "近日提供予定の機能", items: ["多国対応の予測エンジン ベータ — 国・文化圏別ペルソナの拡充", "数千〜数十万エージェント規模へのシミュレーション拡大", "実データで補正した、規模別のコスト・速度のご案内"], note: "公開日程は、確定次第お知らせします。", alpha: "現在、開発者テスト（ALPHA）の段階です。機能や日程は変更される場合があります。" },
  cta: { title: ["決める前に、", "反応から実験しましょう"], copy: "公開後に確認していた市場の反応を、企画段階で先に見ることができます。企画からグローバルヒットまで、Cinemindと一緒に準備しましょう。" },
};

export const cinemind: Record<Locale, CinemindCopy> = { ko, en, ja };
