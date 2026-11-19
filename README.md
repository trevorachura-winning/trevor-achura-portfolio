# Trevor Achura — Personal Portfolio

Personal portfolio for **Trevor Achura**, Enterprise AI & Automation Consultant, Kampala.
Target domain: **https://trevor.flameconnect.tech** — first site in the Flame Connect team portfolio network.

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4
- **Hosting:** Vercel (team `trevorachura-5589`, project `trevor-achura-portfolio`)
- **No database, no CMS, no paid dependencies.**

## Run locally (Windows PowerShell / VS Code terminal)

```powershell
cd C:\path\to\trevor-achura-portfolio
npm install          # creates package-lock.json — commit it
npm run dev          # http://localhost:3000
npm run check        # typecheck + lint + production build
```

Requires Node.js 20.9 or newer (22 LTS recommended, see `.nvmrc`).

## Project structure

```
src/
  app/                 layout, page, SEO (metadata, OG image, robots, sitemap, icon)
  components/
    layout/            SiteHeader (sticky + mobile menu), SiteFooter
    sections/          Hero, About, Expertise (+ skills), Experience, Learning, Insights, Contact
    ui/                Reveal (scroll motion), SectionHeading, OrgMark, Icon, CopyButton
  content/portfolio.ts ALL personal content — the only file that changes per person
  lib/types.ts         the Portfolio content contract (incl. phase-two CaseStudy model)
  lib/case-studies.ts  publish filter for phase two (not rendered yet)
  app/globals.css      design tokens (@theme) and shared utilities
public/logos/          approved organisation logos go here (see docs/OPEN_FACTS.md)
docs/                  build status, open facts, references, QA summary
```

## Editing content

All text, roles, dates, outcomes and contact details live in `src/content/portfolio.ts`, typed against `src/lib/types.ts`.

- **Portrait:** add the approved photo to `public/portrait/`, then uncomment `profile.portrait` with `approved: true`. Until then the hero shows a designed profile card.
- **Logos:** add an approved file to `public/logos/` and set `organisation.logo` (`src`, `alt`, `width`, `height`). Until then a neutral typographic mark is shown — never a recreated logo.
- **Websites:** only links with `verified: true` are rendered.
- **Contact methods:** set `public: false` to hide a method.
- **Outcomes:** keep the documented wording; each outcome is labelled with its source.

## Team portfolio pattern

To create `firstname.flameconnect.tech`:

1. Copy this repository to a new repo (`firstname-portfolio`).
2. Replace `src/content/portfolio.ts` with the member's approved content.
3. Replace the `@theme` tokens in `src/app/globals.css` with the member's own identity.
4. Create a separate Vercel project and add the subdomain.

Each site stays standalone — no shared database, dashboard or CMS.

## Projects (phase two)

The `CaseStudy` type and `publishableCaseStudies()` filter are ready, but **no projects section is rendered**. It ships only when a case study has approved screenshots, Trevor's actual responsibilities, technologies and verified results.

## Release rules

Work on a feature branch → open a PR → Vercel preview → owner review. **No merge to `main`, production deploy or domain change without Trevor's approval.** See `AGENTS.md` and `docs/BUILD_STATUS.md`.
