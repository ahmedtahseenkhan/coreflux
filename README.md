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
| `/services/erp` | Full | Flagship service page (template) |
| `/services/lms` | Polished stub | Highlights + "full page coming soon" |
| `/services/data-migration` | Polished stub | |
| `/services/ai-automation` | Polished stub | |
| `/services/web-apps` | Polished stub | |
| `/services/games-sims` | Polished stub | |
| `/case-studies` | Full | Listing of 6 case studies |
| `/case-studies/[slug]` | Full | Detail template — 6 seeded studies |
| `/approach` | Polished stub | |
| `/process` | Polished stub | |
| `/careers` | Full | Open roles + values |
| `/press-kit` | Full | Boilerplate, facts, assets list |
| `/*` | Custom 404 | |

## Design system

- **Fonts:** Geist (sans), Geist Mono, Instrument Serif — loaded via `next/font`
- **Tokens:** CSS variables in `app/globals.css` (`--c1`/`--c2`/etc. for the purple palette, `--ink`/`--ink-2`/`--mute` for text)
- **Components:** `components/` for shared, `components/home/` for landing-page-only sections
- **Motion:** scroll-reveal handled by `components/RevealObserver.tsx`; respects `prefers-reduced-motion` in `globals.css`

## Next steps

The 9 stub pages share `components/StubPage.tsx`. To promote one to a full page, copy the structure from `app/services/erp/page.tsx` — `PageHero` + `SectionHead` + `CapabilityGrid` + custom sections + `FAQ` + `CTA`.

## Hosting

Vercel is the obvious choice (`vercel --prod`). Any Node host works (`npm run build && npm run start`).
