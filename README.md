# CoreFlux — Next.js site

Production rebuild of the CoreFlux marketing site. Next.js 15 (App Router) + React 19 + TypeScript + Tailwind 3.4.

## Setup

```bash
cd coreflux-next
npm install
npm run dev          # http://localhost:3000
```

## Routes

| Path | Status | Notes |
|---|---|---|
| `/` | Full | Home page, ported from the static React build |
| `/services/*` | Full | ERP, LMS, data migration, AI automation, web & apps, games & sims |
| `/case-studies` | Full | Listing of 6 case studies |
| `/case-studies/[slug]` | Full | Detail template — data in `components/case-studies-data.ts` |
| `/approach` | Full | |
| `/process` | Full | |
| `/careers` | Full | Open roles + values |
| `/press-kit` | Full | Boilerplate, facts, assets list (asset files still TODO) |
| `/privacy`, `/terms` | Skeleton | TODO boxes — final legal text still needed |
| `/*` | Custom 404 | |

Also generated: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, icons
(`app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`) and the share image
`public/og.jpg`.

## Design system

- **Fonts:** Geist (sans), Geist Mono, Instrument Serif — loaded via `next/font`
- **Tokens:** CSS variables in `app/globals.css` (`--c1`/`--c2`/etc. for the purple palette, `--ink`/`--ink-2`/`--mute` for text)
- **Components:** `components/` for shared, `components/home/` for landing-page-only sections
- **Motion:** scroll-reveal handled by `components/RevealObserver.tsx`; respects `prefers-reduced-motion` in `globals.css`

## Conventions

- **Metadata:** every page exports `pageMetadata({ title, description, path })`
  from `lib/site.ts` (title length, canonical URL, Open Graph, Twitter card).
  New pages should also be added to `app/sitemap.ts` if they aren't in `nav-data.ts`.
- **New service pages:** copy `app/services/erp/page.tsx` — `PageHero` +
  `SectionHead` + `CapabilityGrid` + custom sections + `FAQ` + `CTA`. `FAQ`
  emits FAQPage structured data automatically.
- **Animated components:** `components/skiper/` holds effects adapted from the
  free [Skiper UI](https://skiper-ui.com) set (sticky stacked cards, hover-expand
  panels, text roll). The free license requires the "Components by Skiper UI"
  credit in the footer — keep it unless you move to Skiper UI Pro. Card colours
  for stacks cycle through `lib/tones.ts`.
- **Analytics:** set `NEXT_PUBLIC_GA_MEASUREMENT_ID` at build time. GA4 only
  loads after cookie consent (`components/Analytics.tsx`); send events with
  `trackEvent()` from `lib/analytics.ts`.

## Hosting

Production runs on AWS with pm2 behind Apache — see `DEPLOY.md`. Security
headers and the www → bare-domain redirect live in `next.config.mjs`.
