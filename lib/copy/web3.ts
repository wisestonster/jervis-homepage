import {
  products as baseProducts,
  projectCases as baseCases,
  projects as baseProjects,
  technologies as baseTechnologies,
  type Product,
  type ProjectCase,
} from "@/lib/content";
import type { Locale } from "@/lib/locale";

type Pair = [string, string];
type TechTr = { title: string; summary: string; description?: string; details: Pair[] };
type ProjectTr = { type: string; summary: string; details: string[] };
type CaseTr = { title: string; copy: string; alt: string };
type ProductTr = { category: string; tagline: string; description: string; demoLabel?: string; features: Pair[]; flow: Pair[]; audiences: string[] };

/* ───────── 기술 / 프로젝트 / 사례 번역 (한국어 원문은 lib/content.ts) ───────── */

const techTr: Record<"en" | "ja", TechTr[]> = {
  en: [
    { title: "Hybrid Blockchain", summary: "Developed consensus algorithms such as HDAC and REAPCHAIN and operated mainnets", details: [["Speed & scalability", "A hybrid consensus algorithm that delivers high TPS and scalability"], ["Stability & reliability", "Strict security protocols and proven smart contracts"], ["Web3 optimization", "Industry-friendly modules that meet existing regulations"]] },
    { title: "Web3 & DApp", summary: "Implementing decentralized services such as DAO, DeFi and governance", details: [["Scope", "Building decentralized autonomous organizations · Developing DeFi protocols · Designing governance systems"]] },
    { title: "NFT & Tokenization", summary: "NFT marketplaces, smart contracts and token economy design", details: [["Scope", "Building NFT marketplaces · Designing token economies · Managing digital assets"]] },
    { title: "AI Copyright Proof", summary: "Automatically proving creativity with a Proof of Creativity system", description: "AI-based monitoring and automatic recording of creative activity prove the copyright of digital works on the blockchain.", details: [["Scope", "Automatic analysis of creativity in video, music, images and more · Real-time attribution and proof of copyright · Immutable blockchain-based certificates"]] },
  ],
  ja: [
    { title: "ハイブリッドブロックチェーン", summary: "HDAC、REAPCHAINなどのコンセンサスアルゴリズムを開発し、メインネットを運用", details: [["スピードとスケーラビリティ", "高いTPSと拡張性を実現するハイブリッド型コンセンサスアルゴリズム"], ["安定性と信頼性", "厳格なセキュリティプロトコルと検証済みのスマートコントラクト"], ["Web3最適化", "既存の規制に対応した、産業向けのモジュールを提供"]] },
    { title: "Web3 & DApp", summary: "DAO、DeFi、ガバナンスなどの分散型サービスを実装", details: [["対応範囲", "分散型自律組織の構築 · DeFiプロトコル開発 · ガバナンスシステム設計"]] },
    { title: "NFT & トークン化", summary: "NFTマーケットプレイス、スマートコントラクト、トークンエコノミーの設計", details: [["対応範囲", "NFTマーケットプレイス構築 · トークンエコノミー設計 · デジタル資産管理"]] },
    { title: "AI著作権証明", summary: "Proof of Creativityシステムで創作性を自動証明", description: "AIによる創作活動のモニタリングと自動記録で、デジタル作品の著作権をブロックチェーン上で証明します。", details: [["対応範囲", "映像・音源・画像などの創作性の自動分析 · リアルタイムの著作権帰属と証明 · ブロックチェーンに基づく不変の証明書の発行"]] },
  ],
};

const projectTr: Record<"en" | "ja", ProjectTr[]> = {
  en: [
    { type: "Hybrid blockchain mainnet", summary: "Developed a hybrid consensus algorithm combining IoT and blockchain and operated the mainnet", details: ["Hybrid PoW/PoS consensus mechanism", "IoT device-integrated blockchain", "Building a DApp ecosystem", "Mainnet development completed"] },
    { type: "Next-generation blockchain prototype", summary: "Designed a high-performance hybrid consensus algorithm and built a mainnet prototype", details: ["Innovative consensus algorithm design", "High-throughput transaction processing", "Scalable architecture", "Prototype development completed"] },
    { type: "Media ecosystem solution", summary: "Developed a blockchain-based media ecosystem protocol and built a collaboration platform with news publishers", details: ["Collaboration with 50 news publishers", "7.6 million monthly UV", "Transparent media ecosystem", "Protocol development completed"] },
  ],
  ja: [
    { type: "ハイブリッドブロックチェーン メインネット", summary: "IoTとブロックチェーンを組み合わせたハイブリッドコンセンサスアルゴリズムを開発し、メインネットを運用", details: ["ハイブリッドPoW/PoSコンセンサスメカニズム", "IoTデバイス統合ブロックチェーン", "DAppエコシステムの構築", "メインネット開発完了"] },
    { type: "次世代ブロックチェーン プロトタイプ", summary: "高性能ハイブリッドコンセンサスアルゴリズムを設計し、メインネットのプロトタイプを開発", details: ["革新的なコンセンサスアルゴリズム設計", "高性能なトランザクション処理", "拡張可能なアーキテクチャ", "プロトタイプ開発完了"] },
    { type: "メディアエコシステム ソリューション", summary: "ブロックチェーンに基づくメディアエコシステムのプロトコルを開発し、報道機関との協業プラットフォームを構築", details: ["50の報道機関と協業", "月間760万UV", "透明性の高いメディアエコシステム", "プロトコル開発完了"] },
  ],
};

