# Jervis Labs Design System

> 현재 웹사이트 구현을 기준으로 정리한 디자인 시스템입니다. 스타일의 최종 소스는 [`app/globals.css`](./app/globals.css)이며, 컴포넌트 구조는 `components/`와 `app/`의 TSX 파일을 따릅니다.

- 문서 버전: 1.0
- 기준일: 2026-08-18
- 적용 범위: 공개 웹사이트 및 NEWS 관리자

## 1. 디자인 방향

Jervis Labs의 시각 언어는 블록체인·Web3·AI 기술 기업의 신뢰성과 확장성을 표현합니다.

- 밝고 정돈된 흰색·소프트 블루 화면을 기본으로 사용합니다.
- 핵심 행동과 브랜드 메시지는 Primary Blue로 강조합니다.
- 보조 강조와 상태 표현에는 Cyan을 사용합니다.
- 기술 스택, 콘솔, 프로젝트 영역은 Night Navy 배경으로 대비를 만듭니다.
- 카드와 패널은 얇은 테두리, 작은 곡률, 절제된 그림자를 사용합니다.
- 장식보다 정보 계층과 여백을 우선합니다.

## 2. 디자인 토큰

### 2.1 색상

| 토큰 | 값 | 용도 |
|---|---:|---|
| `--blue` | `#0064AB` | 주요 버튼, 링크, 브랜드 강조 |
| `--blue-dark` | `#003A66` | 버튼 Hover, 진한 브랜드 색상 |
| `--cyan` | `#22BEC9` | 보조 강조, 활성선, 기술 상태 |
| `--ink` | `#071B2B` | 제목 및 가장 강한 본문 대비 |
| `--body` | `#3D5A72` | 기본 본문 텍스트 |
| `--muted` | `#6B839A` | 보조 설명, 메타데이터 |
| `--line` | `#DDE6ED` | 카드·입력창·섹션 구분선 |
| `--soft` | `#F3F8FB` | 보조 섹션 및 약한 배경 |
| `--night` | `#06121C` | 다크 패널, 프로젝트, 푸터 |
| `--white` | `#FFFFFF` | 기본 표면 및 반전 텍스트 |

추가로 사용되는 의미 색상:

| 역할 | 값 | 사용 예시 |
|---|---:|---|
| Eyebrow Teal | `#0A7F89` | 밝은 배경의 영문 섹션 라벨 |
| Link Cyan | `#00A5CC` | 뉴스 원문 링크 |
| Success | `#08714D` | 게시 상태 텍스트 |
| Success Surface | `#DFF5EB` | 게시 상태 배경 |
| Warning | `#8A5B00` | 초안 상태 텍스트 |
| Warning Surface | `#FFF2D5` | 초안 상태 배경 |
| Danger | `#B73737` | 삭제 및 오류 메시지 |

### 2.2 그라디언트와 그림자

```css
/* Hero background */
linear-gradient(118deg, #EFF6FC, #EAFBFB)

/* Standard elevation */
0 14px 40px rgba(7, 27, 43, 0.08)

/* Dark technology panel */
0 20px 50px rgba(0, 100, 171, 0.22)
```

그림자는 기본 상태가 아니라 Hover 또는 핵심 기술 패널처럼 계층 구분이 필요한 경우에 사용합니다.

### 2.3 제품별 Accent

| 클래스 | 값 | 제품 |
|---|---:|---|
| `.product-blue` | `#0064AB` | 기본 Blue 계열 |
| `.product-cyan` | `#0E97A2` | Cyan 계열 |
| `.product-navy` | `#003A66` | Navy 계열 |
| `.product-violet` | `#6D61BD` | Violet 계열 |
| `.product-gold` | `#B8862E` | Gold 계열 |
| `.product-emerald` | `#1B8A5A` | Emerald 계열 |

제품 Accent는 카드 상단선, 카테고리, 콘솔 마크에 사용하며 본문 전체를 Accent 색상으로 채우지 않습니다.

## 3. 타이포그래피

### 3.1 글꼴

```css
font-family: Inter, "Pretendard Variable", Pretendard,
  "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
```

