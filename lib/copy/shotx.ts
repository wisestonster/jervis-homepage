import type { Locale } from "@/lib/locale";

type Pair = [string, string];

export type ShotXCopy = {
  metaTitle: string; metaDesc: string; serviceType: string; serviceDesc: string;
  ctas: [string, string, string, string];
  hero: { title: [string, string]; lede: string; tags: [string, string, string, string]; alt: string };
  problemHead: string; problems: Pair[];
  whyHead: string; differences: Pair[];
  dash: { label: string; alt: string };
  processHead: string; processCopy: string; pipelineAlt: string; resultLabel: string;
  steps: Array<[string, string, string, string]>;
  featuresHead: string; features: Pair[]; predict: { title: string; body: string };
  audienceHead: string; audiences: Pair[];
  trustHead: string; trust: Pair[];
  faqHead: string; faq: Pair[];
  soon: { head: string; items: Pair[]; note: string; alpha: string };
  cta: { title: [string, string]; copy: string };
};

const ko: ShotXCopy = {
  metaTitle: "Shot-X — AI 숏드라마 제작 스튜디오",
  metaDesc: "숏드라마를 기획·대본·콘티·영상·편집·출력까지 하나의 프로젝트에서 만드는 AI 제작 스튜디오. 아이디어 한 줄에서 숏드라마 한 편까지.",
  serviceType: "AI 숏드라마 제작 스튜디오",
  serviceDesc: "숏드라마를 기획부터 대본, 콘티, 영상, 편집, 출력까지 하나의 프로젝트에서 만드는 AI 제작 스튜디오입니다.",
  ctas: ["얼리 액세스 문의", "제작 과정 보기", "얼리 액세스 문의", "도입 문의"],
  hero: {
    title: ["아이디어 한 줄에서 숏드라마 한 편까지,", "AI와 함께 끝냅니다"],
    lede: "Shot-X는 숏드라마를 기획부터 대본, 콘티, 영상, 편집, 출력까지 하나의 프로젝트 안에서 만드는 AI 제작 스튜디오입니다. 촬영 인력과 스튜디오 없이도 내 이야기를 시즌 단위 숏드라마로 영상화하세요.",
    tags: ["숏드라마", "시즌 단위 제작", "캐릭터 일관성", "화면비·해상도 설정"],
    alt: "세로형 스마트폰 프레임과 스토리보드, 타임라인으로 숏드라마 제작 과정을 표현한 일러스트",
  },
  problemHead: "이런 고민, 있으셨나요?",
  whyHead: "Shot-X는 이렇게 다릅니다",
  dash: { label: "Shot-X 프로젝트 화면", alt: "Shot-X 프로젝트 화면: 왼쪽에 10단계 제작 메뉴, 가운데에 AI 가상 시청자 설문 기반 흥행 예측 리포트, 오른쪽에 코파일럿 패널이 있는 화면" },
  processHead: "10단계 제작 과정", processCopy: "아이디어에서 최종 영상까지, 각 단계의 결과가 다음 단계의 재료가 됩니다.",
  pipelineAlt: "아이디어, 대본, 캐릭터, 스토리보드, 키프레임, 영상, 편집을 거쳐 세로형 영상으로 이어지는 제작 파이프라인 인포그래픽", resultLabel: "결과물",
  featuresHead: "주요 기능",
  predict: { title: "흥행 예측 — AI 가상 시청자 설문", body: "원고를 AI 가상 시청자(페르소나) 최대 50명에게 읽히고 설문을 돌립니다. 타깃 연령·성별·플랫폼을 정하면, 작품의 강점과 이탈 위험 구간, 개선 제안을 리포트로 받아 볼 수 있습니다. 제안을 누르면 고칠 단계로 바로 이동합니다." },
  audienceHead: "이런 분께 맞습니다",
  trustHead: "안심하고 쓰실 수 있도록",
  faqHead: "자주 묻는 질문",
  soon: { head: "곧 제공될 기능", items: [["AI 코파일럿", "지금 보고 있는 화면을 이해하고 “이 컷들을 밤 장면으로 바꿔 줘” 같은 요청을 바로 반영"], ["팀 협업", "멤버 초대, 코멘트, 외부 리뷰 링크, 실시간 공동 편집"], ["템플릿과 빠른 제작 모드", ""], ["4K 업스케일", ""]], note: "공개 일정은 확정되는 대로 안내해 드립니다.", alpha: "현재 개발자 테스트(ALPHA) 단계입니다. 기능과 일정은 변경될 수 있습니다." },
  cta: { title: ["당신의 이야기,", "이제 숏드라마로 만드세요"], copy: "아이디어 한 줄이면 충분합니다. 나머지는 Shot-X와 함께 완성하세요." },
problems: [
  ["한 시즌을 만들기엔 사람도 시간도 부족합니다.", "30~80화짜리 숏드라마 한 시즌에는 기획·촬영·편집 인력이 많이 들고 일정도 깁니다."],
  ["AI 영상 도구는 컷 하나에서 끝납니다.", "장면마다 프롬프트를 새로 쓰다 보면 회차가 늘수록 주인공 얼굴, 장소, 분위기가 조금씩 달라집니다."],
  ["수정 하나가 어디까지 번지는지 알 수 없습니다.", "시놉시스를 고치면 어떤 대본, 어떤 컷을 다시 만들어야 하는지 사람이 일일이 찾아야 합니다."],
  ["얼마가 들지 만들어 봐야 압니다.", "생성 비용이 결과를 받은 뒤에야 보여서 예산을 잡기 어렵습니다."],
],

differences: [
  ["제작 전 과정이 하나로 이어집니다", "아이디어 → 로그라인 → 시놉시스 → 캐릭터 → 대본 → 스토리보드 → 애셋 → 키프레임 → 영상 → 편집까지 10단계를 한 프로젝트에서 진행합니다. 앞 단계에서 만든 결과가 그대로 다음 단계의 재료가 되어, 복사해서 붙여 넣을 필요가 없습니다."],
  ["회차가 늘어도 캐릭터가 흔들리지 않습니다", "스토리 바이블(세계관·톤·규칙), 캐릭터 룩, 로케이션, 스타일 가이드를 한 번 정해 두면 이후의 모든 이미지·영상 생성에 자동으로 반영됩니다."],
  ["고치면, 다시 만들어야 할 곳이 바로 보입니다", "시놉시스나 캐릭터를 수정하면 영향을 받는 대본·컷·키프레임에 \"갱신 필요\" 표시가 붙습니다. 놓치는 곳 없이 필요한 부분만 다시 만들면 됩니다."],
  ["AI가 제안하고, 결정은 내가 합니다", "AI는 매번 여러 안을 제안하고, 고르고 고치는 것은 사용자입니다. 중요한 단계마다 승인 게이트가 있어 확정된 내용 위에서만 다음 단계로 넘어갑니다."],
  ["만들기 전에 비용부터 보여 줍니다", "모든 생성 버튼은 실행 전에 예상 크레딧을 먼저 보여 줍니다. 실패하거나 취소한 작업의 크레딧은 자동으로 돌려드립니다."],
],

steps: [
  ["01", "아이디어", "AI와 대화하며 이야기 씨앗을 찾고 카드로 모읍니다", "아이디어 카드"],
  ["02", "로그라인", "한 문장 콘셉트와 제목 후보를 다듬습니다", "로그라인·제목"],
  ["03", "시놉시스·회차 구성", "세계관을 정리하고 시즌 줄거리와 회차별 구성표를 만듭니다", "스토리 바이블·시놉시스·구성표"],
  ["04", "캐릭터", "인물 프로필, 얼굴, 의상별 룩, 레퍼런스 시트, 목소리를 정합니다", "캐릭터·룩·보이스"],
  ["05", "대본", "씬별 대본을 쓰고 AI로 다시 쓰기, 러닝타임 확인을 합니다", "회차 대본"],
  ["06", "스토리보드", "대본을 컷으로 나누고 러프 콘티를 만듭니다", "샷 목록·콘티"],
  ["07", "애셋", "로케이션·소품·의상·미술·스타일을 정리합니다", "애셋 라이브러리"],
  ["08", "키프레임", "컷마다 시작·끝 장면 이미지를 만들고 고릅니다", "키프레임"],
  ["09", "영상", "컷 영상을 여러 테이크로 생성하고, 대사 음성과 립싱크를 입힙니다", "영상 테이크·음성"],
  ["10", "편집·출력", "타임라인에서 자르고 붙이고 자막·음악을 얹어 프로젝트에 설정한 화면비·해상도의 최종 파일로 내보냅니다", "완성 영상 (설정한 화면비·해상도)"],
],

features: [
  ["시나리오 파일로 바로 시작", "이미 써 둔 원고(PDF·DOCX·TXT)를 올리면 로그라인, 시놉시스, 캐릭터를 자동으로 채워 프로젝트를 만들어 드립니다."],
  ["캐릭터 일관성 관리", "얼굴 후보 중 하나를 고르면 레퍼런스 시트가 만들어지고, 이후 모든 장면 생성에 같은 얼굴이 참조됩니다. 의상·헤어·나이대가 달라지는 장면은 \"룩\"으로 나눠 관리합니다."],
  ["여러 AI 모델을 한 화면에서", "글쓰기는 Claude, 이미지·영상은 연결한 생성 모델 가운데 원하는 것을 골라 씁니다. 작업마다 모델·품질·해상도를 바꿀 수 있고, 프로젝트별 기본 모델도 정해 둘 수 있습니다."],
  ["내 AI 계정으로 연결", "Claude API 키, Higgsfield 계정처럼 이미 쓰고 있는 AI 서비스를 직접 연결합니다. 키는 암호화해 저장하며, 화면에는 끝 네 자리만 표시합니다."],
  ["숏폼에 맞춘 편집기", "프로젝트에 설정한 화면비(기본 9:16) 미리보기와 멀티트랙 타임라인에서 컷 교체, 자르기, 자막 수정, 배경음악 배치를 합니다. 대사가 나오면 배경음악이 자동으로 줄어듭니다."],
  ["플랫폼 규격 그대로 출력", "프로젝트를 만들 때 화면비와 해상도(기본 9:16, 1080×1920)를 직접 정할 수 있고, 그 규격에 맞춰 H.264, 플랫폼 권장 음량(-14 LUFS)으로 렌더링합니다. AI로 만든 영상임을 밝히는 출처 정보(C2PA)를 파일에 함께 담습니다."],
  ["버전 기록과 되돌리기", "수정할 때마다 이전 버전이 자동으로 저장되어, 언제든 예전 내용으로 되돌릴 수 있습니다."],
],

audiences: [
  ["웹소설·웹툰 작가, 1인 크리에이터", "촬영 팀 없이 내 IP를 영상으로 만들고 싶은 분. 원고를 올리면 기획 문서와 캐릭터가 채워지고, 흥행 예측으로 반응부터 확인할 수 있습니다."],
  ["숏드라마 제작사", "한 시즌 30~80화를 빠르게 찍어 내야 하는 팀. 단계별 승인과 변경 추적으로 회차가 많아져도 품질과 일정을 관리할 수 있습니다."],
  ["브랜드·에이전시", "브랜디드 숏드라마나 광고형 시리즈를 기획하는 팀. 스타일 가이드를 정해 두면 모든 장면이 같은 톤으로 만들어집니다."],
],

trust: [
  ["AI 생성 표시", "출력 영상에 AI 생성 출처 정보(C2PA)를 담습니다."],
  ["데이터 분리", "워크스페이스마다 데이터가 분리되어, 다른 팀의 프로젝트는 볼 수 없습니다."],
  ["키 보호", "연결한 AI 서비스 키는 암호화해 저장하고 어디에도 원문을 보여 주지 않습니다."],
],

faq: [
  ["영상 편집이나 촬영 경험이 없어도 쓸 수 있나요?", "네. 단계마다 AI가 여러 안을 먼저 제안하므로 고르고 고치는 것만으로 진행할 수 있습니다."],
  ["회차마다 주인공 얼굴이 달라지지 않나요?", "캐릭터 레퍼런스 시트와 룩을 모든 생성에 자동으로 참조해 일관성을 유지합니다."],
  ["이미 쓴 시나리오가 있는데 처음부터 다시 입력해야 하나요?", "아니요. PDF·DOCX·TXT 파일을 올리면 로그라인, 시놉시스, 캐릭터가 자동으로 채워집니다."],
  ["비용은 어떻게 계산되나요?", "월 구독에 포함된 크레딧을 생성할 때마다 차감합니다. 생성 전에 예상 크레딧을 먼저 보여 드리고, 실패하거나 취소한 작업은 환불됩니다."],
  ["AI 서비스 키가 따로 필요한가요?", "글쓰기와 영상 생성에는 Claude API 키, Higgsfield 계정 등 사용하실 AI 서비스를 직접 연결해 주셔야 합니다. 정식 출시 때의 연결 방식은 확정되는 대로 안내해 드립니다."],
  ["만든 영상을 상업적으로 써도 되나요?", "상업적 이용 조건은 정식 출시 때 확정되는 대로 안내해 드립니다."],
  ["흥행 예측 결과는 믿을 수 있나요?", "AI 가상 시청자를 이용한 시뮬레이션이라 실제 시청 데이터를 대신하지는 않습니다. 점수보다 리스크와 개선 방향을 찾는 데 활용해 주세요."],
],
};