const caseTr: Record<"en" | "ja", CaseTr[]> = {
  en: [
    { title: "Global Safe Metaverse", copy: "A metaverse service with an NFT market and smart contracts", alt: "Illustration of a metaverse built on an NFT market and smart contracts" },
    { title: "NFT Camera App", copy: "A photo app with a built-in wallet that mints photos as NFTs", alt: "Illustration of an NFT camera app with wallet integration" },
    { title: "P2P Principal & Interest Claim NFT", copy: "An innovative service that tokenizes the right to receive P2P loan principal and interest as NFTs", alt: "Illustration of tokenizing P2P principal-and-interest claims as NFTs" },
    { title: "Blockchain Donation System", copy: "A transparent crypto-donation system that issues NFT donation receipts", alt: "Illustration of blockchain donations and NFT donation receipts" },
    { title: "K-Culture Social Token", copy: "Building a creator support ecosystem for film, music and drama", alt: "Illustration of a K-culture creator social-token ecosystem" },
    { title: "Copyright Royalty NFT", copy: "Issuing NFTs for software copyright royalties and business-rights memberships", alt: "Illustration of copyright royalty and membership NFTs" },
    { title: "Copyright-Based DAO Platform", copy: "A system where co-owners of IP copyrights take part in decisions together, make proposals, keep records and share the rights economy", alt: "Illustration of a copyright-based DAO governance platform" },
  ],
  ja: [
    { title: "グローバル安全メタバース", copy: "NFTマーケットとスマートコントラクトを搭載したメタバースサービス", alt: "NFTマーケットとスマートコントラクトに基づくメタバースのイラスト" },
    { title: "NFTカメラアプリ", copy: "ウォレット機能を搭載した、NFT発行型の写真アプリ", alt: "ウォレット連携のNFTカメラアプリのイラスト" },
    { title: "P2P元利金受取権NFT", copy: "P2Pレンディングの元利金受取権をNFTとしてトークン化した革新的なサービス", alt: "P2P元利金受取権のNFTトークン化を表すイラスト" },
    { title: "ブロックチェーン寄付システム", copy: "透明性の高い暗号資産寄付と、NFT寄付領収書の発行システム", alt: "ブロックチェーン寄付とNFT寄付領収書のイラスト" },
    { title: "K-カルチャー ソーシャルトークン", copy: "映画・音楽・ドラマのクリエイター支援エコシステムを構築", alt: "K-カルチャーのクリエイター向けソーシャルトークンのイラスト" },
    { title: "著作権ロイヤリティNFT", copy: "ソフトウェア著作権のロイヤリティや営業権メンバーシップのNFTを発行", alt: "著作権ロイヤリティとメンバーシップNFTのイラスト" },
    { title: "著作権ベースDAOプラットフォーム開発", copy: "IP著作権を保有する共同著作権者が意思決定に共に参加し、提案・記録を行い、権利経済を分かち合うシステム", alt: "著作権ベースのDAOガバナンスプラットフォームのイラスト" },
  ],
};

