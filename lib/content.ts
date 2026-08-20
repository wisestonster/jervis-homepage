const demoHost = process.env.NEXT_PUBLIC_DEMO_HOST || "jervis.viewdns.net";

export const navItems = [
  { href: "/about", label: "ABOUT US" },
  { href: "/technology", label: "TECHNOLOGY" },
  { href: "/project", label: "PROJECT" },
  { href: "/product", label: "SOLUTION" },
  { href: "/news", label: "NEWS" },
  { href: "/contact", label: "CONTACT" },
];

export const technologies = [
  {
    index: "01",
    title: "하이브리드 블록체인",
    summary: "HDAC, REAPCHAIN 등 합의알고리즘 개발 및 메인넷 운영",
    details: [
      ["속도 & 확장성", "높은 TPS와 확장성을 보장하는 하이브리드 합의 알고리즘"],
      ["안정성 & 신뢰성", "엄격한 보안 프로토콜과 검증된 스마트컨트랙트"],
      ["Web3 최적화", "기존 규제 충족과 산업 친화적 모듈 제공"],
    ],
  },
  {
    index: "02",
    title: "Web3 & DApp",
    summary: "DAO, DeFi, 거버넌스 등 탈중앙화 서비스 구현",
    details: [["구현 범위", "탈중앙화 자율 조직 구축 · DeFi 프로토콜 개발 · 거버넌스 시스템 설계"]],
  },
  {
    index: "03",
    title: "NFT & 토큰화",
    summary: "NFT 마켓플레이스, 스마트컨트랙트, 토큰 이코노미 설계",
    details: [["구현 범위", "NFT 마켓플레이스 구축 · 토큰 이코노미 설계 · 디지털 자산 관리"]],
  },
  {
    index: "04",
    title: "AI 저작권 증명",
    summary: "Proof of Creativity 시스템으로 창작성 자동 증명",
    description: "AI 기반 창작 활동 모니터링 및 자동 기록으로 디지털 창작물의 저작권을 블록체인에 증명합니다.",
    details: [["구현 범위", "영상, 음원, 이미지 등 창작성 자동 분석 · 실시간 저작권 귀속 및 증명 · 블록체인 기반 불변의 증명서 발급"]],
  },
];

export const projects = [
  {
    name: "HDAC",
    type: "하이브리드 블록체인 메인넷",
    summary: "IoT와 블록체인을 결합한 하이브리드 합의알고리즘 개발 및 메인넷 운영",
    details: ["하이브리드 PoW/PoS 합의 메커니즘", "IoT 디바이스 통합 블록체인", "디앱 생태계 구축", "메인넷 개발완료"],
  },
  {
    name: "REAPCHAIN",
    type: "차세대 블록체인 프로토타입",
    summary: "고성능 하이브리드 블록체인 합의알고리즘 설계 및 메인넷 프로토타입 개발",
    details: ["혁신적 합의 알고리즘 설계", "고성능 트랜잭션 처리", "확장 가능한 아키텍처", "프로토타입 개발완료"],
  },
  {
    name: "PUBLISH Protocol",
    type: "미디어 생태계 솔루션",
    summary: "블록체인 기반 미디어 생태계 프로토콜 개발 및 언론사 협업 플랫폼 구축",
    details: ["50개 언론사 협업", "월간 760만 UV", "투명한 미디어 생태계", "프로토콜 개발완료"],
  },
];

export type ProjectCase = { title: string; copy: string; image: string; alt: string };

