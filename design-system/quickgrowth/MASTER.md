# QuickGrowth Design System — Master

> When building a page, first check `design-system/quickgrowth/pages/[page-name].md`.
> If it exists, its rules override this file. Otherwise, follow the rules below.

**Project:** QuickGrowth
**Last updated:** 2026-04-15
**Category:** B2B SaaS — Sales AI Automation
**Mode:** Dark by default (no light mode)
**Stack:** React + Vite (web), deployed via Netlify

---

## Style

**Modern Dark / Cinema** — glassmorphism, ambient glow, indigo/violet accents, layered depth, frosted blur.

Source values extracted from live site (`index.html` modal CSS), not from generic templates.

**Best for:** AI tool interfaces, developer/operator dashboards, premium B2B SaaS.
**Avoid:** pure `#000000` (causes OLED smear and looks flat — use `#0F0F18`–`#161622` range).

---

## Color Palette

Pulled from production CSS. Single source of truth.

| Role | Hex | CSS Var | Usage |
|---|---|---|---|
| BG base | `#111118` | `--bg-base` | Page background |
| BG raised | `#161622` | `--bg-raised` | Cards, modal containers |
| Surface glass | `rgba(255,255,255,0.06)` | `--surface-glass` | Inputs, glass panels |
| Border subtle | `rgba(255,255,255,0.10)` | `--border-subtle` | Card borders, dividers |
| Border focus | `rgba(154,107,255,0.80)` | `--border-focus` | Input focus ring |
| Primary | `#6366F1` | `--primary` | Indigo — CTAs, links |
| Primary alt | `#8B5CF6` | `--primary-alt` | Violet — gradient pair |
| Accent text | `#A5B4FC` | `--accent-text` | Heading gradient stops |
| Text primary | `#F8FAFC` | `--text-primary` | Body text |
| Text secondary | `rgba(255,255,255,0.70)` | `--text-secondary` | Subtitles, labels |
| Text tertiary | `rgba(255,255,255,0.40)` | `--text-tertiary` | Placeholders |
| Success | `#86EFAC` on `rgba(34,197,94,0.12)` | `--success-*` | Inline confirmations |
| Error | `rgba(239,68,68,0.70)` | `--error` | Validation borders |

**CTA gradient:** `linear-gradient(135deg, #6366F1, #8B5CF6)`
**Heading gradient:** `linear-gradient(135deg, #FFFFFF 30%, #A5B4FC)` (clip to text)
**Glow shadow:** `0 4px 15px rgba(99,102,241,0.40)` resting → `0 8px 30px rgba(99,102,241,0.60)` hover

---

## Typography

Keep the existing pairing — already loaded, already on-brand.

- **Headings:** Space Grotesk (600/700) — geometric, tech-confident
- **Body & UI:** Manrope (400/600/700) — humanist, readable at small sizes
- **Mono (if needed):** JetBrains Mono — for code/data displays only

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Manrope:wght@400;600;700&display=swap');
```

**Type scale:** 12 / 14 / 15 / 16 / 18 / 24 / 32 / 48
**Body line-height:** 1.5–1.6
**Heading line-height:** 1.1–1.2

---

## Spacing

4/8 px rhythm.

| Token | Value | Use |
|---|---|---|
| `--space-xs` | 4px | Inline icon gap |
| `--space-sm` | 8px | Tight component padding |
| `--space-md` | 16px | Default padding |
| `--space-lg` | 24px | Card padding |
| `--space-xl` | 32px | Section gaps |
| `--space-2xl` | 48px | Section margins |
| `--space-3xl` | 80px | Hero / Final CTA padding |

**Radius scale:** 8 / 10 / 12 / 16 / 20 px (modal: 20, button: 12, input: 10–12)

---

## Effects

- **Glass panels:** `background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10); backdrop-filter: blur(6px);`
- **Modal scrim:** `rgba(0,0,0,0.72)` + `backdrop-filter: blur(6px)`
- **Press feedback:** `transform: scale(0.97)` on `:active` (web equivalent of native haptic press)
- **Hover lift:** `translateY(-1px)` to `-2px` + glow shadow strengthen
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` for UI; `cubic-bezier(0.16, 1, 0.3, 1)` for entrance
- **Durations:** micro 150ms · standard 200–300ms · entrance 300–400ms · never >500ms
- **Ambient blobs:** subtle slow-oscillating gradient blurs in hero (respect `prefers-reduced-motion`)

---

## Components (verified against live site)

### Primary CTA Button

```css
.cta-button {
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  color: #FFF;
  padding: 14px 24px;
  border-radius: 12px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 16px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(99,102,241,0.40);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.cta-button:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(99,102,241,0.60); }
.cta-button:active { transform: scale(0.97); }
```

### Glass Input

```css
.input {
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.06);
  color: #F8FAFC;
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  transition: border-color 200ms, box-shadow 200ms, background 200ms;
}
.input::placeholder { color: rgba(255,255,255,0.40); }
.input:focus {
  border-color: rgba(154,107,255,0.80);
  box-shadow: 0 0 0 3px rgba(154,107,255,0.20);
  background: rgba(255,255,255,0.10);
  outline: none;
}
```

### Modal

```css
.modal-container {
  background: linear-gradient(145deg, #161622, #111118);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 20px;
  padding: 36px 32px 32px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.6), 0 0 80px rgba(99,102,241,0.15);
}
```

---

## Page Pattern

**B2B SaaS Conversion Funnel** (matches what's live, not the generic "Enterprise Gateway"):

1. Hero — bold gradient headline + email-capture CTA inline
2. Problem / Pain points
3. Solution overview (with product visuals)
4. Feature breakdown (the `support-*.svg` icons in repo)
5. Social proof / logos
6. Pricing or "Book a consult"
7. Final CTA section (large, with email capture)
8. Mobile sticky CTA (hides when final CTA is in view — already implemented)

**Primary CTA copy:** "Request a Free Consult"
**CTA pattern:** email field + button inline on desktop; stacked on mobile (≤768px)

---

## Anti-Patterns (Do NOT use)

- ❌ Emojis as icons — use SVG (Lucide / Heroicons / existing `support-*.svg`)
- ❌ Pure `#000000` backgrounds — use `#111118`/`#161622`
- ❌ Light-mode surfaces or navy/orange palette — off-brand
- ❌ Calistoga, Plus Jakarta, or any new font — keep Space Grotesk + Manrope
- ❌ Box-shadows without a glow tint — flat black shadows look generic on dark
- ❌ Layout-shifting hovers (animating width/height) — only `transform`/`opacity`
- ❌ Animations >500ms or auto-playing decorative motion without `prefers-reduced-motion` guard
- ❌ Placeholder-only labels in forms (existing modal already does this correctly — preserve)

---

## Pre-Delivery Checklist

- [ ] All colors come from CSS vars above (no inline hex except for one-offs)
- [ ] Space Grotesk for headings, Manrope for body — no font swaps
- [ ] Touch targets ≥ 44×44px on mobile
- [ ] Inputs have visible labels (not placeholder-only)
- [ ] Focus ring visible (the indigo glow ring) on every interactive
- [ ] `prefers-reduced-motion` respected (ambient blobs, modal entrance)
- [ ] Tested at 375 / 768 / 1024 / 1440 px
- [ ] No horizontal scroll on mobile
- [ ] Mobile sticky CTA hides when `.final-cta` is in viewport (already wired)
- [ ] Text contrast ≥ 4.5:1 — check `--text-secondary` on `--bg-raised` specifically
- [ ] Source-of-truth is the React app source repo, not this built artifact
