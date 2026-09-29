# Personal Website — Spec

## 1. Objective

A personal website for Andreas that serves as a portfolio hub for job-seeking developers: a
CV/résumé landing page with links to GitHub, LinkedIn, and other profiles, built on a
foundation that can later host additional apps/projects as separate routes without a rewrite.

**Primary audience:** recruiters and employers.
**v1 scope:** a single static landing page. No sub-apps yet — just get something live.

## 2. Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start local dev server (http://localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## 3. Project Structure

Next.js App Router, chosen so future hosted apps/projects can each live under their own route
segment without restructuring the site.

```
/
├── app/
│   ├── layout.tsx        # root layout: fonts, metadata, theme
│   ├── page.tsx          # landing page (hero, links, CV)
│   ├── globals.css       # Tailwind base + global styles
│   └── favicon.ico
├── components/
│   ├── Hero.tsx          # name, title, short bio
│   ├── Links.tsx         # GitHub / LinkedIn / email / other links
│   └── Footer.tsx
├── public/
│   ├── cv.pdf            # downloadable résumé
│   └── og-image.png      # social preview image
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── SPEC.md
```

**Future growth (not built in v1, structure allows it):** additional apps/projects live under
`app/projects/[slug]/` or as fully separate route segments (e.g. `app/apps/some-tool/`), each
free to bring its own client-side logic without touching the landing page.

## 4. Tech Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Fonts/assets:** `next/font`, `next/image` for optimized loading

Chosen because Next.js + Vercel gives a zero-config path from "static landing page" to
"landing page plus several hosted apps" — new routes, API routes, or even separate
frameworks-per-route can be added later without migrating off the platform.

## 5. Code Style

- TypeScript strict mode
- Functional components only, no class components
- Tailwind utility classes for styling; no separate CSS-in-JS
- ESLint (`next/core-web-vitals` config) + Prettier for formatting
- Accessibility: semantic HTML, visible focus states, `aria-label` on icon-only links —
  per Vercel Web Interface Guidelines (checked via `/web-interface-guidelines` before ship)

## 6. Testing Strategy

v1 is a static landing page, so testing stays light:

- `npm run typecheck` and `npm run lint` must pass before any commit
- Manual check in a real browser (desktop + mobile viewport) before deploy
- `/web-interface-guidelines` review run against `app/page.tsx` and `components/*` before
  first deploy

As future interactive apps are added under their own routes, each new app defines its own
testing approach in its own spec section — no blanket requirement imposed here.

## 7. Boundaries

**Always:**
- Commit locally as work progresses (small, atomic commits)
- Run lint + typecheck before committing

**Ask first:**
- Before deploying/pushing live (e.g. `vercel deploy`, pushing to a connected remote)
- Before adding any paid service or dependency with a cost
- Before adding analytics/tracking of any kind

**Never:**
- Commit secrets or API keys
- Remove or weaken accessibility features (focus states, alt text, labels) to save time
