# QuickGrowth → Next.js + Tailwind + shadcn/ui + Radix Migration Plan

> **Stack target:** Next.js 15 (App Router) · Tailwind CSS 4 · shadcn/ui · Radix Primitives · TypeScript
> **Source basis:** built artifact at `kayan-mudita/quickgrowth` (no source repo found). Plan derived from `index.html`, bundled CSS class inventory, modal CSS, and `netlify.toml`.

---

## 1. Why this stack fits

| Concern | Current state | Next.js + shadcn wins |
|---|---|---|
| SEO / SSR | SPA, content invisible to crawlers without JS | App Router SSR/SSG — content in initial HTML |
| Conversion pixels | 7 inline `<script>` blocks in `<head>`, render-blocking | `next/script` with `strategy="afterInteractive"` / `lazyOnload` |
| Fonts | External Google Fonts request (FOIT risk) | `next/font` self-hosts, zero layout shift |
| Forms | Custom hand-rolled fetch to Netlify forms | Server Actions + Netlify form integration via header trick |
| Modal/FAQ | Custom CSS + IntersectionObserver | Radix Dialog + Accordion (a11y free) |
| Theming | Hand-rolled CSS classes (180+) | Tailwind tokens + CSS vars in one place |
| Component reuse | None (one giant bundle) | shadcn copy-in components, owned source |

---

## 2. Current site inventory (extracted)

**Sections present** (from class names):
nav · hero · problem · solution · process · case studies · testimonials · milestones · pricing · guarantee · FAQ · work showcase · final CTA · mobile sticky CTA

**Custom visual effects to preserve:**
- 3 animated gradient orbs (`.orb-1/2/3`, `float` keyframes, 20–30s)
- Animated gradient mesh (`meshMove` keyframe, 20s)
- Scrolling grid pattern with radial mask (`gridScroll`)
- Pulse dot · radar · scroll indicator · code window
- Animated timeline (`.timeline-line/dot/marker`)
- Backdrop blur on nav and modal

**Colors actually in use** (from `index-defgrnxe.css` — wider than modal CSS suggested):
- BG: `#0a0a0a` (page) → `#161622`/`#111118` (modal/cards)
- Indigo `#6366F1` · Violet `#8B5CF6` · Teal `#10B981` · Blue `#3B82F6` · Amber `#F59E0B` · Red `#EF4444`
- Multi-accent palette, not single-color

**Third-party scripts loaded synchronously today** (perf concern):
GA4 · GTM · Meta Pixel · Reddit Pixel · LinkedIn Insight · Microsoft Clarity · Keak A/B test script

---

## 3. Target project structure

```
quickgrowth-next/
├── app/
│   ├── layout.tsx              # Fonts, providers, analytics scripts
│   ├── page.tsx                # Home — composes section components
│   ├── thank-you/page.tsx      # Replaces thank-you.html redirect
│   ├── globals.css             # Tailwind base + CSS vars
│   └── api/
│       └── waitlist/route.ts   # Server Action / route handler → Netlify forms
├── components/
│   ├── ui/                     # shadcn/ui primitives (button, dialog, accordion, input)
│   ├── sections/
│   │   ├── nav.tsx
│   │   ├── hero.tsx
│   │   ├── problem.tsx
│   │   ├── solution.tsx
│   │   ├── process.tsx
│   │   ├── case-studies.tsx
│   │   ├── testimonials.tsx
│   │   ├── milestones.tsx
│   │   ├── pricing.tsx
│   │   ├── guarantee.tsx
│   │   ├── faq.tsx
│   │   ├── final-cta.tsx
│   │   └── mobile-sticky-cta.tsx
│   ├── effects/                # Decorative effects, lazy loaded
│   │   ├── gradient-orbs.tsx
│   │   ├── gradient-mesh.tsx
│   │   ├── grid-pattern.tsx
│   │   └── code-window.tsx
│   └── waitlist-modal.tsx      # Radix Dialog
├── lib/
│   ├── analytics.ts            # Centralized pixel events
│   ├── utm.ts                  # UTM param helpers
│   └── netlify.ts              # Form submission helpers
├── tailwind.config.ts          # Design tokens from MASTER.md
└── next.config.ts
```

