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
