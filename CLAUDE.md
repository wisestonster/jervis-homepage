# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Jervis Labs marketing website — a Next.js (App Router) site, deployed as a standalone Node process on a Linux server (no Vercel-specific features). The company's primary pitch is now **Cinemind** (an AI content-performance prediction engine) and **Shot-X** (an AI short-drama production studio); the earlier blockchain/Web3 product lineup (JervisBox, ArtPass, JerviX, etc.) is kept as an archived "WEB3" section. The site is fully trilingual (English/Korean/Japanese) via locale-prefixed routes.

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
All public pages live under `app/[lang]/` (SSG via `generateStaticParams`, `dynamicParams = false`) — see the Internationalization section below for how the locale segment works. The primary GNB (`navItems` in `lib/content.ts`) is ABOUT US / CINEMIND / SHOT-X / NEWS / CONTACT. `app/[lang]/cinemind/page.tsx` and `app/[lang]/shot-x/page.tsx` pull copy from `lib/copy/cinemind.ts`/`lib/copy/shotx.ts` and render it with `components/service-ui.tsx` (`ServiceHero`, `SectionHead`, `ServiceCTA`, `Faq`, and `ScreenSlot` — a dashed placeholder for a screen capture, swapped for a real image via its `src` prop). The former GNB pages (`technology`, `project`, `product`, `product/[slug]`) are kept as an archive linked from the strip above the footer (`archiveNavItems` in `lib/content.ts`, rendered as a "WEB3" dropdown in `components/site-shell.tsx`); their per-product pages under `app/[lang]/product/<slug>/page.tsx` are each a two-line file built from the `productMetadata(slug)`/`productPage(slug)` factory in `components/product-page.tsx`. Generated imagery is in `public/images/` (made with Higgsfield). `app/[lang]/news/page.tsx` reads live data from the news store. `app/admin/*` and `app/api/*` are **not** locale-prefixed — see Admin auth below.

### News system (SQLite-backed CMS)
This is the one dynamic subsystem in the app:
- `lib/news-store.ts` is the only place that talks to the database. Uses Node's built-in `node:sqlite` (`DatabaseSync`) — synchronous, cached on `globalThis` to survive dev hot-reload. DB file defaults to `data/news.db`, overridable via `NEWS_DB_PATH`.
- On first run it auto-migrates from a legacy `data/news.json` if present, or seeds from the hardcoded `newsItems` in `lib/content.ts` otherwise (see `migrateJson`/`legacySeed`). This only happens once (`app_meta.json_migrated` flag) — don't expect it to re-seed after that.
- News items have a `status` of `draft` | `published`; only `published` are shown on the public `/[lang]/news` page. `listPublishedNewsPage` handles pagination. Article title/summary/body are stored once and are **not** translated per locale.
- Admin UI lives at `/admin/news` (`app/admin/news/admin-news.tsx`, client component driving `app/api/admin/news/*` routes). It's a single board (not tabs), with a visibility toggle, a pin-to-top toggle, and an "auto-fill from URL" button that hits `POST /api/admin/news/metadata`.
- `lib/page-metadata.ts` implements that auto-fill: fetches an arbitrary user-supplied URL server-side and scrapes OG/meta tags. It has hardened SSRF protections (blocks private/loopback/link-local ranges, non-HTTP(S) schemes, non-default ports, oversized/non-HTML responses, redirect loops) — preserve these checks if touching this file.

### Admin auth
Custom cookie-based auth, no external auth library (`lib/admin-auth.ts`):
- Requires both `ADMIN_PASSWORD` (>=8 chars) and `ADMIN_SESSION_SECRET` (>=32 chars) env vars to be "configured"; if unset, admin login is disabled entirely (`adminConfigured()`).
- Session cookie is a signed `expires.hmac` pair (HMAC-SHA256, `timingSafeEqual` comparisons) — not a JWT/session store. 8-hour expiry.
- All `/api/admin/*` routes must call `isAdmin()` and 401 if false; there's no middleware-level gate, so this check must be added explicitly in any new admin route.
- `app/admin/layout.tsx` is its own root layout (Korean-only, no language switcher, `robots: noindex`) — it is outside `app/[lang]/`, so it does not go through `proxy.ts`'s locale redirect.

### Contact form
`app/[lang]/contact/contact-form.tsx` posts to `app/api/contact/route.ts`, which sends mail via `nodemailer` using `SMTP_*` env vars (see `.env.example`). Includes a honeypot field (`website`) that silently no-ops on submit, and validates content-length/content-type before parsing the body. Missing SMTP config returns 503 rather than throwing.

