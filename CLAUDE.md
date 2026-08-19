 # CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Jervis Labs marketing website — a Next.js (App Router) site for a blockchain/Web3/AI company, deployed as a standalone Node process on a Linux server (no Vercel-specific features). UI copy is Korean throughout.

## Commands

```bash
npm ci            # install (Node >=22.13.0 required — uses node:sqlite)
npm run dev        # dev server
npm run build       # production build
npm start          # run production build
npm run lint        # eslint (flat config, next/core-web-vitals + next/typescript)
```

There is no test suite configured. `tsc` is not run standalone (`noEmit`, checked via `next build`/editor).

## Architecture

### Routing & rendering
Standard Next.js App Router under `app/`. Marketing pages (`about`, `technology`, `project`, `product`, `product/[slug]`, `contact`) are static/server-rendered from data in `lib/content.ts` — no CMS, edit that file to change copy. `app/news/page.tsx` reads live data from the news store.

### News system (SQLite-backed CMS)
This is the one dynamic subsystem in the app:
- `lib/news-store.ts` is the only place that talks to the database. Uses Node's built-in `node:sqlite` (`DatabaseSync`) — synchronous, cached on `globalThis` to survive dev hot-reload. DB file defaults to `data/news.db`, overridable via `NEWS_DB_PATH`.
- On first run it auto-migrates from a legacy `data/news.json` if present, or seeds from the hardcoded `newsItems` in `lib/content.ts` otherwise (see `migrateJson`/`legacySeed`). This only happens once (`app_meta.json_migrated` flag) — don't expect it to re-seed after that.
- News items have a `status` of `draft` | `published`; only `published` are shown on the public `/news` page. `listPublishedNewsPage` handles pagination.
- Admin UI lives at `/admin/news` (`app/admin/news/admin-news.tsx`, client component driving `app/api/admin/news/*` routes). It's a single board (not tabs), with a visibility toggle and an "auto-fill from URL" button that hits `POST /api/admin/news/metadata`.
- `lib/page-metadata.ts` implements that auto-fill: fetches an arbitrary user-supplied URL server-side and scrapes OG/meta tags. It has hardened SSRF protections (blocks private/loopback/link-local ranges, non-HTTP(S) schemes, non-default ports, oversized/non-HTML responses, redirect loops) — preserve these checks if touching this file.

### Admin auth
Custom cookie-based auth, no external auth library (`lib/admin-auth.ts`):
- Requires both `ADMIN_PASSWORD` (>=8 chars) and `ADMIN_SESSION_SECRET` (>=32 chars) env vars to be "configured"; if unset, admin login is disabled entirely (`adminConfigured()`).
- Session cookie is a signed `expires.hmac` pair (HMAC-SHA256, `timingSafeEqual` comparisons) — not a JWT/session store. 8-hour expiry.
- All `/api/admin/*` routes must call `isAdmin()` and 401 if false; there's no middleware-level gate, so this check must be added explicitly in any new admin route.

### Contact form
`app/contact/contact-form.tsx` posts to `app/api/contact/route.ts`, which sends mail via `nodemailer` using `SMTP_*` env vars (see `.env.example`). Includes a honeypot field (`website`) that silently no-ops on submit, and validates content-length/content-type before parsing the body. Missing SMTP config returns 503 rather than throwing.

### SEO
`lib/seo.ts` centralizes `Metadata` construction (`createPageMetadata`, `createProductMetadata`) — use these instead of building `Metadata` objects by hand so OpenGraph/Twitter/canonical stay consistent. Site URL comes from `NEXT_PUBLIC_SITE_URL` (falls back to `https://jervis.kr`). `app/opengraph-image.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` are the other SEO surfaces. `app/layout.tsx` also injects Organization/WebSite JSON-LD.

### Shared UI
- `components/site-shell.tsx` — header/nav (active-link logic keyed off `usePathname`, product hub matches `/product/*`) and footer. Nav items are defined once in `lib/content.ts` (`navItems`).
- `components/news-card.tsx`, `components/page-ui.tsx` — reusable presentational pieces (news card, hero/CTA/arrow primitives).
- Styling is plain CSS with design tokens (CSS variables) in `app/globals.css`, no CSS-in-JS/Tailwind components layer beyond the PostCSS/Tailwind v4 pipeline already wired via `@tailwindcss/postcss`.
- **`DESIGN_SYSTEM.md`** documents the full token/component system (colors, type scale, spacing, breakpoints at 980px/740px, card/button/form specs, dark "night" surfaces). Read it before adding or restyling UI — reuse existing tokens/classes rather than inventing new ones, per its own "구현 규칙" (implementation rules) section.

## Working conventions

- Path alias `@/*` maps to repo root (see `tsconfig.json`).
- Server-only modules (`lib/news-store.ts`, `lib/admin-auth.ts`, `lib/page-metadata.ts`) start with `import "server-only"` — keep that guard when editing them, and don't import them from client components.
- `next.config.ts` whitelists remote image hostnames (`images.remotePatterns`) — adding a new external image source (e.g. a news thumbnail domain) requires adding it there.