---

## 4. Component mapping — what becomes shadcn vs custom

| Current | Replace with | Notes |
|---|---|---|
| `.cta-button` | `<Button variant="cta">` (shadcn) | Add custom `cta` variant with indigo→violet gradient + glow |
| `.cta-input` | `<Input>` (shadcn) | Override styling for glass treatment |
| Waitlist modal | Radix `Dialog` (via shadcn) | Free a11y: focus trap, esc, ARIA, scroll lock — replaces 30 lines of custom JS |
| `.faq-item` / `.faq-toggle` | `Accordion` (shadcn/Radix) | Free keyboard nav + ARIA |
| `.pricing-card` | `Card` (shadcn) + custom | Stays mostly custom — pricing is brand-heavy |
| `.testimonial-card` | `Card` + custom | Same |
| `.top-nav` mobile menu | `Sheet` (shadcn) | If mobile drawer needed |
| Toast / inline success | `Sonner` (shadcn toast) | Replaces `.wl-inline-success` swap-in-place |
| Form validation | `react-hook-form` + `zod` + shadcn `Form` | Replaces ad-hoc regex email check |
| Sticky mobile CTA | Custom + IntersectionObserver | Keep — already works correctly, port as-is |
| All decorative effects | Custom | shadcn doesn't ship these; build as `<GradientOrbs />` etc. |

**What to NOT install from shadcn:** Combobox, Calendar, DataTable — not used here, don't bloat.

---

## 5. Tailwind config (tokens straight from MASTER.md)

```ts
// tailwind.config.ts
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { base: "#0a0a0a", raised: "#111118", card: "#161622" },
        primary: { DEFAULT: "#6366F1", alt: "#8B5CF6" },
        accent: { teal: "#10B981", blue: "#3B82F6", amber: "#F59E0B", red: "#EF4444", indigo: "#A5B4FC" },
        glass: "rgb(255 255 255 / 0.06)",
        "glass-border": "rgb(255 255 255 / 0.10)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "cta-gradient": "linear-gradient(135deg, #6366F1, #8B5CF6)",
        "heading-gradient": "linear-gradient(135deg, #FFFFFF 30%, #A5B4FC)",
      },
      boxShadow: {
        glow: "0 4px 15px rgb(99 102 241 / 0.40)",
        "glow-lg": "0 8px 30px rgb(99 102 241 / 0.60)",
      },
      animation: {
        "mesh-move": "meshMove 20s ease infinite",
        float: "float 25s ease-in-out infinite",
        "grid-scroll": "gridScroll 20s linear infinite",
      },
      keyframes: {
        meshMove: { "0%,100%": { opacity: "1", transform: "scale(1)" }, "50%": { opacity: ".8", transform: "scale(1.1)" } },
        float: { "0%,100%": { transform: "translate(0) scale(1) rotate(0)" }, "33%": { transform: "translate(50px,-80px) scale(1.1) rotate(120deg)" }, "66%": { transform: "translate(-30px,40px) scale(.9) rotate(240deg)" } },
        gridScroll: { "0%": { transform: "translate(0)" }, "100%": { transform: "translate(50px,50px)" } },
      },
    },
  },
};
```

---

## 6. Forms — Netlify integration in Next.js

Netlify forms detect at HTML parse time. With Next.js SSG/SSR, two patterns work:

**Pattern A — keep Netlify forms** (lowest migration risk):
- Add a static `<form name="waitlist" data-netlify="true" hidden>` in a server component
- Submit via `fetch("/", { method: "POST", body: encoded })` — same as today
- Pros: zero infra change. Cons: still tied to Netlify.

**Pattern B — Server Action** (cleaner):
```ts
// app/api/waitlist/route.ts
export async function POST(req: Request) {
  const data = await req.formData();
  // forward to Netlify forms OR your CRM/Hubspot/email
  return Response.json({ ok: true });
}
```
- Pros: portable, easy to switch destinations. Cons: lose Netlify form dashboard.

**Recommendation:** Pattern A in phase 1 (deploy parity), Pattern B once a CRM is decided.

---

## 7. Analytics & A/B testing