const productTr: Record<"en" | "ja", Record<string, ProductTr>> = {
  en: {
    jervisbox: {
      category: "AI Creativity Proof Service",
      tagline: "We prove the creative process, not just the finished file.",
      description: "Prompts, references, AI outputs and human edits are hashed in order, signed with a wallet and recorded on a blockchain. Original files stay local; only the evidence that verifies the act of creation goes on-chain.",
      features: [["Process-level recording", "Records creative events in chronological order, from the first prompt to the final edit."], ["Files stay local, proof goes on-chain", "Commits only content hashes and wallet signatures, without uploading original files."], ["Merkle-based final seal", "Bundles multiple creative events into one Merkle root and records it on the chain of your choice."], ["Public certificate", "Verify the project, timestamps and on-chain transaction through a public URL and QR code."]],
      flow: [["Record", "Record the creative project and events"], ["Sign", "Sign each hash with a connected wallet"], ["Seal", "Seal the Merkle root on the blockchain"]],
      audiences: ["AI video & image creators", "Ad & content production studios", "Contests & judging bodies", "Copyright management organizations"],
    },
    artpass: {
      category: "Blockchain-Based Artwork Registry",
      tagline: "The registry of physical artworks, on-chain.",
      description: "An artwork registry service that handles artwork registration, certificate-of-authenticity issuance and ownership-transfer history. One registry NFT is issued per artwork, and its history continues through verified ownership transfers.",
      features: [["Artwork registration & review", "Artists and galleries register artwork details, images and a handwritten signature, and an administrator reviews the documents."], ["Registry NFT issuance", "Each approved artwork receives one ERC-721 registry NFT and a certificate hash."], ["Ownership transfer", "Ownership history is updated only after a verification process that includes handover confirmation from both parties."], ["Public verification", "Anyone can check artwork registration, the certificate of authenticity and transfer history through the registration number and QR code."]],
      flow: [["Register", "Register artwork details and supporting documents"], ["Approve", "Issue the registry NFT after administrator review"], ["Verify", "Verify registration and transfer history via QR"]],
      audiences: ["Artists & galleries", "Art collectors", "Auction & distribution companies", "Art storage & management institutions"],
    },
    melomancedao: {
      category: "Blockchain-Based Feature Film Project",
      tagline: "A film made together through participation, sharing and openness.",
      description: "The first project in Korea to introduce blockchain technology to commercial film production. Production costs are raised by issuing NFTs, and the DAO community takes part in planning-stage decisions — from actor casting and location selection to merchandise and story-structure changes — with rewards and incentives based on how much audience members and fans contribute.",
      demoLabel: "Visit website",
      features: [["NFT-funded production", "Production costs are raised transparently through NFT issuance."], ["DAO decision-making", "The community decides together on actor casting, location selection and even story-structure changes."], ["NFT merchandise", "Plans and issues limited-edition NFT merchandise as the project progresses."], ["Contribution-based rewards", "Provides rewards and incentives according to audience and fan contributions."]],
      flow: [["Fund", "Raise production costs by issuing NFTs"], ["Decide", "The DAO community takes part in planning-stage decisions"], ["Reward", "Rewards and incentives based on participation"]],
      audiences: ["Audiences & fans", "NFT & Web3 investors", "Entertainment production companies", "Creators"],
    },
    coresetdao: {
      category: "Rights Enforcement Infrastructure for the AI Era",
      tagline: "Record together, build rights together.",
      description: "Rights-enforcement infrastructure for the AI era that connects co-authored copyrights, license execution and enforceability against third parties. Co-owners of copyrights participate, propose and keep records together to build a new rights economy; DAO participation activates rights, and license use and changes in rights status are recorded.",
      demoLabel: "Go to service",
      features: [["Co-copyright management", "Co-owners of a copyright participate, propose and record their rights relationships together."], ["DAO-based rights activation", "Activates copyrights through DAO participation and reflects them in decision-making."], ["License execution records", "Records license use and changes in rights status on-chain."], ["Enforceability against third parties", "Supports enforceability against third parties with recorded rights relationships."]],
      flow: [["Record", "Co-owners participate, propose and record"], ["Activate", "Activate rights through DAO participation"], ["Enforce", "Execute licenses and secure enforceability against third parties"]],
      audiences: ["Copyright co-owners", "AI creation tools & platforms", "License management organizations", "Copyright law professionals"],
    },
    jervix: {
      category: "RWA STO Exchange",
      tagline: "Issuing and trading real-world assets in one market.",
      description: "An RWA·STO trading platform that structures real-world assets such as real estate, artworks and intellectual property as digital securities, and connects issuance, subscription, trading and settlement.",
      features: [["Asset structuring", "Designs the rights and revenue structure of real-world assets as digital-securities issuance terms."], ["Issuance & subscription", "Manages product information, investment terms and the subscription process transparently."], ["Regulatory readiness", "Reflects investor verification, eligibility, trading restrictions and audit history in the system."], ["Trading & settlement", "Connects the on-chain asset ledger with order, execution and settlement flows."]],
      flow: [["Structure", "Design the asset and rights structure"], ["Issue", "Issue and subscribe to digital securities"], ["Trade", "Trade and settle in line with regulations"]],
      audiences: ["Asset-holding companies", "Securities & financial institutions", "Alternative investment managers", "Professional investors"],
    },
    dokreels: {
      category: "AI Video Short-Form Service",
      tagline: "A short-form community for K-content creators.",
      description: "A short-form community for discovering and sharing AI video and K-content in short, immersive formats. Recommended and following feeds, creator discovery, challenges and personalization connect content with fans.",
      features: [["Recommended & following feeds", "Browse interest-based recommended videos and content from creators you follow."], ["Creator channels", "AI video creators build profiles and content and connect with fans."], ["Challenges", "Topic-based challenges expand new content creation and participation."], ["Personalized collections", "Likes, saves and viewing reactions feed into a tailored feed."]],
      flow: [["Create", "Upload AI and K-content short-form videos"], ["Discover", "Discover through recommended feeds and challenges"], ["Connect", "Connect creators with fan communities"]],
      audiences: ["AI video creators", "K-content studios", "Brands & advertisers", "Short-form content fans"],
    },
    keedarifunding: {
      category: "Crowdfunding Platform",
      tagline: "Where ideas become reality.",
      description: "From film and music to publishing and design — discover and back creators' projects.",
      features: [["Discover projects", "Explore creative projects across categories such as film, music, publishing and design."], ["Back & rewards", "Back a project with any amount you choose and receive matching rewards."], ["Funding status", "See goal amounts, achievement rates and time remaining transparently."], ["Creator pages", "Gives creators a space to introduce their projects and talk with backers."]],
      flow: [["Discover", "Find creative projects you care about"], ["Fund", "Back a project with the amount you choose"], ["Receive", "Receive your reward when the project is completed"]],
      audiences: ["Creators", "Film & music fans", "Publishing & design enthusiasts", "Early-adopter backers"],
    },
  },
  ja: {
    jervisbox: {
      category: "AI創作性証明サービス",
      tagline: "完成ファイルではなく、創作のプロセスを証明します。",
      description: "プロンプト、リファレンス、AI生成結果、人による編集の過程を順にハッシュ化し、ウォレットで署名してブロックチェーンに記録します。元ファイルはローカルに残し、創作の事実を検証できる証拠だけをオンチェーンに残します。",
      features: [["プロセス単位の記録", "最初のプロンプトから最終編集まで、創作イベントを時系列で記録します。"], ["ファイルはローカル、証明はオンチェーン", "元ファイルはアップロードせず、コンテンツのハッシュとウォレット署名のみをコミットします。"], ["Merkleによる最終封印", "複数の創作イベントを1つのMerkle rootにまとめ、選択したチェーンに記録します。"], ["公開証明書", "公開URLとQRコードで、プロジェクト、タイムスタンプ、オンチェーントランザクションを検証できます。"]],
      flow: [["Record", "創作プロジェクトとイベントを記録"], ["Sign", "接続したウォレットで各ハッシュに署名"], ["Seal", "Merkle rootをブロックチェーンに封印"]],
      audiences: ["AI映像・画像クリエイター", "広告・コンテンツ制作会社", "コンテスト・審査機関", "著作権管理組織"],
    },
    artpass: {
      category: "ブロックチェーンベースの美術品登記サービス",
      tagline: "実物美術品の登記簿を、オンチェーンに。",
      description: "美術品の登録、真正性確認書の発行、所有権移転履歴を管理する作品登記サービスです。作品1点につき登記NFTを1つ発行し、検証済みの所有権移転手続きを通じて履歴をつないでいきます。",
      features: [["作品登録と審査", "作家・ギャラリーが作品情報、画像、直筆サインを登録すると、管理者が書類を審査します。"], ["登記NFTの発行", "承認された作品には、作品ごとに1つのERC-721登記NFTと証明書ハッシュが付与されます。"], ["所有権の移転", "双方の引渡し確認を含む検証手続きを経た場合にのみ、所有権履歴を更新します。"], ["公開検証", "誰でも登録番号とQRコードから、作品の登録、真正性確認書、移転履歴を確認できます。"]],
      flow: [["Register", "作品情報と証憑を登録"], ["Approve", "管理者の審査後、登記NFTを発行"], ["Verify", "QRで登録・移転履歴を検証"]],
      audiences: ["作家・ギャラリー", "美術品コレクター", "オークション・流通会社", "美術品の保管・管理機関"],
    },
    melomancedao: {
      category: "ブロックチェーンベースの商業映画制作プロジェクト",
      tagline: "参加・共有・開放で、みんなでつくる映画。",
      description: "国内で初めてブロックチェーン技術を商業映画の制作に導入したプロジェクトです。NFTの発行で制作費を調達し、DAOコミュニティが俳優のキャスティング、ロケ地の選定、グッズ制作、ストーリー構成の変更まで、企画段階の意思決定に参加します。観客・ファンの参加への貢献度に応じて、報酬とインセンティブを提供します。",
      demoLabel: "ホームページへ",
      features: [["NFTによる制作費調達", "NFTの発行を通じて、映画の制作費を透明に調達します。"], ["DAOによる意思決定", "俳優のキャスティング、ロケ地の選定、ストーリー構成の変更まで、コミュニティが共に決定します。"], ["NFTグッズの制作", "プロジェクトの進行に合わせて、限定版のNFTグッズを企画・発行します。"], ["貢献に基づく報酬", "観客・ファンの参加への貢献度に応じて、報酬とインセンティブを提供します。"]],
      flow: [["Fund", "NFTの発行で制作費を調達"], ["Decide", "DAOコミュニティが企画段階の意思決定に参加"], ["Reward", "参加への貢献度に応じた報酬・インセンティブを提供"]],
      audiences: ["観客・ファン", "NFT・Web3投資家", "エンターテインメント制作会社", "クリエイター"],
    },
    coresetdao: {
      category: "AI時代の権利実行インフラ",
      tagline: "共に記録し、共に権利をつくります。",
      description: "共同著作権、ライセンスの実行、第三者対抗力をつなぐ、AI時代の権利実行インフラです。共同著作権者が共に参加・提案・記録しながら新しい権利経済をつくり、DAOへの参加で権利を活性化し、ライセンスの利用と権利状態の変化を記録します。",
      demoLabel: "サービスへ",
      features: [["共同著作権の管理", "共同著作権者が共に参加・提案し、権利関係を記録します。"], ["DAOによる権利の活性化", "DAOへの参加を通じて著作権を活性化し、意思決定に反映します。"], ["ライセンス実行の記録", "ライセンスの利用と権利状態の変化をオンチェーンに記録します。"], ["第三者対抗力の確保", "記録された権利関係により、第三者に対する対抗力を裏付けます。"]],
      flow: [["Record", "共同著作権者が参加・提案・記録"], ["Activate", "DAOへの参加で権利を活性化"], ["Enforce", "ライセンスの実行と第三者対抗力の確保"]],
      audiences: ["共同著作権者", "AI創作ツール・プラットフォーム", "ライセンス管理機関", "著作権の法律専門家"],
    },
    jervix: {
      category: "RWA STO Exchange",
      tagline: "実物資産の発行と取引を、ひとつの市場に。",
      description: "不動産、美術品、知的財産権などの実物資産をデジタル証券として構造化し、発行・申込・取引・精算をつなぐRWA・STO取引プラットフォームです。",
      features: [["資産の構造化", "実物資産の権利と収益構造を、デジタル証券の発行条件として設計します。"], ["発行と申込", "商品情報、投資条件、申込プロセスを透明に管理します。"], ["規制への対応", "投資家確認、適格性、取引制限、監査履歴をシステムに反映します。"], ["取引と精算", "オンチェーンの資産台帳と、注文・約定・精算のフローをつなぎます。"]],
      flow: [["Structure", "資産と権利構造を設計"], ["Issue", "デジタル証券の発行・申込"], ["Trade", "規制に沿った取引・精算"]],
      audiences: ["資産保有企業", "証券・金融機関", "オルタナティブ投資運用会社", "プロ投資家"],
    },
    dokreels: {
      category: "AI映像コンテンツ ショートフォームサービス",
      tagline: "K-コンテンツクリエイターのためのショート動画コミュニティ。",
      description: "AI映像やK-コンテンツを、短く没入感のある形で発見・共有するショート動画コミュニティです。おすすめ・フォローフィード、クリエイター検索、チャレンジ、パーソナライズ機能で、コンテンツとファンをつなぎます。",
      features: [["おすすめ・フォローフィード", "興味に基づくおすすめ動画と、フォローしたクリエイターのコンテンツを探せます。"], ["クリエイターチャンネル", "AI映像クリエイターがプロフィールとコンテンツを構築し、ファンとつながります。"], ["チャレンジ", "テーマ別のチャレンジで、新しいコンテンツ制作と参加を広げます。"], ["パーソナライズコレクション", "いいね、保存、視聴の反応を、あなた向けのフィードに反映します。"]],
      flow: [["Create", "AI・K-コンテンツのショート動画をアップロード"], ["Discover", "おすすめフィードとチャレンジで発見"], ["Connect", "クリエイターとファンコミュニティをつなぐ"]],
      audiences: ["AI映像クリエイター", "K-コンテンツスタジオ", "ブランド・広告主", "ショート動画ファン"],
    },
    keedarifunding: {
      category: "クラウドファンディングプラットフォーム",
      tagline: "アイデアが現実になる場所",
      description: "映画、音楽、出版、デザインまで — クリエイターのプロジェクトを見つけて、応援しましょう。",
      features: [["プロジェクトを探す", "映画、音楽、出版、デザインなど、さまざまなカテゴリの創作プロジェクトを探せます。"], ["支援とリワード", "好きな金額でプロジェクトを支援し、それに応じたリワードを受け取れます。"], ["資金調達状況の公開", "目標金額、達成率、残り期間を透明に確認できます。"], ["クリエイターページ", "クリエイターがプロジェクトを紹介し、支援者と交流できる場を提供します。"]],
      flow: [["Discover", "気になる創作プロジェクトを見つける"], ["Fund", "好きな金額で支援に参加"], ["Receive", "プロジェクト完了後にリワードを受け取る"]],
      audiences: ["クリエイター", "映画・音楽ファン", "出版・デザイン愛好家", "アーリーアダプターの支援者"],
    },
  },
};