const en: ShotXCopy = {
  metaTitle: "Shot-X — AI Short-Drama Production Studio",
  metaDesc: "An AI production studio that takes short dramas from planning, scripting and storyboarding to video, editing and export in a single project. From a one-line idea to a finished short drama.",
  serviceType: "AI short-drama production studio",
  serviceDesc: "An AI production studio that takes short dramas from planning through scripts, storyboards, video, editing and export in a single project.",
  ctas: ["Early access inquiry", "See the process", "Early access inquiry", "Adoption inquiry"],
  hero: {
    title: ["From a one-line idea to a finished short drama,", "finish it together with AI"],
    lede: "Shot-X is an AI production studio that creates short dramas — from planning to scripts, storyboards, video, editing and export — within a single project. Turn your story into a season-length short drama without a film crew or a studio.",
    tags: ["Short drama", "Season-scale production", "Character consistency", "Aspect ratio & resolution settings"],
    alt: "Illustration of the short-drama production process with vertical phone frames, storyboards and a timeline",
  },
  problemHead: "Sound familiar?",
  problems: [
    ["A season takes more people and time than you have.", "One season of a 30–80-episode short drama needs a lot of planning, filming and editing staff, and a long schedule."],
    ["AI video tools stop at a single cut.", "Rewriting prompts for every scene means the lead's face, locations and mood drift a little more as episodes pile up."],
    ["You can't tell how far one edit ripples.", "When you change a synopsis, someone has to hunt down which scripts and which cuts need to be remade."],
    ["You only learn the cost after making it.", "Generation costs show up only after you get the result, which makes budgeting hard."],
  ],
  whyHead: "How Shot-X is different",
  differences: [
    ["The whole production process is connected", "Idea → logline → synopsis → characters → script → storyboard → assets → keyframes → video → editing: ten steps in one project. What you make in one step becomes the material for the next, so there's no copying and pasting."],
    ["Characters stay consistent as episodes grow", "Set the story bible (world, tone, rules), character looks, locations and style guide once, and they are applied automatically to every image and video generated afterward."],
    ["Edit something and see exactly what to remake", "When you change a synopsis or character, affected scripts, cuts and keyframes get an “update needed” mark. Remake only what's needed, with nothing missed."],
    ["AI proposes, you decide", "The AI offers several options every time; choosing and editing is up to you. Approval gates at key steps mean you only move on based on confirmed content."],
    ["See the cost before you create", "Every generate button shows the estimated credits before it runs. Credits for failed or canceled jobs are returned automatically."],
  ],
  dash: { label: "Shot-X project screen", alt: "Shot-X project screen: a 10-step production menu on the left, a box-office prediction report based on an AI virtual-viewer survey in the middle, and a copilot panel on the right" },
  processHead: "10-step production process", processCopy: "From idea to final video, the result of each step becomes the material for the next.",
  pipelineAlt: "Production pipeline infographic running from idea, script, characters, storyboard and keyframes through video and editing to a vertical video", resultLabel: "Output",
  steps: [
    ["01", "Idea", "Find story seeds in conversation with AI and collect them as cards", "Idea cards"],
    ["02", "Logline", "Refine a one-sentence concept and title candidates", "Logline & title"],
    ["03", "Synopsis & episode structure", "Organize the world and build the season arc and an episode-by-episode outline", "Story bible, synopsis & outline"],
    ["04", "Characters", "Set character profiles, faces, outfit looks, reference sheets and voices", "Characters, looks & voices"],
    ["05", "Script", "Write scene-by-scene scripts, rewrite with AI and check running time", "Episode scripts"],
    ["06", "Storyboard", "Break the script into cuts and make rough storyboards", "Shot list & storyboard"],
    ["07", "Assets", "Organize locations, props, costumes, art and style", "Asset library"],
    ["08", "Keyframes", "Generate and select start and end frame images for each cut", "Keyframes"],
    ["09", "Video", "Generate cut videos in multiple takes and add dialogue audio and lip-sync", "Video takes & audio"],
    ["10", "Edit & export", "Cut, assemble, add subtitles and music on the timeline, and export a final file in the aspect ratio and resolution set for the project", "Finished video (set aspect ratio & resolution)"],
  ],
  featuresHead: "Key features",
  features: [
    ["Start right from a script file", "Upload a manuscript you've already written (PDF, DOCX, TXT) and we fill in the logline, synopsis and characters and create the project for you."],
    ["Character consistency management", "Pick one of the face candidates to generate a reference sheet, and the same face is referenced for every scene generated afterward. Scenes where outfit, hair or age change are managed as “looks”."],
    ["Multiple AI models on one screen", "Use Claude for writing, and choose among connected generation models for images and video. You can change the model, quality and resolution per task, and set a default model per project."],
    ["Connect your own AI accounts", "Connect AI services you already use, such as a Claude API key or a Higgsfield account. Keys are stored encrypted, and only the last four characters are shown on screen."],
    ["An editor built for short-form", "Swap cuts, trim, edit subtitles and place background music on a multitrack timeline with a preview in the aspect ratio set for the project (9:16 by default). Background music ducks automatically when dialogue plays."],
    ["Export to platform specs", "Set the aspect ratio and resolution (default 9:16, 1080×1920) when you create a project, and we render to that spec in H.264 at the platform-recommended loudness (-14 LUFS). Provenance information (C2PA) stating the video was made with AI is embedded in the file."],
    ["Version history and rollback", "A previous version is saved automatically every time you edit, so you can restore earlier content at any time."],
  ],
  predict: { title: "Box-office prediction — AI virtual-viewer survey", body: "Have up to 50 AI virtual viewers (personas) read your manuscript and run a survey. Set the target age, gender and platform, and get a report on the work's strengths, drop-off risk zones and improvement suggestions. Click a suggestion to jump straight to the step to fix." },
  audienceHead: "Who it's for",
  audiences: [
    ["Web novel & webtoon authors, solo creators", "For people who want to turn their IP into video without a film crew. Upload a manuscript to fill in the planning documents and characters, then check reaction first with box-office prediction."],
    ["Short-drama production companies", "Teams that need to turn out 30–80 episodes a season quickly. Step-by-step approval and change tracking let you manage quality and schedule even as episodes multiply."],
    ["Brands & agencies", "Teams planning branded short dramas or ad-style series. Set a style guide and every scene is made in the same tone."],
  ],
  trustHead: "So you can use it with confidence",
  trust: [
    ["AI-generation labeling", "Provenance information (C2PA) stating the video was generated with AI is embedded in output videos."],
    ["Data separation", "Data is separated per workspace, so other teams' projects can't be seen."],
    ["Key protection", "Connected AI service keys are stored encrypted and the original value is never shown anywhere."],
  ],
  faqHead: "Frequently asked questions",
  faq: [
    ["Can I use it without editing or filming experience?", "Yes. The AI offers several options at each step first, so you can progress just by choosing and refining."],
    ["Won't the lead's face change from episode to episode?", "Character reference sheets and looks are referenced automatically in every generation to keep consistency."],
    ["I already have a script. Do I have to enter everything again?", "No. Upload a PDF, DOCX or TXT file and the logline, synopsis and characters are filled in automatically."],
    ["How is cost calculated?", "Credits included in your monthly subscription are deducted each time you generate. We show the estimated credits before you generate, and failed or canceled jobs are refunded."],
    ["Do I need separate AI service keys?", "For writing and video generation you connect the AI services you'll use yourself, such as a Claude API key or a Higgsfield account. We will let you know how connections work at official launch once it's confirmed."],
    ["Can I use the videos commercially?", "We will let you know the terms of commercial use once they are confirmed at official launch."],
    ["Can I trust the box-office prediction?", "It is a simulation using AI virtual viewers and does not replace real viewing data. Use it to find risks and directions for improvement rather than to read a score."],
  ],
  soon: { head: "Coming soon", items: [["AI copilot", "Understands the screen you're looking at and applies requests like “change these cuts to night scenes” right away"], ["Team collaboration", "Invite members, comments, external review links and real-time co-editing"], ["Templates and a quick-production mode", ""], ["4K upscaling", ""]], note: "We will let you know the release schedule once it is confirmed.", alpha: "This product is currently in developer testing (ALPHA). Features and schedules may change." },
  cta: { title: ["Your story,", "now as a short drama"], copy: "A one-line idea is enough. Finish the rest with Shot-X." },
};

