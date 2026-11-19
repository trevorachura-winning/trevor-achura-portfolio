# QA summary — v1.0

_Environment: cloud build session, 19 Nov 2026. No package registry access, so the Next.js toolchain could not be installed here. The UI was verified by rendering the same React components to static HTML (React 19.2 SSR + Tailwind v4 compiler, Next-specific modules shimmed) and testing in headless Chromium._

## Results

| Check | Result | Evidence / notes |
|---|---|---|
| `npm run build` (next build) | **Blocked** | Next.js not installable in session. Run locally. |
| `npm run lint` (ESLint, eslint-config-next) | **Blocked** | Same reason. |
| `npm run typecheck` (full, with @types/react) | **Blocked** | Same reason. |
| Type-check of project code against React/Next stubs | **Passed** | `tsc --strict --noUncheckedIndexedAccess`, 0 errors. Confirms content satisfies the `Portfolio` contract. |
| Render + hydration (React 19) | **Passed** | No hydration or runtime errors in console. |
| Responsive layout 320 / 375 / 414 / 768 / 1024 / 1440 px | **Passed** | Zero horizontal overflow at all six widths; screenshots reviewed. |
| Mobile menu | **Passed** | Opens, `aria-expanded` toggles, body scroll locks, Escape closes, link click closes and scrolls to section. |
| Keyboard: skip link | **Passed** | First Tab focuses "Skip to content". |
| Copy-email button | **Passed** | Copies; label and live region update. |
| Scroll reveal | **Passed** | Elements reveal on scroll; content visible without JS and with reduced motion. |
| `prefers-reduced-motion` | **Passed** | All content visible; animations disabled. |
| Screen reader full pass | **Not Tested** | Semantics reviewed in code (landmarks, headings, labelled lists, sr-only new-tab notices). |
| Colour contrast audit | **Not Tested** (tool) | Palette pairs used are high-contrast (navy/white, slate on white ≈ 6:1); verify with Lighthouse. |
| Lighthouse / Core Web Vitals | **Not Tested** | Run on Vercel preview. |
| OG image render (`next/og`) | **Not Tested** | Verify at `/opengraph-image` on preview. |
| Real-device testing | **Not Tested** | |

## Truthfulness review

- No invented titles, dates, metrics, articles, testimonials, logos or portraits.
- SE shown without title/dates; unverified websites not linked; outcomes labelled with source.
- Flame Creators and Flame Connect presented as separate businesses (explicit note on card).
- Projects section not rendered.

## Release-blocking items

None in code. Release is gated on owner answers in `OPEN_FACTS.md` and a passing `npm run check`.