export const projectCases: ProjectCase[] = [
  { title: "글로벌 안전 메타버스", copy: "NFT 마켓과 스마트컨트랙트가 탑재된 메타버스 서비스", image: "/case-metaverse.png", alt: "NFT 마켓과 스마트컨트랙트 기반 메타버스를 표현한 일러스트" },
  { title: "NFT 카메라 앱", copy: "지갑 기능이 탑재된 NFT 발행 사진 애플리케이션", image: "/case-nft-camera.png", alt: "지갑 연동 NFT 카메라 앱을 표현한 일러스트" },
  { title: "P2P 원리금수취권 NFT", copy: "P2P 대출의 원리금수취권을 NFT로 토큰화한 혁신 서비스", image: "/case-p2p-nft.png", alt: "P2P 원리금수취권의 NFT 토큰화를 표현한 일러스트" },
  { title: "블록체인 기부 시스템", copy: "투명한 가상자산 후원 및 NFT 기부영수증 발급 시스템", image: "/case-donation.png", alt: "블록체인 기부와 NFT 기부영수증을 표현한 일러스트" },
  { title: "K-컬처 소셜토큰", copy: "영화, 음악, 드라마 크리에이터 후원 생태계 구축", image: "/case-social-token.png", alt: "K-컬처 크리에이터 소셜토큰 생태계를 표현한 일러스트" },
  { title: "저작권 로열티 NFT", copy: "소프트웨어 저작권 로열티 및 영업권 멤버십 NFT 발행", image: "/case-royalty-nft.png", alt: "저작권 로열티와 멤버십 NFT를 표현한 일러스트" },
  { title: "저작권기반 DAO 플랫폼 개발", copy: "IP 저작권을 보유한 공동 저작권자들이 함께 의사결정에 참여하고, 제안하고 기록하며 권리경제를 공유하는 시스템", image: "/case-dao.png", alt: "저작권 기반 DAO 거버넌스 플랫폼을 표현한 일러스트" },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  demo?: string;
  demoLabel?: string;
  posterImage?: string;
  markImage?: string;
  status: string;
  accent: string;
  features: Array<[string, string]>;
  flow: Array<[string, string]>;
  audiences: string[];
};

