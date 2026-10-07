import type { Locale } from "@/lib/locale";

export type ContactCopy = {
  metaTitle: string; metaDesc: string; heroTitle: [string, string]; heroDesc: string;
  formTitle: [string, string]; formIntro: string; infoTitle: [string, string]; infoDesc: string;
  card: { title: string; person: string; email: string; address: string; addressLines: [string, string]; emailBtn: string };
  form: {
    honeypot: string; required: string;
    subject: string; subjectPh: string; name: string; namePh: string; phone: string; phonePh: string; email: string; emailPh: string;
    type: string; types: Record<string, string>; message: string; messagePh: string;
    consent: string; policyLink: string; cancel: string; submit: string; sending: string; statusSending: string; success: string;
    errors: { tooLarge: string; badFormat: string; invalid: string; mail: string; fallback: string };
    privacy: { title: string; intro: string; rows: Array<[string, string]>; officer: string; contactLabel: string; close: string; confirm: string };
  };
};

export const contact: Record<Locale, ContactCopy> = {
  ko: {
    metaTitle: "문의하기",
    metaDesc: "AI 콘텐츠 예측엔진 Cinemind, AI 숏드라마 스튜디오 Shot-X 파일럿·도입과 AI 자동화 프로젝트를 저비스랩스에 문의하세요.",
    heroTitle: ["새로운 비즈니스의 시작,", "Jervis Labs와 함께 하세요."],
    heroDesc: "Cinemind 협업, Shot-X 도입, AI 예측·자동화 프로젝트까지 편하게 문의해 주세요.",
    formTitle: ["문의", "하기"],
    formIntro: "아래 양식에 맞춰 문의주시면 답변드리겠습니다.",
    infoTitle: ["프로젝트의 가능성을", "함께 검토합니다."],
    infoDesc: "목표와 현재 단계, 필요한 기술을 알려주시면 가장 적합한 협업 방식을 제안해 드립니다.",
    card: { title: "연락처 정보", person: "담당자", email: "이메일", address: "주소", addressLines: ["서울시 구로구 디지털로27가길 17, 803호", "(08375) 대한민국"], emailBtn: "✉ 이메일 문의" },
    form: {
      honeypot: "웹사이트", required: "필수 입력 사항입니다.",
      subject: "문의 제목", subjectPh: "제목을 입력해주세요.", name: "이름", namePh: "이름을 입력해주세요.", phone: "연락처", phonePh: "숫자만 입력해주세요.", email: "메일", emailPh: "메일주소를 입력해주세요.",
      type: "문의 유형", types: { Cinemind: "Cinemind", "Shot-X": "Shot-X", "프로젝트": "프로젝트", "제품 도입": "제품 도입", "기술 컨설팅": "기술 컨설팅", "파트너십": "파트너십", "기타": "기타" },
      message: "문의 내용", messagePh: "상담을 위해 문의 내용을 구체적으로 입력해주세요.",
      consent: "(필수) 개인정보 수집에 동의합니다.", policyLink: "개인정보처리방침", cancel: "취소", submit: "문의하기", sending: "전송 중…", statusSending: "문의를 전송하고 있습니다.",
      success: "문의가 접수되었습니다. 확인 후 빠르게 답변드리겠습니다.",
      errors: { tooLarge: "요청 내용이 너무 큽니다.", badFormat: "잘못된 요청 형식입니다.", invalid: "입력 내용을 확인해 주세요.", mail: "메일 서버 설정을 확인해 주세요.", fallback: "문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요." },
      privacy: {
        title: "개인정보처리방침",
        intro: "저비스랩스는 문의 접수와 답변을 위해 아래와 같이 개인정보를 수집·이용합니다.",
        rows: [
          ["수집 항목", "이름, 연락처, 이메일 주소, 문의 제목, 문의 유형, 문의 내용"],
          ["수집·이용 목적", "문의 내용 확인, 상담 및 답변, 원활한 의사소통"],
          ["보유 및 이용 기간", "문의 처리 목적 달성 후 지체 없이 파기합니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우에는 해당 기간 동안 보관합니다."],
          ["처리 위탁 및 국외 이전", "문의 내용은 이메일로 전달되며, 이 과정에서 이메일 서비스 제공자(Google LLC)의 서버(국외 포함)를 거쳐 처리·보관될 수 있습니다. 위탁 또는 이전 대상이 바뀌는 경우 본 방침을 통해 알려드립니다."],
          ["파기 절차 및 방법", "보유 기간이 끝나거나 처리 목적이 달성되면 지체 없이 파기합니다. 전자 파일은 복구할 수 없는 방법으로 영구 삭제하고, 출력물은 분쇄하거나 소각합니다."],
          ["동의 거부 권리", "개인정보 수집·이용에 동의하지 않을 권리가 있습니다. 다만 필수 항목 수집에 동의하지 않으면 문의 접수와 답변이 제한될 수 있습니다."],
        ],
        officer: "개인정보 보호책임자: 정석현(대표)", contactLabel: "개인정보 관련 문의:", close: "개인정보처리방침 닫기", confirm: "확인",
      },
    },
  },
  en: {
    metaTitle: "Contact",
    metaDesc: "Get in touch about Cinemind, the AI content prediction engine, Shot-X, the AI short-drama studio, and AI automation projects.",
    heroTitle: ["Start something new", "with Jervis Labs."],
    heroDesc: "From Cinemind collaboration and Shot-X adoption to AI prediction and automation projects, reach out anytime.",
    formTitle: ["Send", " an inquiry"],
    formIntro: "Send us your inquiry using the form below and we will get back to you.",
    infoTitle: ["We'll explore the potential", "of your project together."],
    infoDesc: "Tell us your goals, current stage and the technology you need, and we will propose the collaboration model that fits best.",
    card: { title: "Contact information", person: "Contact person", email: "Email", address: "Address", addressLines: ["803, 17 Digital-ro 27ga-gil, Guro-gu, Seoul", "08375, Republic of Korea"], emailBtn: "✉ Email us" },
    form: {
      honeypot: "Website", required: "Required fields.",
      subject: "Subject", subjectPh: "Enter a subject.", name: "Name", namePh: "Enter your name.", phone: "Phone", phonePh: "Numbers only.", email: "Email", emailPh: "Enter your email address.",
      type: "Inquiry type", types: { Cinemind: "Cinemind", "Shot-X": "Shot-X", "프로젝트": "Project", "제품 도입": "Product adoption", "기술 컨설팅": "Technical consulting", "파트너십": "Partnership", "기타": "Other" },
      message: "Message", messagePh: "Please describe your inquiry in detail so we can assist you.",
      consent: "(Required) I agree to the collection of personal information.", policyLink: "Privacy policy", cancel: "Cancel", submit: "Send", sending: "Sending…", statusSending: "Sending your inquiry.",
      success: "Your inquiry has been received. We will reply soon.",
      errors: { tooLarge: "The request is too large.", badFormat: "Invalid request format.", invalid: "Please check the information you entered.", mail: "The mail server is not configured. Please contact us by email.", fallback: "Failed to send your inquiry. Please try again later." },
      privacy: {
        title: "Privacy Policy",
        intro: "Jervis Labs collects and uses personal information as described below to receive and respond to inquiries.",
        rows: [
          ["Items collected", "Name, phone number, email address, subject, inquiry type and message"],
          ["Purpose of collection and use", "Reviewing inquiries, consultation and replies, and smooth communication"],
          ["Retention period", "Destroyed without delay once the purpose of processing is achieved. If retention is required under applicable laws, the information is kept for the required period."],
          ["Processing outsourcing and overseas transfer", "Inquiry content is delivered by email and may be processed and stored on servers (including overseas) of the email service provider (Google LLC). If the recipient of outsourcing or transfer changes, we will notify you through this policy."],
          ["Destruction procedure and method", "Destroyed without delay when the retention period ends or the purpose is achieved. Electronic files are permanently deleted by a method that cannot be recovered; printed materials are shredded or incinerated."],
          ["Right to refuse consent", "You have the right to refuse consent to the collection and use of personal information. However, if you do not consent to the collection of required items, we may be unable to accept and respond to your inquiry."],
        ],
        officer: "Data protection officer: Jerry Jung (정석현), CEO", contactLabel: "Privacy inquiries:", close: "Close privacy policy", confirm: "OK",
      },
    },
  },
  ja: {
    metaTitle: "お問い合わせ",
    metaDesc: "AIコンテンツ予測エンジン「Cinemind」、AIショートドラマスタジオ「Shot-X」の導入・協業、AI自動化プロジェクトについて、Jervis Labsにお問い合わせください。",
    heroTitle: ["新しいビジネスの始まりを、", "Jervis Labsと共に。"],
    heroDesc: "Cinemindでの協業、Shot-Xの導入、AI予測・自動化プロジェクトまで、お気軽にご相談ください。",
    formTitle: ["お問い合わせ", ""],
    formIntro: "下記のフォームからお問い合わせいただければ、ご回答いたします。",
    infoTitle: ["プロジェクトの可能性を", "一緒に検討します。"],
    infoDesc: "目標、現在の段階、必要な技術をお知らせいただければ、最適な協業の形をご提案します。",
    card: { title: "連絡先情報", person: "担当者", email: "メール", address: "住所", addressLines: ["ソウル特別市 九老区 デジタルロ27ガギル17、803号", "(08375) 大韓民国"], emailBtn: "✉ メールで問い合わせ" },
    form: {
      honeypot: "ウェブサイト", required: "は必須項目です。",
      subject: "件名", subjectPh: "件名を入力してください。", name: "お名前", namePh: "お名前を入力してください。", phone: "連絡先", phonePh: "数字のみ入力してください。", email: "メール", emailPh: "メールアドレスを入力してください。",
      type: "お問い合わせの種類", types: { Cinemind: "Cinemind", "Shot-X": "Shot-X", "프로젝트": "プロジェクト", "제품 도입": "製品導入", "기술 컨설팅": "技術コンサルティング", "파트너십": "パートナーシップ", "기타": "その他" },
      message: "お問い合わせ内容", messagePh: "ご相談のため、お問い合わせ内容を具体的にご記入ください。",
      consent: "（必須）個人情報の収集に同意します。", policyLink: "プライバシーポリシー", cancel: "キャンセル", submit: "送信する", sending: "送信中…", statusSending: "お問い合わせを送信しています。",
      success: "お問い合わせを受け付けました。確認のうえ、速やかにご回答いたします。",
      errors: { tooLarge: "リクエストの内容が大きすぎます。", badFormat: "リクエスト形式が正しくありません。", invalid: "入力内容をご確認ください。", mail: "メールサーバーの設定をご確認ください。", fallback: "お問い合わせの送信に失敗しました。しばらくしてからもう一度お試しください。" },
      privacy: {
        title: "プライバシーポリシー",
        intro: "Jervis Labsは、お問い合わせの受付と回答のため、以下のとおり個人情報を収集・利用します。",
        rows: [
          ["収集項目", "お名前、連絡先、メールアドレス、件名、お問い合わせの種類、お問い合わせ内容"],
          ["収集・利用目的", "お問い合わせ内容の確認、相談および回答、円滑なコミュニケーション"],
          ["保有・利用期間", "処理目的の達成後、遅滞なく破棄します。ただし、関係法令により保存が必要な場合は、その期間保管します。"],
          ["処理の委託および国外移転", "お問い合わせ内容はメールで送信され、その過程でメールサービス提供者（Google LLC）のサーバー（国外を含む）を経由して処理・保管される場合があります。委託または移転の対象が変更される場合は、本方針でお知らせします。"],
          ["破棄の手続きおよび方法", "保有期間が終了した場合、または処理目的が達成された場合は、遅滞なく破棄します。電子ファイルは復元できない方法で完全に削除し、出力物は裁断または焼却します。"],
          ["同意拒否の権利", "個人情報の収集・利用に同意しない権利があります。ただし、必須項目の収集に同意しない場合、お問い合わせの受付と回答が制限されることがあります。"],
        ],
        officer: "個人情報保護責任者：Jerry Jung（정석현）代表", contactLabel: "個人情報に関するお問い合わせ：", close: "プライバシーポリシーを閉じる", confirm: "OK",
      },
    },
  },
};