export function getTechnologies(locale: Locale) {
  if (locale === "ko") return baseTechnologies;
  return baseTechnologies.map((tech, i) => ({ ...tech, ...techTr[locale][i] }));
}

export function getProjects(locale: Locale) {
  if (locale === "ko") return baseProjects;
  return baseProjects.map((project, i) => ({ ...project, ...projectTr[locale][i] }));
}

export function getProjectCases(locale: Locale): ProjectCase[] {
  if (locale === "ko") return baseCases;
  return baseCases.map((item, i) => ({ ...item, ...caseTr[locale][i] }));
}

export function getLocalizedProduct(slug: string, locale: Locale): Product {
  const base = baseProducts.find((item) => item.slug === slug);
  if (!base) throw new Error(`Unknown product slug: ${slug}`);
  if (locale === "ko") return base;
  const tr = productTr[locale][slug];
  return { ...base, ...tr, demoLabel: tr.demoLabel ?? base.demoLabel };
}

export function getLocalizedProducts(locale: Locale): Product[] {
  return baseProducts.map((item) => getLocalizedProduct(item.slug, locale));
}

/* ───────── 페이지 카피 ───────── */

export type TechPage = {
  metaTitle: string; metaDesc: string; heroTitle: [string, string]; heroDesc: string; aria: string;
  cap1: { title: string; sub: string; modulesAria: string; benefits: [string, string, string]; bottom: string };
  cap2: { title: string; teamStrong: string; refs: [string, string, string, string]; refStrong: string; regTitle: string; regDesc: string; webTitle: string; chips: [string, string, string]; token: string; webDesc: string; bottom: string };
  cap3: { title: string; community: string; values: [string, string]; communityDesc: string; daoList: [string, string, string]; daoBottom: string };
  cap4: { kicker: string; title: string; desc: string; proof: { meta: string; h3: [string, string]; p: string; btn1: string; btn2: string; time: string }; cert: { seal: string; label: string; project: string; projectVal: string; issued: string; issuedVal: string; root: string; stats: [string, string, string, string] } };
};