export const products: Product[] = [
  {
    slug: "jervisbox",
    name: "JervisBox",
    category: "AI 창작성 증명 서비스",
    tagline: "완성 파일이 아니라, 창작의 과정을 증명합니다.",
    description: "프롬프트, 레퍼런스, AI 생성 결과와 사람의 편집 과정을 순서대로 해시하고 지갑으로 서명해 블록체인에 기록합니다. 원본 파일은 로컬에 두고, 창작 사실을 검증할 수 있는 증거만 온체인에 남깁니다.",
    demo: `http://${demoHost}:8080/`,
    status: "BETA · PROOF OF PROCESS",
    accent: "product-blue",
    features: [
      ["과정 단위 기록", "첫 프롬프트부터 최종 편집까지 창작 이벤트를 시간순으로 기록합니다."],
      ["파일은 로컬, 증명은 온체인", "원본 파일을 업로드하지 않고 콘텐츠 해시와 지갑 서명만 커밋합니다."],
      ["Merkle 기반 최종 봉인", "여러 창작 이벤트를 하나의 Merkle root로 묶어 선택한 체인에 기록합니다."],
      ["퍼블릭 인증서", "공개 URL과 QR을 통해 프로젝트, 타임스탬프와 온체인 트랜잭션을 검증합니다."],
    ],
    flow: [["Record", "창작 프로젝트와 이벤트를 기록"], ["Sign", "연결 지갑으로 각 해시에 서명"], ["Seal", "Merkle root를 블록체인에 봉인"]],
    audiences: ["AI 영상·이미지 크리에이터", "광고·콘텐츠 제작사", "공모전·심사기관", "저작권 관리 조직"],
  },
  {
    slug: "artpass",
    name: "ArtPass",
    category: "블록체인 기반 미술품 등기 서비스",
    tagline: "실물 미술품의 등기부를 온체인에.",
    description: "미술품 등록, 진품확인서 발급과 소유권 이전 이력을 관리하는 작품 등기 서비스입니다. 작품 1점당 등기 NFT 1개를 발행하고, 검증된 소유권 이전 절차를 통해 이력을 이어갑니다.",
    demo: `http://${demoHost}:3030/`,
    status: "BETA · ARTWORK REGISTRY",
    accent: "product-cyan",
    features: [
      ["작품 등록 & 심사", "작가·화랑이 작품 정보, 이미지와 친필 서명을 등록하면 관리자가 서류를 검토합니다."],
      ["등기 NFT 발행", "승인된 작품은 작품당 하나의 ERC-721 등기 NFT와 인증서 해시를 갖습니다."],
      ["소유권 이전", "양측의 인도 확인을 포함한 검증 절차를 거친 경우에만 소유권 이력을 갱신합니다."],
      ["공개 검증", "누구나 등록번호와 QR을 통해 작품 등록, 진품확인서와 이전 이력을 확인합니다."],
    ],
    flow: [["Register", "작품 정보와 증빙을 등록"], ["Approve", "관리자 심사 후 등기 NFT 발행"], ["Verify", "QR로 등록·이전 이력을 검증"]],
    audiences: ["작가·화랑", "미술품 컬렉터", "경매·유통사", "미술품 보관·관리기관"],
  },
  {
    slug: "melomancedao",
    name: "MelomanceDAO",
    category: "블록체인 기반 상업영화 제작 프로젝트",
    tagline: "참여, 공유, 개방으로 함께 만드는 영화.",
    description: "국내 최초로 블록체인 기술을 상업영화 제작에 도입한 프로젝트입니다. NFT 발행으로 제작비를 조달하고, DAO 커뮤니티가 배우 캐스팅·로케이션 선정·굿즈 제작·스토리 구조 변경까지 기획 단계의 의사결정에 참여하며, 관객·팬의 참여 기여도에 따라 보상과 인센티브를 제공합니다.",
    demo: "https://melomance.dothome.co.kr/",
    demoLabel: "홈페이지 이동",
    posterImage: "/melomancedao-poster.jpg",
    status: "CASE STUDY · WEB3 FILM DAO",
    accent: "product-gold",
    features: [
      ["NFT 제작비 조달", "NFT 발행을 통해 영화 제작비를 투명하게 조달합니다."],
      ["DAO 의사결정", "배우 캐스팅, 로케이션 선정, 스토리 구조 변경까지 커뮤니티가 함께 결정합니다."],
      ["NFT 굿즈 제작", "프로젝트 진행에 맞춰 한정판 NFT 굿즈를 기획하고 발행합니다."],
      ["기여 기반 보상", "관객·팬의 참여 기여도에 따라 보상과 인센티브를 제공합니다."],
    ],
    flow: [["Fund", "NFT 발행으로 제작비 조달"], ["Decide", "DAO 커뮤니티가 기획 단계 의사결정에 참여"], ["Reward", "참여 기여도에 따른 보상·인센티브 제공"]],
    audiences: ["관객·팬", "NFT·Web3 투자자", "엔터테인먼트 제작사", "크리에이터·창작자"],
  },
  {
    slug: "coresetdao",
    name: "CoReset DAO",
    category: "AI 시대 권리 실행 인프라",
    tagline: "함께 기록하고 함께 권리를 만듭니다.",
    description: "공동저작권, 라이선스 실행과 제3자 대항력을 연결하는 AI 시대 권리 실행 인프라입니다. 공동 저작권자들이 함께 참여하고 제안하고 기록하며 새로운 권리 경제를 만들어가고, DAO 참여로 권리를 활성화하며 라이선스 사용과 권리 상태 변화를 기록합니다.",
    demo: "https://coreset.ai/",
    demoLabel: "서비스 바로가기",
    markImage: "/coreset-icon.png",
    status: "LIVE · AI RIGHTS INFRASTRUCTURE",
    accent: "product-emerald",
    features: [
      ["공동저작권 관리", "공동 저작권자들이 함께 참여하고 제안하며 권리 관계를 기록합니다."],
      ["DAO 기반 권리 활성화", "DAO 참여를 통해 저작권을 활성화하고 의사결정에 반영합니다."],
      ["라이선스 실행 기록", "라이선스 사용과 권리 상태 변화를 온체인에 기록합니다."],
      ["제3자 대항력 확보", "기록된 권리 관계로 제3자에 대한 대항력을 뒷받침합니다."],
    ],
    flow: [["Record", "공동 저작권자들이 참여·제안·기록"], ["Activate", "DAO 참여로 권리 활성화"], ["Enforce", "라이선스 실행과 제3자 대항력 확보"]],
    audiences: ["공동 저작권자", "AI 창작 도구·플랫폼", "라이선스 관리 기관", "저작권 법률 전문가"],
  },
  {
    slug: "jervix",
    name: "JerviX",
    category: "RWA STO Exchange",
    tagline: "실물자산의 발행과 거래를 하나의 시장으로.",
    description: "부동산, 미술품과 지식재산권 등 실물자산을 디지털 증권으로 구조화하고 발행·청약·거래·정산을 연결하는 RWA·STO 거래 플랫폼입니다.",
    demo: `http://${demoHost}:3040/`,
    status: "COMING SOON · RWA / STO",
    accent: "product-navy",
    features: [
      ["자산 구조화", "실물자산의 권리와 수익 구조를 디지털 증권 발행 조건으로 설계합니다."],
      ["발행 & 청약", "상품 정보, 투자 조건과 청약 과정을 투명하게 관리합니다."],
      ["규제 대응", "투자자 확인, 적격성, 거래 제한과 감사 이력을 시스템에 반영합니다."],
      ["거래 & 정산", "온체인 자산 원장과 주문·체결·정산 흐름을 연결합니다."],
    ],
    flow: [["Structure", "자산과 권리 구조 설계"], ["Issue", "디지털 증권 발행·청약"], ["Trade", "규정에 맞춘 거래·정산"]],
    audiences: ["자산 보유 기업", "증권·금융기관", "대체투자 운용사", "전문투자자"],
  },
  {
    slug: "dokreels",
    name: "DokReels",
    category: "AI영상콘텐츠 숏폼 서비스",
    tagline: "K-콘텐츠 크리에이터를 위한 숏폼 커뮤니티.",
    description: "AI 영상과 K-콘텐츠를 짧고 몰입감 있게 발견하고 공유하는 숏폼 커뮤니티입니다. 추천·팔로잉 피드, 크리에이터 탐색, 챌린지와 개인화 기능으로 콘텐츠와 팬을 연결합니다.",
    demo: `http://${demoHost}:3010/`,
    status: "BETA · K-CONTENT SHORTFORM",
    accent: "product-violet",
    features: [
      ["추천 & 팔로잉 피드", "관심사 기반 추천 영상과 팔로우한 크리에이터의 콘텐츠를 탐색합니다."],
      ["크리에이터 채널", "AI 영상 창작자가 프로필과 콘텐츠를 구축하고 팬과 연결됩니다."],
      ["챌린지", "주제별 챌린지로 새로운 콘텐츠 제작과 참여를 확장합니다."],
      ["개인화 컬렉션", "좋아요, 저장, 시청 반응을 맞춤 피드에 반영합니다."],
    ],
    flow: [["Create", "AI·K-콘텐츠 숏폼 업로드"], ["Discover", "추천 피드와 챌린지에서 발견"], ["Connect", "크리에이터와 팬 커뮤니티 연결"]],
    audiences: ["AI 영상 크리에이터", "K-콘텐츠 스튜디오", "브랜드·광고주", "숏폼 콘텐츠 팬"],
  },
];