- 영문과 숫자는 Inter를 우선합니다.
- 한글은 Pretendard Variable로 자연스럽게 대체됩니다.
- 별도의 코드 글꼴 없이 현재는 동일한 패밀리를 기술 라벨에도 사용합니다.
- 본문은 `font-weight: 400`, 제목·버튼·강조는 `700`, 대형 Hero 제목은 `800`입니다.
- 한글 본문은 `word-break: keep-all`을 사용합니다.

### 3.2 타입 계층

| 역할 | 크기 및 행간 | 용도 |
|---|---|---|
| Home Hero | `clamp(48px, 5.2vw, 74px) / 1.06` | 홈페이지 핵심 메시지 |
| Page Hero | `clamp(48px, 6vw, 76px) / 1.08` | 서브페이지 제목 |
| Product Hero | `clamp(54px, 7vw, 86px) / 1` | 제품명 |
| Section Heading | `clamp(34px, 4vw, 50px) / 1.18` | 섹션 제목 |
| Card Heading | `18–30px / 약 1.45` | 카드·목록 제목 |
| Lead Body | `18px / 1.75` | Hero 설명 |
| Body | `14–16px / 1.65–1.8` | 일반 본문 |
| Eyebrow | `11px`, `600`, `0.15em` | 영문 섹션 라벨 |
| Metadata | `10–12px`, `500–700` | 날짜, 상태, 분류 |

대형 제목은 `letter-spacing: -0.03em`에서 `-0.045em` 사이를 사용합니다. 본문에는 음수 자간을 적용하지 않습니다.

## 4. 레이아웃

### 4.1 컨테이너

```css
.container {
  width: min(1200px, calc(100% - 48px));
  margin: auto;
}
```

- 최대 콘텐츠 폭: `1200px`
- Desktop 좌우 최소 여백: `24px`
- Mobile 좌우 여백: `16px`
- 일반 섹션 상하 여백: `108px`
- Mobile 섹션 상하 여백: `76px`

### 4.2 반응형 구간

| 구간 | 기준 | 대표 변화 |
|---|---:|---|
| Desktop | `981px 이상` | 3–4열 카드와 2열 Hero |
| Tablet | `980px 이하` | 2열 카드, Hero 1열 전환 |
| Mobile | `740px 이하` | 대부분 1열, 모바일 메뉴, 버튼 전체 폭 |

새 컴포넌트도 별도 breakpoint를 추가하기보다 이 두 기준을 우선 사용합니다.

### 4.3 그리드

- 제품 목록: Desktop 4열 → Tablet 2열 → Mobile 1열
- 뉴스 목록: Desktop 3열 → Tablet 2열 → Mobile 1열
- 제품 허브: Desktop 2열 → Mobile 1열
- Feature 목록: Desktop 4열 → Tablet 2열 → Mobile 1열
- 일반 2단 소개: Desktop 2열 → Mobile 1열

## 5. 공통 컴포넌트

### 5.1 Header와 Navigation

- 높이: Desktop `74px`, Mobile `64px`
- 화면 상단에 Sticky로 유지합니다.
- 흰색 94% 투명 배경과 `16px` Blur를 사용합니다.
- 현재 메뉴는 Blue 텍스트와 하단 `3px` Cyan 선으로 표시합니다.
- Mobile에서는 햄버거 버튼과 세로 메뉴를 사용합니다.

### 5.2 Button

기본 클래스는 `.button`입니다.

```css
min-height: 48px;
padding: 0 22px;
border-radius: 7px;
font-size: 14px;
font-weight: 700;
```

| 변형 | 클래스 | 용도 |
|---|---|---|
| Primary | `.button` | 주요 제출·이동 행동 |
| Secondary | `.button.button--secondary` | 취소, 보조 행동 |
| Light | `.button.button--light` | Blue/Dark 배경 위 행동 |
| Disabled | `disabled` 또는 `.button--disabled` | 실행 불가능 상태 |

Hover 시 색상을 진하게 하고 `translateY(-1px)`만 적용합니다. 과도한 확대 효과는 사용하지 않습니다.