const ja: ShotXCopy = {
  metaTitle: "Shot-X — AIショートドラマ制作スタジオ",
  metaDesc: "ショートドラマを、企画・脚本・コンテ・映像・編集・出力まで、ひとつのプロジェクトで制作するAI制作スタジオ。アイデア一行から、ショートドラマ一本まで。",
  serviceType: "AIショートドラマ制作スタジオ",
  serviceDesc: "ショートドラマを、企画から脚本、コンテ、映像、編集、出力まで、ひとつのプロジェクトで制作するAI制作スタジオです。",
  ctas: ["アーリーアクセスのお問い合わせ", "制作の流れを見る", "アーリーアクセスのお問い合わせ", "導入のお問い合わせ"],
  hero: {
    title: ["アイデア一行から、ショートドラマ一本まで、", "AIと一緒に仕上げます"],
    lede: "Shot-Xは、ショートドラマを企画から脚本、コンテ、映像、編集、出力まで、ひとつのプロジェクトの中で制作するAI制作スタジオです。撮影スタッフもスタジオもなしで、あなたの物語をシーズン単位のショートドラマとして映像化しましょう。",
    tags: ["ショートドラマ", "シーズン単位の制作", "キャラクターの一貫性", "画面比率・解像度の設定"],
    alt: "縦型のスマートフォンフレーム、ストーリーボード、タイムラインでショートドラマの制作過程を表したイラスト",
  },
  problemHead: "こんなお悩みはありませんか？",
  problems: [
    ["1シーズンをつくるには、人も時間も足りません。", "30〜80話のショートドラマ1シーズンには、企画・撮影・編集の人手が多くかかり、日程も長くなります。"],
    ["AI映像ツールは、1カットで終わってしまいます。", "シーンごとにプロンプトを書き直していると、エピソードが増えるほど主人公の顔、場所、雰囲気が少しずつ変わってしまいます。"],
    ["修正一つがどこまで影響するか、わかりません。", "シノプシスを直すと、どの脚本、どのカットを作り直す必要があるのか、人が一つひとつ探さなければなりません。"],
    ["いくらかかるかは、作ってみないとわかりません。", "生成コストが結果を受け取った後にしか見えないため、予算を立てにくくなります。"],
  ],
  whyHead: "Shot-Xはここが違います",
  differences: [
    ["制作の全工程がひとつにつながります", "アイデア → ログライン → シノプシス → キャラクター → 脚本 → ストーリーボード → アセット → キーフレーム → 映像 → 編集まで、10のステップをひとつのプロジェクトで進めます。前のステップで作った結果がそのまま次のステップの素材になるため、コピー＆ペーストは不要です。"],
    ["エピソードが増えても、キャラクターはぶれません", "ストーリーバイブル（世界観・トーン・ルール）、キャラクターのルック、ロケーション、スタイルガイドを一度決めておけば、以降のすべての画像・映像の生成に自動で反映されます。"],
    ["直すと、作り直す箇所がすぐにわかります", "シノプシスやキャラクターを修正すると、影響を受ける脚本・カット・キーフレームに「更新が必要」の表示が付きます。見落としなく、必要な部分だけを作り直せます。"],
    ["AIが提案し、決めるのは自分です", "AIは毎回複数の案を提案し、選んで直すのはユーザーです。重要なステップごとに承認ゲートがあり、確定した内容の上でのみ次のステップへ進みます。"],
    ["作る前に、コストを示します", "すべての生成ボタンは、実行前に予想クレジットを先に表示します。失敗またはキャンセルした作業のクレジットは自動で返却します。"],
  ],
  dash: { label: "Shot-Xプロジェクト画面", alt: "Shot-Xのプロジェクト画面：左に10ステップの制作メニュー、中央にAI仮想視聴者アンケートに基づくヒット予測レポート、右にコパイロットパネルがある画面" },
  processHead: "10ステップの制作プロセス", processCopy: "アイデアから最終映像まで、各ステップの結果が次のステップの素材になります。",
  pipelineAlt: "アイデア、脚本、キャラクター、ストーリーボード、キーフレーム、映像、編集を経て縦型映像へとつながる制作パイプラインのインフォグラフィック", resultLabel: "成果物",
  steps: [
    ["01", "アイデア", "AIと対話しながら物語の種を見つけ、カードとして集めます", "アイデアカード"],
    ["02", "ログライン", "一文のコンセプトとタイトル候補を磨き上げます", "ログライン・タイトル"],
    ["03", "シノプシス・エピソード構成", "世界観を整理し、シーズンのあらすじとエピソード別の構成表を作ります", "ストーリーバイブル・シノプシス・構成表"],
    ["04", "キャラクター", "人物プロフィール、顔、衣装別のルック、リファレンスシート、声を決めます", "キャラクター・ルック・ボイス"],
    ["05", "脚本", "シーン別の脚本を書き、AIでの書き直しや尺の確認を行います", "エピソード脚本"],
    ["06", "ストーリーボード", "脚本をカットに分け、ラフなコンテを作ります", "ショットリスト・コンテ"],
    ["07", "アセット", "ロケーション・小道具・衣装・美術・スタイルを整理します", "アセットライブラリ"],
    ["08", "キーフレーム", "カットごとに開始・終了シーンの画像を生成して選びます", "キーフレーム"],
    ["09", "映像", "カット映像を複数のテイクで生成し、台詞音声とリップシンクを加えます", "映像テイク・音声"],
    ["10", "編集・出力", "タイムラインでカットを切り貼りし、字幕・音楽を加えて、プロジェクトに設定した画面比率・解像度の最終ファイルとして書き出します", "完成映像（設定した画面比率・解像度）"],
  ],
  featuresHead: "主な機能",
  features: [
    ["脚本ファイルからすぐにスタート", "すでに書き上げた原稿（PDF・DOCX・TXT）をアップロードすると、ログライン、シノプシス、キャラクターを自動で埋めて、プロジェクトを作成します。"],
    ["キャラクターの一貫性管理", "顔の候補から一つを選ぶとリファレンスシートが作られ、以降のすべてのシーン生成で同じ顔が参照されます。衣装・髪型・年齢が変わるシーンは、「ルック」として分けて管理します。"],
    ["複数のAIモデルをひとつの画面で", "文章はClaude、画像・映像は接続した生成モデルの中から好きなものを選んで使います。作業ごとにモデル・品質・解像度を変えられ、プロジェクトごとの既定モデルも設定できます。"],
    ["自分のAIアカウントで接続", "Claude APIキーやHiggsfieldアカウントなど、すでにお使いのAIサービスを直接接続します。キーは暗号化して保存し、画面には末尾4桁のみを表示します。"],
    ["ショート動画に合わせた編集機能", "プロジェクトに設定した画面比率（既定は9:16）のプレビューとマルチトラックのタイムラインで、カットの差し替え、トリミング、字幕の修正、BGMの配置を行えます。台詞が入るとBGMが自動で小さくなります。"],
    ["プラットフォームの規格どおりに出力", "プロジェクト作成時に画面比率と解像度（既定は9:16、1080×1920）を自分で決められ、その規格に合わせて、H.264、プラットフォーム推奨の音量（-14 LUFS）でレンダリングします。AIで作った映像であることを示す出所情報（C2PA）も、ファイルに併せて埋め込みます。"],
    ["バージョン履歴と元に戻す機能", "修正のたびに以前のバージョンが自動で保存され、いつでも以前の内容に戻せます。"],
  ],
  predict: { title: "ヒット予測 — AI仮想視聴者アンケート", body: "原稿をAI仮想視聴者（ペルソナ）最大50人に読ませ、アンケートを実施します。ターゲットの年齢・性別・プラットフォームを決めると、作品の強み、離脱リスクの区間、改善提案をレポートで確認できます。提案をクリックすると、修正するステップへそのまま移動できます。" },
  audienceHead: "こんな方に向いています",
  audiences: [
    ["ウェブ小説・ウェブトゥーン作家、一人クリエイター", "撮影チームなしで、自分のIPを映像にしたい方。原稿をアップロードすると企画書とキャラクターが埋まり、ヒット予測で反応を先に確認できます。"],
    ["ショートドラマ制作会社", "1シーズン30〜80話を素早く制作する必要があるチーム。ステップごとの承認と変更の追跡で、エピソード数が増えても品質と日程を管理できます。"],
    ["ブランド・エージェンシー", "ブランデッドのショートドラマや広告型シリーズを企画するチーム。スタイルガイドを決めておけば、すべてのシーンが同じトーンで作られます。"],
  ],
  trustHead: "安心してお使いいただくために",
  trust: [
    ["AI生成の表示", "出力映像に、AIで生成したことを示す出所情報（C2PA）を埋め込みます。"],
    ["データの分離", "ワークスペースごとにデータが分離されており、他のチームのプロジェクトは見られません。"],
    ["キーの保護", "接続したAIサービスのキーは暗号化して保存し、どこにも原文を表示しません。"],
  ],
  faqHead: "よくあるご質問",
  faq: [
    ["映像編集や撮影の経験がなくても使えますか？", "はい。ステップごとにAIがまず複数の案を提案するため、選んで直すだけで進められます。"],
    ["エピソードごとに主人公の顔が変わりませんか？", "キャラクターのリファレンスシートとルックをすべての生成で自動的に参照し、一貫性を保ちます。"],
    ["すでに書いたシナリオがあるのですが、最初から入力し直す必要がありますか？", "いいえ。PDF・DOCX・TXTファイルをアップロードすると、ログライン、シノプシス、キャラクターが自動で埋まります。"],
    ["料金はどのように計算されますか？", "月額のサブスクリプションに含まれるクレジットを、生成のたびに差し引きます。生成前に予想クレジットを先にお見せし、失敗またはキャンセルした作業は返金されます。"],
    ["AIサービスのキーは別途必要ですか？", "文章と映像の生成には、Claude APIキーやHiggsfieldアカウントなど、お使いになるAIサービスをご自身で接続していただく必要があります。正式リリース時の接続方法は、確定次第ご案内します。"],
    ["作った映像を商用で使ってもよいですか？", "商用利用の条件は、正式リリース時に確定次第ご案内します。"],
    ["ヒット予測の結果は信頼できますか？", "AI仮想視聴者を用いたシミュレーションのため、実際の視聴データの代わりにはなりません。スコアよりも、リスクと改善の方向性を見つけるためにご活用ください。"],
  ],
  soon: { head: "近日提供予定の機能", items: [["AIコパイロット", "今見ている画面を理解し、「このカットを夜のシーンに変えて」といった依頼をすぐに反映"], ["チームでの共同作業", "メンバーの招待、コメント、外部レビューリンク、リアルタイムの共同編集"], ["テンプレートとクイック制作モード", ""], ["4Kアップスケール", ""]], note: "公開日程は、確定次第お知らせします。", alpha: "現在、開発者テスト（ALPHA）の段階です。機能や日程は変更される場合があります。" },
  cta: { title: ["あなたの物語を、", "ショートドラマにしましょう"], copy: "アイデア一行で十分です。あとは、Shot-Xと一緒に完成させましょう。" },
};

export const shotx: Record<Locale, ShotXCopy> = { ko, en, ja };
