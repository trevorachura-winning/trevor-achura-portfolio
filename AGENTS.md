# AGENTS.md — rules for any agent working in this repository

1. **Scope:** this repo is Trevor Achura's personal portfolio only. Never modify the Flame Connect corporate website or other repositories.
2. **Brand:** Trevor personal design system — Midnight Navy `#071533`, Electric Blue `#1451D2`, Ice `#EAF3FF`, Slate `#56647F`, Inter / Inter Display. Never apply Flame Connect orange or SE burgundy here.
3. **Truth:** no invented titles, dates, metrics, testimonials, articles, logos or portraits. Unverified facts stay `undefined` / `verified: false` and are tracked in `docs/OPEN_FACTS.md`.
4. **Content lives in `src/content/portfolio.ts`.** Components must not hard-code personal facts.
5. **Projects are phase two.** Do not render empty, fake or in-development project cards.
6. **Git:** feature branch + PR. Never push to `main`, merge, deploy to production or change domains without explicit owner approval.
7. **Checks before a PR:** `npm run check` (typecheck, lint, build) and a visual pass at 320, 375, 414, 768, 1024, 1440 px. Report each as Passed / Failed / Blocked / Not Tested.
8. **Status:** update `docs/BUILD_STATUS.md` in the same PR.
