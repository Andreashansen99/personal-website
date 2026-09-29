# Making Changes to This Site

Two paths, depending on how hands-on you want to be.

## Manual, no code (e.g. swapping in your real CV)

1. Just replace the file: drop your real résumé at `public/cv.pdf` (same
   filename, overwrite the placeholder).
2. Commit and push:
   ```
   cd /Users/andreashansen/programmering/claude
   git add public/cv.pdf
   git commit -m "Add real CV"
   git push
   ```
3. Vercel auto-deploys every push to `main` straight to production —
   nothing else to do. Same pattern for any file you want to hand-edit
   (text in `components/Hero.tsx`, links in `components/Links.tsx`, etc.)
   if you're comfortable poking at the code directly.

## Using Claude Code again

Just open a terminal, `cd` into `/Users/andreashansen/programmering/claude`,
and start a session there. Everything needed to pick up where we left off
is already committed in the repo:

- `SPEC.md` — the project's requirements/conventions
- `tasks/plan.md` / `tasks/todo.md` — what's been built and what's still open

Just describe what you want ("add a projects section," "change the accent
color," "update my bio to mention X") and it'll edit the code, run
lint/typecheck/build to verify, commit, and push — same loop used to build
v1. No extra setup needed; a fresh session will read the repo and orient
itself from those files if you ask it to look, or you can just point it at
what you want changed directly.

One thing worth remembering: the `tasks/plan.md` / `tasks/todo.md` files
are specific to the *v1 build* — for future work it's fine to just
describe the change directly rather than going through the full
spec → plan → build ceremony again; that's really for bigger new
features, not small tweaks.

## Ideas for the Future

Not a roadmap, just a list to pick from when there's time.

**Content**
- Swap `public/cv.pdf` for a real résumé
- A projects/portfolio section — actual BI/data work: dashboards, SQL
  queries, notebooks, small analyses. This is the single highest-value
  addition for a recruiter audience.
- A short skills list (tools: SQL, Power BI/Tableau, Python, Excel, etc.)
- Education/experience timeline (relevant coursework, certifications,
  internships, part-time work)
- Short case studies for specific projects: the problem, the approach,
  the tools, the outcome — more convincing than a bare project list

**Features**
- A live, small interactive chart or dashboard embedded on the page —
  a genuine proof of BI skill rather than a description of it
- A `/projects` route per the original SPEC.md structure, so future
  apps/tools can live at their own path without touching the landing page
- Basic analytics (Vercel Analytics is a one-line add) to see if anyone's
  actually visiting
- A proper custom favicon instead of the Next.js default
- `sitemap.xml` / `robots.txt` for SEO once there's more than one page
- A manual light/dark toggle (currently only follows OS preference)

**Polish**
- Replace "Work in Progress" once there's real content to show instead
- A real GitHub repo README with a screenshot, once the design settles
- Lighthouse/accessibility check again after any bigger content addition
  (re-run `/web-interface-guidelines`)