Wrap every script in `next/script` with appropriate strategy. **Critical wins:**

| Script | Strategy | Reason |
|---|---|---|
| GTM | `afterInteractive` | Other tags load through it |
| GA4 | Skip — fires via GTM | Don't double-load |
| Meta / Reddit / LinkedIn pixels | `lazyOnload` | Not needed for first paint |
| Clarity | `lazyOnload` | Heatmap, post-load only |
| Keak A/B | `beforeInteractive` | Must run before render to avoid FOUC |

Centralize event firing in `lib/analytics.ts` so pixel events (form_submit, cta_click) fire in one place — current code has none of this discipline.

---

## 8. Performance gains expected

- **First Contentful Paint:** ~30–40% better (SSR HTML + deferred pixels)
- **Largest Contentful Paint:** 1–2s improvement (no blocking font swap, image optimization)
- **Cumulative Layout Shift:** near-zero (currently the gradient orbs and font swap can cause shift)
- **JS bundle:** likely 40–60% smaller (tree-shaken shadcn components vs bundled SPA)
- **SEO:** content actually crawlable; today most copy is JS-rendered

---

## 9. Migration phasing

**Phase 1 — Foundation (1–2 days)**
- Scaffold Next.js + Tailwind + shadcn (`npx shadcn@latest init`)
- Port `tailwind.config.ts` from §5
- Set up `next/font` for Space Grotesk + Manrope
- Move all pixels into `app/layout.tsx` with proper `next/script` strategies
- Set up `app/api/waitlist/route.ts` and Radix Dialog modal
- Deploy preview branch to Netlify, validate pixels fire identically

**Phase 2 — Section-by-section port (3–5 days)**
- Build each section component, top-down: nav → hero → … → final-cta
- Each section is its own PR, behind a feature flag if possible
- Visual diff against current live site at every step
- Keep all copy verbatim — this is a port, not a rewrite

**Phase 3 — Effects & polish (1–2 days)**
- Port animated orbs / mesh / grid (lazy-load via `dynamic(..., { ssr: false })`)
- Wire `prefers-reduced-motion` guards
- Lighthouse pass — target 90+ on all four

**Phase 4 — Cutover (0.5 day)**
- Swap Netlify publish dir to Next.js build output
- Run conversion smoke test (submit each CTA path, confirm pixel events in Meta Events Manager / GA Realtime / Reddit / LinkedIn)
- Keep Keak A/B test running through cutover so existing experiments don't break

---

## 10. Risks & things to preserve verbatim

Critical — losing any of these breaks live conversion:

1. **Form name `waitlist`** — Netlify is keyed on this, do not rename
2. **Hidden UTM fields** — `utm_source/medium/campaign/term/content` must persist on form
3. **Bot honeypot field `bot-field`** — Netlify uses this for spam filtering
4. **`/thank-you` route** — currently a redirect to `thank-you.html`; pixel `Lead` events fire on this page
5. **All 7 pixel IDs** — copy from current `index.html` exactly:
   - GA4: `G-H5FBDGQW1C`
   - GTM: `GTM-N9Q3MWGJ`
   - Meta: `1235313188415711`
   - Reddit: `a2_i5txfcwo781d`
   - LinkedIn: `8801348`
   - Clarity: `vo4zuy0mp9`
   - Keak: `1276`
6. **Facebook domain verification meta** — `89vslyqbxwud48s4p0ygah2ei3y42p`
7. **Mobile sticky CTA hide-on-final-CTA-visible logic** — already polished, port the IntersectionObserver as-is
8. **Modal close = partial submit** — current UX submits email-only when user closes modal early. Preserve. This is a deliberate conversion mechanic.

---

## 11. Open questions before kickoff

1. Where is the actual React+Vite source? Migration is 3× faster from source than from this artifact.
2. Hosting decision: stay on Netlify (works fine with Next.js) or move to Vercel?
3. Is anyone using the Keak A/B tool actively? If yes, plan cutover around active experiments.
4. Are there CMS-driven sections planned (blog, case studies) that justify Sanity/Contentful, or stays static?
5. Should `/thank-you` become a real page with shareable content, or stay a thin confirmation?