export const techPage: Record<Locale, TechPage> = {
  ko: {
    metaTitle: "WEB3 기술 — 블록체인·Web3·AI 저작권 증명",
    metaDesc: "저비스랩스 WEB3 사업 영역의 핵심 기술인 하이브리드 블록체인, Web3·DApp, NFT·토큰화와 AI 창작성 증명을 소개합니다.",
    heroTitle: ["비즈니스 혁신을 위한", "핵심 기술"],
    heroDesc: "블록체인 인프라부터 Web3, NFT, AI 저작권 증명까지 산업에 필요한 기술을 설계하고 구현합니다.",
    aria: "Jervis Labs 핵심 역량",
    cap1: { title: "고객 요구사항별 블록체인 기술 조합", sub: "블록체인 특장점을 조합하여 고객 니즈에 맞는 서비스 제공", modulesAria: "블록체인 기술 모듈", benefits: ["속도 ↑", "확장성 ↑", "안정성과 신뢰 ↑"], bottom: "블록체인 비즈니스 로직 설계를 통해 확장성 높은 서비스를 빠르고 안정적으로 제공" },
    cap2: { title: "산업 친화적 모듈 제공으로 신속한 사업화 가능", teamStrong: "다양한 블록체인 개발 프로젝트 참여 경험", refs: ["PUBLISH PROTOCOL", "기부후원 영수증 NFT 발행", "DAO 프로토콜 기획 및 개발", "원리금 수취권 NFT 발행"], refStrong: "다양한 케이스를 통해 기술운영 노하우 축적", regTitle: "기존 규제 충족", regDesc: "기존 법과 제도 환경에 적합한 서비스 개발 지원", webTitle: "Web 3.0 최적화 솔루션", chips: ["투표", "거버넌스", "트레저리"], token: "토큰화", webDesc: "Web 3.0 기술 기반의 탈중앙화 된 최적화 솔루션 제공", bottom: "기존 규제를 충족하는 서비스부터 가상자산 및 Web 3.0 관련 서비스까지 다양한 조합 가능" },
    cap3: { title: "DAO 프로토콜 기획 / 개발 / 운영 역량 보유", community: "고객 커뮤니티의 문화 형성과 운영 방향 설정이 매우 중요", values: ["자발적인 참여", "기여자에 대한 공정한 보상"], communityDesc: "커뮤니티에 자유롭게 의견을 개진하고 참여할 수 있는 환경 조성", daoList: ["커뮤니티 참여자는 대가를 지불하고 DAO 거버넌스 토큰을 소유", "커뮤니티 참여자는 토큰을 활용하여 DAO가 어떤 프로젝트를 실행할지 투표", "커뮤니티가 선정한 프로젝트 및 의사결정 실행"], daoBottom: "과도한 중앙화를 견제하기 위한 지배구조 내부장치 DAO" },
    cap4: { kicker: "CAPABILITY 04 · 특허 출원 중", title: "AI 생성 콘텐츠의 저작권 증명을 위한 블록체인 기반 창작성 증명 및 시스템", desc: "저작권 보호 기술, 인공지능(AI)을 활용하여 생성된 영상, 음원, 텍스트, 이미지 등과 같은 디지털 콘텐츠에 대하여 인간 창작자의 창작적 기여를 객관적으로 증명하고, 이를 통해 저작권의 성립 및 귀속을 명확히 하기 위한 블록체인 기반 창작성 증명(Proof of Creativity) 방법", proof: { meta: "크리에이터의 일상 · 2026", h3: ["증거는 파일이 아니라", "과정입니다."], p: "프롬프트, 레퍼런스, AI 생성 결과와 사람의 편집 과정을 순서대로 기록합니다.", btn1: "기록 시작하기", btn2: "해시 검증하기", time: "타임스탬프 · 2026-08-05 01:45 UTC" }, cert: { seal: "원본 인증", label: "창작성 원본 증명서", project: "프로젝트", projectVal: "가족 사진으로 영상 생성", issued: "발행 일시", issuedVal: "2026년 7월 29일", root: "최종 MERKLE ROOT", stats: ["이벤트", "AI 작업", "사람 편집", "기간"] } },
  },
  en: {
    metaTitle: "WEB3 Technology — Blockchain, Web3 & AI Copyright Proof",
    metaDesc: "Core technologies of Jervis Labs' WEB3 business: hybrid blockchain, Web3 & DApps, NFTs & tokenization, and AI creativity proof.",
    heroTitle: ["Core technologies", "for business transformation"],
    heroDesc: "From blockchain infrastructure to Web3, NFTs and AI copyright proof, we design and build the technology your industry needs.",
    aria: "Jervis Labs core capabilities",
    cap1: { title: "Blockchain technology combinations tailored to customer needs", sub: "Combine the strengths of blockchain to deliver services that fit each customer's needs", modulesAria: "Blockchain technology modules", benefits: ["Speed ↑", "Scalability ↑", "Stability & trust ↑"], bottom: "Deliver highly scalable services quickly and reliably through blockchain business-logic design" },
    cap2: { title: "Industry-friendly modules for fast commercialization", teamStrong: "Experience in a wide range of blockchain development projects", refs: ["PUBLISH PROTOCOL", "Donation receipt NFT issuance", "DAO protocol planning & development", "Principal-and-interest claim NFT issuance"], refStrong: "Operational know-how built up across diverse cases", regTitle: "Meeting existing regulations", regDesc: "Supporting service development that fits existing laws and institutional environments", webTitle: "Web 3.0-optimized solutions", chips: ["Voting", "Governance", "Treasury"], token: "Tokenization", webDesc: "Optimized decentralized solutions based on Web 3.0 technology", bottom: "From services that meet existing regulations to crypto-asset and Web 3.0 services, in a variety of combinations" },
    cap3: { title: "Planning, development and operation of DAO protocols", community: "Shaping community culture and setting the direction of operations is critically important", values: ["Voluntary participation", "Fair rewards for contributors"], communityDesc: "Creating an environment where community members can freely share opinions and take part", daoList: ["Community participants pay to hold DAO governance tokens", "Participants use their tokens to vote on which projects the DAO will carry out", "Projects and decisions selected by the community are executed"], daoBottom: "DAO: an internal governance mechanism that guards against excessive centralization" },
    cap4: { kicker: "CAPABILITY 04 · PATENT PENDING", title: "Blockchain-based creativity proof and system for proving copyright of AI-generated content", desc: "A blockchain-based Proof of Creativity method that objectively proves the creative contribution of a human author to digital content — video, music, text, images and more — generated with copyright protection technology and artificial intelligence (AI), thereby clarifying how copyright is established and who it belongs to.", proof: { meta: "A creator's day · 2026", h3: ["Evidence is not the file,", "it's the process."], p: "Records prompts, references, AI outputs and human edits in order.", btn1: "Start recording", btn2: "Verify hash", time: "Timestamp · 2026-08-05 01:45 UTC" }, cert: { seal: "Verified original", label: "Certificate of Creative Originality", project: "Project", projectVal: "Generating a video from family photos", issued: "Issued", issuedVal: "July 29, 2026", root: "FINAL MERKLE ROOT", stats: ["Events", "AI tasks", "Human edits", "Duration"] } },
  },
  ja: {
    metaTitle: "WEB3テクノロジー — ブロックチェーン・Web3・AI著作権証明",
    metaDesc: "Jervis LabsのWEB3事業の中核技術であるハイブリッドブロックチェーン、Web3・DApp、NFT・トークン化、AI創作性証明をご紹介します。",
    heroTitle: ["ビジネス革新のための", "中核技術"],
    heroDesc: "ブロックチェーン基盤からWeb3、NFT、AI著作権証明まで、産業に必要な技術を設計・実装します。",
    aria: "Jervis Labsの中核能力",
    cap1: { title: "お客様の要件に合わせたブロックチェーン技術の組み合わせ", sub: "ブロックチェーンの特長を組み合わせ、お客様のニーズに合ったサービスを提供", modulesAria: "ブロックチェーン技術モジュール", benefits: ["速度 ↑", "拡張性 ↑", "安定性と信頼 ↑"], bottom: "ブロックチェーンのビジネスロジック設計により、拡張性の高いサービスを迅速かつ安定的に提供" },
    cap2: { title: "産業向けモジュールの提供で、迅速な事業化を実現", teamStrong: "多様なブロックチェーン開発プロジェクトへの参画経験", refs: ["PUBLISH PROTOCOL", "寄付領収書NFTの発行", "DAOプロトコルの企画・開発", "元利金受取権NFTの発行"], refStrong: "多様なケースを通じて、技術運用のノウハウを蓄積", regTitle: "既存の規制への対応", regDesc: "既存の法律・制度環境に適合したサービス開発を支援", webTitle: "Web 3.0最適化ソリューション", chips: ["投票", "ガバナンス", "トレジャリー"], token: "トークン化", webDesc: "Web 3.0技術に基づく、分散型の最適化ソリューションを提供", bottom: "既存の規制に対応したサービスから、暗号資産・Web 3.0関連サービスまで、多様な組み合わせが可能" },
    cap3: { title: "DAOプロトコルの企画・開発・運用能力を保有", community: "お客様のコミュニティの文化形成と運営方針の設定が非常に重要", values: ["自発的な参加", "貢献者への公正な報酬"], communityDesc: "コミュニティで自由に意見を述べ、参加できる環境を整備", daoList: ["コミュニティ参加者は対価を支払い、DAOガバナンストークンを保有", "参加者はトークンを使い、DAOがどのプロジェクトを実行するか投票", "コミュニティが選定したプロジェクトと意思決定を実行"], daoBottom: "過度な中央集権を牽制するための統治の内部装置、DAO" },
    cap4: { kicker: "CAPABILITY 04 · 特許出願中", title: "AI生成コンテンツの著作権証明のための、ブロックチェーンベースの創作性証明とシステム", desc: "著作権保護技術と人工知能（AI）を活用して生成された映像、音源、テキスト、画像などのデジタルコンテンツについて、人間の創作者による創作的寄与を客観的に証明し、それにより著作権の成立と帰属を明確にするための、ブロックチェーンベースの創作性証明（Proof of Creativity）方法", proof: { meta: "クリエイターの日常 · 2026", h3: ["証拠はファイルではなく、", "プロセスです。"], p: "プロンプト、リファレンス、AI生成結果、人による編集の過程を順に記録します。", btn1: "記録を開始", btn2: "ハッシュを検証", time: "タイムスタンプ · 2026-08-05 01:45 UTC" }, cert: { seal: "原本認証", label: "創作性原本証明書", project: "プロジェクト", projectVal: "家族写真から映像を生成", issued: "発行日時", issuedVal: "2026年7月29日", root: "最終 MERKLE ROOT", stats: ["イベント", "AI作業", "人による編集", "期間"] } },
  },
};