### SEO
`lib/seo.ts` centralizes `Metadata` construction (`createPageMetadata`, `createProductMetadata`) — use these instead of building `Metadata` objects by hand so OpenGraph/Twitter/canonical and locale `hreflang` alternates stay consistent. Site URL comes from `NEXT_PUBLIC_SITE_URL` (falls back to `https://jervis.kr`). `app/opengraph-image.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` are the other SEO surfaces (unprefixed, shared across locales). `app/[lang]/layout.tsx` injects the Organization/WebSite JSON-LD.

### Internationalization (EN / KR / JP)
- URLs are locale-prefixed: `/en/...`, `/ko/...`, `/ja/...`. All site pages live under `app/[lang]/` (SSG via `generateStaticParams`; `dynamicParams = false` so other prefixes 404). `app/admin`, `app/api` and the metadata routes (`sitemap`, `robots`, `manifest`, `opengraph-image`) stay unprefixed; `/admin` has its own root layout (Korean only, no language switcher, `noindex`).
- `proxy.ts` (Next.js 16's middleware convention) redirects any unprefixed path to `/{locale}{path}` (307) using the `lang` cookie, defaulting to **EN**, and refreshes that cookie on prefixed requests. Its `matcher` skips api/admin/_next/opengraph-image and anything with a file extension — keep the `\.` escape correct if you edit it.
- Pages/layouts read the locale from the route: `const locale = await localeFrom(params)` (`lib/i18n.ts`, server-only; type `LangParams`). `lib/locale.ts` is client-safe and provides `localizedPath(locale, "/about")` — **every internal `href` must go through it** — plus `stripLocale()` for active-link logic. The GNB switcher (`components/language-switcher.tsx`) navigates to the same path under another prefix.
- All copy lives in `lib/copy/*.ts` as `Record<Locale, …>` objects typed from one shape (a missing key in any language is a TypeScript error): `common` (header/footer/CTA/SEO/news/product-page strings), `home`, `about`, `cinemind`, `shotx`, `contact`, `web3` (technology/project/solution pages). Korean source data for the archived WEB3 products/projects stays in `lib/content.ts`; `lib/copy/web3.ts` overlays en/ja translations by index/slug via `getLocalizedProduct(slug, locale)` and friends.
- SEO: `createPageMetadata({ ..., path: "/about", locale })` takes the *unprefixed* path and emits the localized canonical plus `hreflang` alternates (en/ko/ja/x-default); `breadcrumbJsonLd(items, locale)` and `sitemap.ts` (3 URLs per page with alternates) follow the same rule.
- Don't import `lib/i18n.ts` (or `components/page-ui.tsx`) from a client component — `components/arrow.tsx` exists for that reason (a tiny client-safe icon other client components can use instead). API error messages and news article text (from the DB) are not translated.

### Shared UI
- `components/site-shell.tsx` — header/nav and footer. Takes `locale` explicitly (it's a client component and can't read the `[lang]` route param itself); active-link logic uses `stripLocale(usePathname())`. Renders `navItems` (primary GNB) plus `archiveNavItems` (from `lib/content.ts`) as a "WEB3" dropdown, and the `LanguageSwitcher`.
- `components/language-switcher.tsx` — GNB language picker; rewrites the current path to the same page under another locale prefix and persists the choice to the `lang` cookie.
- `components/service-ui.tsx` — building blocks for the Cinemind/Shot-X landing pages (`ServiceHero`, `SectionHead`, `ServiceCTA`, `Faq`, `ScreenSlot`).
- `components/product-page.tsx` — the `productMetadata(slug)`/`productPage(slug)` factory every archived WEB3 product route (`app/[lang]/product/<slug>/page.tsx`) is built from.
- `components/news-card.tsx`, `components/page-ui.tsx` — reusable presentational pieces (news card, hero/CTA/arrow/`ProductLanding` primitives for the archived WEB3 pages). `components/arrow.tsx` holds just the arrow icon so client components don't have to import the (server-only-tainted) `page-ui.tsx`.
- Styling is plain CSS with design tokens (CSS variables) in `app/globals.css`, no CSS-in-JS/Tailwind components layer beyond the PostCSS/Tailwind v4 pipeline already wired via `@tailwindcss/postcss`.
- **`DESIGN_SYSTEM.md`** documents the full token/component system (colors, type scale, spacing, breakpoints at 980px/740px, card/button/form specs, dark "night" surfaces). Read it before adding or restyling UI — reuse existing tokens/classes rather than inventing new ones, per its own "구현 규칙" (implementation rules) section.

## Working conventions

- Path alias `@/*` maps to repo root (see `tsconfig.json`).
- Server-only modules (`lib/news-store.ts`, `lib/admin-auth.ts`, `lib/page-metadata.ts`, `lib/i18n.ts`) start with `import "server-only"` — keep that guard when editing them, and don't import them from client components.
- `next.config.ts` whitelists remote image hostnames (`images.remotePatterns`) — adding a new external image source (e.g. a news thumbnail domain) requires adding it there.
