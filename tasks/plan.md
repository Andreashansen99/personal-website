# Task Breakdown: Personal Website v1

## Context

`SPEC.md` (already approved) defines v1 as a static Next.js/TypeScript/Tailwind landing page
for a job-seeking developer — CV, bio, and links to GitHub/LinkedIn — deployed on Vercel, with
a route structure that leaves room for hosting future apps under their own paths.

The project directory is currently empty except for `SPEC.md`, so there is no existing
codebase to explore — this plan slices the spec into vertically-complete, independently
verifiable tasks rather than horizontal layers (scaffold, then styling, then content, etc.).

Outcome of this plan: `tasks/plan.md` (this breakdown) and `tasks/todo.md` (checkbox list),
ready for `/agent-skills:build` to execute task-by-task.

## Dependency Graph

```
T1 Scaffold (Next.js + TS + Tailwind, deploys blank page to Vercel)
 ├─→ T2 Hero + bio section
 ├─→ T3 Links section (GitHub/LinkedIn/email)
 ├─→ T4 CV download
 ├─→ T5 Footer
 ├─→ T6 SEO/meta + favicon + OG image
 └─→ (T2,T3,T4,T5) → T7 Accessibility & responsive pass
                        └─→ T8 Production deploy (ask-first checkpoint)
```

T2–T6 touch disjoint files (`components/Hero.tsx`, `components/Links.tsx`, etc.) and can be
built in any order once T1 lands. T7 needs all page content in place to review against
Vercel Web Interface Guidelines. T8 is gated behind explicit user approval per SPEC.md
boundaries ("ask first before deploying").

## Tasks

### T1 — Project scaffold
Initialize Next.js (App Router) + TypeScript + Tailwind, get a blank page running locally and
deployed to Vercel preview.
- `git init`, commit scaffold
- `create-next-app` with TS + Tailwind + App Router, no `src/` dir (matches SPEC.md structure)
- `app/layout.tsx`, `app/page.tsx` placeholder, `app/globals.css`
- **Acceptance:** `npm run dev` serves a blank page at localhost:3000; `npm run lint` and
  `npm run typecheck` pass; project pushed to a new GitHub repo and linked to a Vercel project
  (preview deploy only — no production deploy yet, per boundaries)
- **Verify:** open the Vercel preview URL in a browser, confirm it loads

### T2 — Hero section
`components/Hero.tsx`: name, title/role, short bio paragraph. Rendered in `app/page.tsx`.
- **Acceptance:** visible on page, responsive at mobile (375px) and desktop (1440px) widths,
  heading hierarchy starts at `<h1>`
- **Verify:** `npm run dev`, resize browser, check heading tag in devtools

### T3 — Links section
`components/Links.tsx`: GitHub, LinkedIn, email (mailto:), any other profile links.
- **Acceptance:** all links use `<a href>` (not `<div onClick>`), open external links in a new
  tab with `rel="noopener noreferrer"`, icon-only links have `aria-label`, visible focus state
  on keyboard tab
- **Verify:** tab through links with keyboard, confirm focus ring visible; click each link

### T4 — CV download
`public/cv.pdf` placeholder + a "Download CV" button/link in the page.
- **Acceptance:** clicking downloads/opens the PDF; button label is specific ("Download CV",
  not "Click here")
- **Verify:** click the button, confirm the PDF opens/downloads

### T5 — Footer
`components/Footer.tsx`: copyright line, maybe a "built with" note.
- **Acceptance:** renders at bottom of page, doesn't overlap content on short viewports
- **Verify:** visual check at 375px and 1440px

### T6 — SEO & metadata
`app/layout.tsx` metadata: title, description, favicon, `og-image.png` in `public/`.
- **Acceptance:** browser tab shows correct title/favicon; sharing the URL (or using a social
  preview debugger) shows the OG image and description
- **Verify:** view page source / devtools for `<meta>` tags; favicon visible in tab

### T7 — Accessibility & responsive pass
Run `/web-interface-guidelines` against `app/page.tsx` and all `components/*.tsx`; fix findings.
- **Acceptance:** no unresolved findings from the guidelines review; manual keyboard-only pass
  through the whole page works (tab order sane, all interactive elements reachable)
- **Verify:** re-run `/web-interface-guidelines`, confirm clean pass

### T8 — Production deploy *(checkpoint: ask user before running)*
Promote the Vercel preview to production / connect the final domain.
- **Acceptance:** production URL live, matches the last approved preview
- **Verify:** load the production URL

## Checkpoints

- **After T1:** confirm scaffold looks right and Vercel preview link works before building content
- **After T2–T6:** visual review of the full page in a browser before the accessibility pass
- **After T7:** confirm guidelines pass before touching deploy
- **Before T8:** explicit user go-ahead (SPEC.md boundary: ask first before deploying live)

## Verification (end-to-end)

1. `npm run dev` → manual browser check at mobile + desktop widths
2. `npm run lint && npm run typecheck` → must pass
3. `/web-interface-guidelines` → clean pass on all page/component files
4. Vercel preview URL → loads correctly, all links/CV download work
5. User approves → T8 production deploy