export const projectPage: Record<Locale, { metaTitle: string; metaDesc: string; heroTitle: [string, string]; heroDesc: string; useCases: string }> = {
  ko: { metaTitle: "WEB3 프로젝트", metaDesc: "저비스랩스 WEB3 사업 영역에서 수행한 메인넷, 미디어 프로토콜, NFT·토큰화 서비스 등 블록체인 프로젝트와 사례를 소개합니다.", heroTitle: ["검증된 기술,", "실제 비즈니스 성과"], heroDesc: "메인넷, 미디어 프로토콜, NFT와 토큰화 서비스까지 다양한 산업의 프로젝트를 수행해왔습니다.", useCases: "산업을 확장한 프로젝트 사례" },
  en: { metaTitle: "WEB3 Projects", metaDesc: "Blockchain projects and case studies from Jervis Labs' WEB3 business, including mainnets, media protocols, and NFT and tokenization services.", heroTitle: ["Proven technology,", "real business results"], heroDesc: "We have delivered projects across industries, from mainnets and media protocols to NFT and tokenization services.", useCases: "Projects that extended into new industries" },
  ja: { metaTitle: "WEB3プロジェクト", metaDesc: "Jervis LabsのWEB3事業で手がけた、メインネット、メディアプロトコル、NFT・トークン化サービスなどのブロックチェーンプロジェクトと事例をご紹介します。", heroTitle: ["検証された技術、", "実際のビジネス成果"], heroDesc: "メインネット、メディアプロトコル、NFT・トークン化サービスまで、さまざまな産業のプロジェクトを手がけてきました。", useCases: "産業を広げたプロジェクト事例" },
};