### 5.3 Text Link

- 클래스: `.text-link`
- Blue, `14px`, Bold
- 텍스트 뒤에 작은 Arrow를 배치합니다.
- 카드 전체가 링크인 경우 별도의 중복 CTA를 추가하지 않습니다.

### 5.4 Page Hero

- 밝은 Hero는 Soft Blue–Cyan 그라디언트를 사용합니다.
- Dark Hero는 Night 배경, 흰색 제목, Muted Blue 본문을 사용합니다.
- Eyebrow → 제목 → 설명 순으로 배치합니다.
- 설명문의 최대 폭은 `720px`입니다.

### 5.5 Card

공통 카드 문법:

- 흰색 표면
- `1px solid var(--line)`
- 곡률 `10–16px`
- 내부 여백 `22–38px`
- Hover 시 `translateY(-3px)`와 표준 그림자
- 제목은 Ink 또는 브랜드 Blue
- 설명은 Body 색상과 `1.6–1.75` 행간

카드 종류:

- Product Card: 상단 Accent 선, 최소 높이 `370px`
- News Card: `15px` 곡률, 16:9 이미지, 분류·날짜 메타데이터
- Team Card: 이니셜 블록과 인물 정보의 2열 구조
- Technology Detail: Soft 배경의 간결한 정보 패널
- Capability Card: 회색 표면과 강한 내부 모듈 조합

### 5.6 News Card

- 이미지 비율: `16:9`
- 이미지 처리: `object-fit: cover`
- 이미지가 없거나 로딩에 실패하면 Jervis Labs 파비콘을 사용합니다.
- 카드 내용은 목록에서 최대 3줄로 제한합니다.
- 원문 링크는 Cyan으로 표시하고 오른쪽에 출처명을 배치합니다.
- 수동 카드에서 값이 없는 부가 분석 영역은 렌더링하지 않습니다.

### 5.7 Form

- 입력창 높이: `46px`
- 테두리: `#C9D6DF`
- 곡률: `7px`
- 입력 좌우 여백: `13px`
- Textarea 내부 여백: `12px`
- Label은 `12px`, Bold, Ink 색상을 사용합니다.
- 필수 입력은 Label과 HTML `required` 속성으로 함께 표현합니다.
- 오류 메시지는 Danger 색상을 사용하고 입력값을 지우지 않습니다.

### 5.8 Status Badge

- Draft: Warning 텍스트와 연한 노란색 표면
- Published: Success 텍스트와 연한 초록색 표면
- 크기: `10px`, Bold
- 작은 직사각형 배지 형태이며 곡률은 `5px`입니다.

### 5.9 Pagination

- 페이지 버튼은 최소 `42px × 42px`, Mobile에서는 `36px × 38px`를 사용합니다.
- 기본 상태는 흰색 표면과 Line 테두리, 현재 페이지는 Blue 표면과 흰색 텍스트입니다.
- 이전·다음 버튼은 페이지 번호보다 넓게 표시합니다.
- 이동할 수 없는 방향은 낮은 불투명도와 `aria-disabled`로 표현합니다.
- 페이지가 많으면 현재 페이지 주변과 처음·마지막 페이지를 남기고 생략 기호를 표시합니다.

### 5.10 Admin Board와 Visibility Switch

- 관리자 뉴스는 상태별 카드 묶음이 아니라 번호·제목·게시일·노출 여부·관리 열을 가진 단일 게시판 목록으로 표시합니다.
- Desktop 목록은 표 형태의 Grid를 사용하고 Mobile에서는 제목, 날짜, 스위치, 관리 버튼 순으로 재배치합니다.
- 노출 여부는 텍스트와 Toggle을 함께 사용하며 Blue는 `노출`, Gray는 `비노출`을 뜻합니다.
- Toggle에는 네이티브 Checkbox와 `role="switch"`를 사용해 키보드 조작과 상태 읽기를 지원합니다.
- 등록·수정 폼은 목록 위에 표시하며 완료 또는 취소하면 목록 화면으로 돌아갑니다.

