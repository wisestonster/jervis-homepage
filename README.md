# Jervis Labs website

일반 Linux 서버에서 실행할 수 있는 Next.js 기반 Jervis Labs 웹사이트입니다.

## NEWS 관리자

`/admin/news`에서 뉴스 카드의 제목, 이미지 URL, 내용, 원문 표시명과 원문 URL을 직접 입력하고 초안 또는 게시 상태로 저장합니다. 뉴스 데이터는 SQLite 파일에 저장됩니다.

```env
ADMIN_PASSWORD=관리자-비밀번호
ADMIN_SESSION_SECRET=충분히-긴-임의의-문자열
NEWS_DB_PATH=/var/lib/jervis-labs/news.db
```

`NEWS_DB_PATH`를 생략하면 `data/news.db`를 사용합니다. 운영 서버에서는 DB 파일을 지속 가능한 경로에 두고 정기적으로 백업하세요.

## 문의 메일

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-account@example.com
SMTP_PASS=your-app-password
SMTP_FROM="Jervis News <your-account@example.com>"
```

`SMTP_TO`를 생략하면 `SMTP_USER` 주소로 문의 메일을 수신합니다.

## SEO

```env
NEXT_PUBLIC_SITE_URL=https://www.example.com
GOOGLE_SITE_VERIFICATION=your-verification-code
```

## 개발

```bash
npm ci
npm run dev
```

## Linux 서버 배포

```bash
npm ci
npm run build
npm start
```

기본 포트는 `3000`입니다. 운영 환경에서는 Nginx 등의 리버스 프록시로 HTTPS를 적용하고 systemd 또는 PM2로 Node 프로세스를 관리하세요.