export const solutionPage: Record<Locale, { metaTitle: string; metaDesc: string; heroTitle: [string, string]; heroDesc: string; explore: string; alts: Record<string, string> }> = {
  ko: {
    metaTitle: "WEB3 솔루션", metaDesc: "저비스랩스 WEB3 사업 영역의 솔루션 — AI 창작성 증명 JervisBox, RWA·STO 플랫폼 JerviX, AI 권리 인프라 CoReset DAO 등을 만나보세요.",
    heroTitle: ["비즈니스에 바로 적용하는", "Jervis Labs 솔루션"], heroDesc: "창작성 증명, 미술품 등기, RWA·STO와 AI 숏폼까지 검증된 기술을 실제 비즈니스 솔루션으로 제공합니다.", explore: "솔루션 살펴보기",
    alts: { jervisbox: "AI 창작 과정과 블록체인 검증을 표현한 일러스트", artpass: "미술품과 블록체인 등기 증명서를 표현한 일러스트", jervix: "실물자산의 디지털 토큰화와 거래를 표현한 일러스트", dokreels: "AI 숏폼 영상 콘텐츠 제작을 표현한 일러스트", melomancedao: "NFT와 DAO 거버넌스 기반 영화 제작을 표현한 일러스트", coresetdao: "공동저작권과 DAO 기반 권리 실행을 표현한 일러스트", keedarifunding: "크라우드펀딩과 창작 프로젝트 후원을 표현한 일러스트" },
  },
  en: {
    metaTitle: "WEB3 Solutions", metaDesc: "Solutions from Jervis Labs' WEB3 business — JervisBox for AI creativity proof, JerviX for RWA·STO, CoReset DAO for AI-era rights infrastructure and more.",
    heroTitle: ["Jervis Labs solutions", "ready for your business"], heroDesc: "From creativity proof and art registry to RWA·STO and AI short-form video, we deliver proven technology as real business solutions.", explore: "Explore solution",
    alts: { jervisbox: "Illustration of the AI creative process and blockchain verification", artpass: "Illustration of artworks and a blockchain registry certificate", jervix: "Illustration of tokenizing and trading real-world assets", dokreels: "Illustration of AI short-form video production", melomancedao: "Illustration of film production based on NFTs and DAO governance", coresetdao: "Illustration of co-copyright and DAO-based rights enforcement", keedarifunding: "Illustration of crowdfunding and backing creative projects" },
  },
  ja: {
    metaTitle: "WEB3ソリューション", metaDesc: "AI創作性証明のJervisBox、RWA・STOプラットフォームのJerviX、AI時代の権利インフラCoReset DAOなど、Jervis LabsのWEB3事業のソリューションをご紹介します。",
    heroTitle: ["ビジネスにすぐ活かせる", "Jervis Labsのソリューション"], heroDesc: "創作性証明、美術品登記、RWA・STO、AIショート動画まで、検証済みの技術を実際のビジネスソリューションとして提供します。", explore: "ソリューションを見る",
    alts: { jervisbox: "AIの創作プロセスとブロックチェーン検証を表したイラスト", artpass: "美術品とブロックチェーン登記証明書を表したイラスト", jervix: "実物資産のデジタルトークン化と取引を表したイラスト", dokreels: "AIショート動画コンテンツの制作を表したイラスト", melomancedao: "NFTとDAOガバナンスに基づく映画制作を表したイラスト", coresetdao: "共同著作権とDAOに基づく権利実行を表したイラスト", keedarifunding: "クラウドファンディングと創作プロジェクトの支援を表したイラスト" },
  },
};