## 6. Dark Surface

Night 배경은 기술적 깊이나 집중이 필요한 영역에 제한합니다.

- 기술 콘솔
- 프로젝트 섹션
- 연락처 정보 카드
- Footer

Dark Surface 안에서는 다음 대비를 사용합니다.

- 제목: White
- 본문: `#9DB0BF`
- 보조 텍스트: `#7D95A8`
- 강조: Cyan
- 구분선: `rgba(255, 255, 255, 0.1–0.12)`

## 7. 이미지와 아이콘

- 브랜드 로고는 원본 비율을 유지합니다.
- 뉴스 이미지는 항상 16:9 영역 안에서 Crop합니다.
- 기능 설명용 그래픽은 Blue, Cyan, Night 팔레트 안에서 제작합니다.
- 아이콘은 단순한 기하학 형태 또는 텍스트와 동일한 시각적 두께를 사용합니다.
- 장식 목적의 서로 다른 아이콘 스타일을 한 화면에서 혼용하지 않습니다.
- 이미지에는 내용을 설명하는 `alt`를 작성하고 장식 요소는 `aria-hidden`을 사용합니다.

## 8. 모션

- 기본 전환 시간: `0.2s`
- 버튼 Hover: 위로 `1px`
- 카드 Hover: 위로 `3px`
- Navigation 활성선: 좌우 확장
- 의미 없는 반복 애니메이션은 사용하지 않습니다.
- 모션은 클릭 가능성과 계층을 설명하는 범위에서만 적용합니다.

## 9. 접근성 원칙

- 본문과 배경은 충분한 명도 대비를 유지합니다.
- 키보드로 모든 링크, 버튼, 폼을 조작할 수 있어야 합니다.
- 아이콘 단독 버튼에는 `aria-label`을 제공합니다.
- 상태 변경 메시지는 필요한 경우 `role="status"`와 `aria-live`를 사용합니다.
- 시각적으로 숨긴 텍스트는 `.sr-only`를 사용합니다.
- 색상만으로 상태를 전달하지 않고 텍스트 라벨을 함께 표시합니다.
- 모바일 터치 대상은 최소 약 `42–48px` 높이를 유지합니다.

## 10. 콘텐츠 작성 원칙

- 제목은 짧고 구체적으로 작성합니다.
- 한 섹션에서 문장 종결 방식과 높임말을 통일합니다.
- 영문 Eyebrow는 대문자와 간결한 명사구를 사용합니다.
- 기술 용어는 정확성을 유지하되 본문은 비전문가도 이해할 수 있게 작성합니다.
- 버튼은 `확인`, `보기`보다 `프로젝트 보기`, `문의 보내기`처럼 행동을 명시합니다.
- 뉴스 원문 표시명에는 매체명 또는 문서명을 입력하고, 실제 원문 URL과 연결합니다.

## 11. 구현 규칙

새 UI를 추가할 때 다음 순서를 따릅니다.

1. 기존 CSS 변수와 공통 클래스를 우선 재사용합니다.
2. 레이아웃은 `.container`, `.section`을 기반으로 구성합니다.
3. 색상·그림자·곡률 값을 새로 만들기 전에 기존 토큰으로 해결합니다.
4. Desktop, `980px`, `740px` 세 구간을 확인합니다.
5. Hover, Focus, Disabled, Empty, Error 상태를 함께 설계합니다.
6. 한글 줄바꿈과 긴 URL이 레이아웃을 깨지 않는지 확인합니다.
7. 변경 후 실제 브라우저에서 Desktop과 Mobile 화면을 검수합니다.

## 12. 관련 파일

- 전역 스타일 및 토큰: `app/globals.css`
- 전역 레이아웃과 폰트: `app/layout.tsx`
- Header와 Footer: `components/site-shell.tsx`
- Hero, CTA, Arrow: `components/page-ui.tsx`
- 뉴스 카드: `components/news-card.tsx`
- NEWS 관리자 UI: `app/admin/news/admin-news.tsx`
- Open Graph 이미지: `app/opengraph-image.tsx`