export function getProduct(slug: string): Product {
  const product = products.find((item) => item.slug === slug);
  if (!product) throw new Error(`Unknown product slug: ${slug}`);
  return product;
}

export type NewsItem = {
  category: string;
  date: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  image: string;
};

export const newsItems: NewsItem[] = [
  {
    category: "RWA",
    date: "2026.08.18",
    title: "토큰화, 주식·채권 거래의 장벽을 낮출 수 있을까",
    summary: "전통 자산을 블록체인 토큰으로 전환해 24시간 거래, 빠른 결제와 소액 분할 소유를 구현하려는 금융권의 움직임이 확대되고 있습니다.",
    source: "Investor's Business Daily",
    url: "https://www.investors.com/news/tokenization-blockchain-stock-trading/",
    image: "https://www.investors.com/wp-content/uploads/2026/08/A1MAIN_tokenization_08172026_krause.jpg",
  },
  {
    category: "ECOSYSTEM",
    date: "2026.08.17",
    title: "Robinhood Chain TVL, 8월 들어 45% 증가",
    summary: "Robinhood Chain의 TVL이 5억4천만 달러를 넘어섰습니다. 스테이블코인 성장이 전체 네트워크 유동성 확대를 주도했습니다.",
    source: "The Block",
    url: "https://www.theblock.co/news/ecosystems/2026-08-17-robinhood-chain-tvl-surges-45-august-tokenized-rwas-lose-ground-411998",
    image: "https://www.tbstat.com/cdn-cgi/image/f%3Davif%2Cq%3D50/wp/uploads/2021/08/20210803_Robinhood_Crypto-1200x675.jpg",
  },
  {
    category: "TOKENIZATION",
    date: "2026.08.17",
    title: "토큰화 주식 시장점유율, 연초 대비 3배 성장",
    summary: "토큰화 주식의 RWA 시장점유율이 15%까지 높아졌고, 전체 시가총액은 약 28억 달러로 집계됐습니다.",
    source: "The Block",
    url: "https://www.theblock.co/news/defi/2026-08-17-tokenized-equities-triple-market-share-ondo-binance-xstocks-dominate-411996",
    image: "https://www.tbstat.com/cdn-cgi/image/f%3Davif%2Cq%3D50/wp/uploads/2026/04/20260409_Tokens_News-1200x675.jpg",
  },
  {
    category: "REGULATION",
    date: "2026.08.17",
    title: "미 재무부, GENIUS Act 스테이블코인 규칙 의견 수렴",
    summary: "미 재무부가 결제형 스테이블코인 발행과 해외 발행자 적용 기준을 구체화하기 위한 공개 의견 수렴을 시작했습니다.",
    source: "The Block",
    url: "https://www.theblock.co/news/regulation/2026-08-17-us-treasury-seeks-public-comment-genius-act-stablecoin-rules-411987",
    image: "https://www.tbstat.com/cdn-cgi/image/f%3Davif%2Cq%3D50/wp/uploads/2025/06/cropped-6-1200x675.jpg",
  },
  {
    category: "ETHEREUM",
    date: "2026.08.17",
    title: "Bitmine, 9,926 ETH 추가…보유액 약 110억 달러",
    summary: "Bitmine의 이더리움 보유량이 581만 ETH를 넘어섰습니다. 기업의 온체인 자산 운용과 스테이킹 전략이 함께 확대되고 있습니다.",
    source: "The Block",
    url: "https://www.theblock.co/news/business/2026-08-17-bitmine-adds-9926-eth-taking-total-holdings-to-roughly-11-billion-411968",
    image: "https://www.tbstat.com/cdn-cgi/image/f%3Davif%2Cq%3D50/wp/uploads/2025/09/ETH-Ethereum-1200x675.jpg",
  },
  {
    category: "POLICY",
    date: "2026.08.18",
    title: "백악관, 규제기관·업계와 디지털자산 정책 논의",
    summary: "미 행정부가 SEC·CFTC와 주요 디지털자산 기업을 모아 시장구조, 토큰화와 스테이블코인 규제 방향을 논의할 예정입니다.",
    source: "Investor's Business Daily",
    url: "https://www.investors.com/news/cryptocurrency-regulation-trump-white-house-meeting-crypto-prediction-market-executives-sec-cftc/",
    image: "https://www.investors.com/wp-content/uploads/2017/12/Stock-Whitehouse-01-adobe.jpg",
  },
];
