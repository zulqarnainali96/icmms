# iCMMS Brand Kit

> **Source of truth** for all visual design decisions.
> Edit this file to update colors/fonts — then mirror changes in `tailwind.config.js`.

---

## Brand Identity

- **Product**: iCMMS — AI-native CMMS for mission-critical data centers
- **Tagline**: AI-native operations
- **Positioning**: Structured, evidence-backed operational data so AI agents can assist reliably

---

## Color Palette

All colors are available as Tailwind tokens via `tailwind.config.js → theme.extend.colors.brand`.

### Dark Backgrounds
| Token | Hex | Tailwind class | Usage |
|-------|-----|----------------|-------|
| Brand Dark | `#0A1628` | `bg-brand-dark` | Navbar, hero sections, footer |
| Brand Darker | `#0F1F3D` | `bg-brand-darker` | Dark cards, input fields on dark bg |

### Accent Colors
| Token | Hex | Tailwind class | Usage |
|-------|-----|----------------|-------|
| Brand Blue | `#4F87FF` | `text-brand-blue` / `bg-brand-blue` | Primary CTA, links, active nav, borders |
| Brand Purple | `#9F7AEA` | `text-brand-purple` | Secondary accent, gradient mid-stop |
| Brand Pink | `#F687B3` | `text-brand-pink` | Tertiary accent, gradient end, highlights |
| Brand Cyan | `#67E8F9` | `text-brand-cyan` | Data viz, IoT indicators |

### Light Surfaces
| Token | Hex | Tailwind class | Usage |
|-------|-----|----------------|-------|
| Brand Light | `#F0F4FF` | `bg-brand-light` | Alternating section backgrounds |
| White | `#FFFFFF` | `bg-white` | Primary page surface, card backgrounds |

### Text
| Name | Tailwind | Usage |
|------|----------|-------|
| Primary text | `text-gray-900` (`#111827`) | Headings, bold labels |
| Body text | `text-gray-600` (`#4B5563`) | Body copy, descriptions |
| Muted text | `text-gray-500` (`#6B7280`) | Secondary descriptions |
| Placeholder | `text-gray-400` (`#9CA3AF`) | Nav inactive, captions, placeholders |
| Dark surface text | `text-gray-300` / `text-white` | Text on dark backgrounds |

### Border
| Name | Tailwind | Usage |
|------|----------|-------|
| Default border | `border-gray-100` / `border-gray-200` | Card and section borders |
| Dark border | `border-white/10` | Borders on dark backgrounds |
| Accent border | `border-brand-blue/25` | Highlighted/active borders |

---

## Gradient

### Primary gradient (brand gradient — most important)
```
linear-gradient(135deg, #4F87FF 0%, #9F7AEA 50%, #F687B3 100%)
```
**CSS utility class**: `.gradient-btn`  
**Tailwind (inline)**: `from-[#4F87FF] via-[#9F7AEA] to-[#F687B3]`  
**Used on**: Primary CTA buttons, logo mark, active tab indicators

### Gradient text
```css
.gradient-text {
  background: linear-gradient(135deg, #4F87FF, #9F7AEA, #F687B3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Typography

### Font Family
- **Primary**: `Inter` (Google Fonts — loaded in `index.html`)
- **Fallback**: `ui-sans-serif, system-ui, sans-serif`

### Type Scale
| Role | Tailwind | Weight | Usage |
|------|----------|--------|-------|
| Display / H1 | `text-4xl` to `text-5xl` | `font-extrabold` (800) | Page hero headings |
| H2 Section | `text-3xl` | `font-bold` (700) | Section titles |
| H3 Card | `text-xl` / `text-lg` | `font-bold` (700) | Card headings |
| H4 Sub | `text-base` | `font-semibold` (600) | Sub-headings, feature titles |
| Body | `text-sm` | `font-normal` (400) | Body copy, descriptions |
| Caption | `text-xs` | `font-normal` (400) | Captions, metadata |
| Label / Overline | `text-xs` | `font-semibold` (600) | Breadcrumbs, category labels |
| Mono (code) | `font-mono text-xs` | — | Token names, code snippets |

---

## Components

### Buttons
```html
<!-- Primary: gradient fill -->
<button class="px-5 py-2.5 text-sm font-semibold text-white gradient-btn rounded-lg">
  Book a demo
</button>

<!-- Secondary: outlined blue -->
<button class="px-5 py-2.5 text-sm font-semibold text-brand-blue border border-brand-blue rounded-lg hover:bg-brand-blue/10">
  Explore modules
</button>

<!-- Ghost: dark surface -->
<button class="px-5 py-2.5 text-sm font-semibold text-gray-300 border border-white/20 rounded-lg hover:bg-white/10">
  See AI in action
</button>
```

### Badges / Pills
```html
<!-- Feature pill (light) -->
<span class="px-3 py-1 bg-brand-blue/10 border border-brand-blue/25 text-brand-blue text-xs font-medium rounded-full">
  ● Structural capture
</span>

<!-- Status: Healthy (green) -->
<span class="px-2 py-0.5 bg-green-500/15 text-green-400 text-xs rounded-full border border-green-500/20">
  ● Healthy
</span>

<!-- Status: Due (orange) -->
<span class="px-2 py-0.5 bg-orange-500/15 text-orange-400 text-xs rounded-full border border-orange-500/20">
  Due 3d
</span>
```

### Cards
```html
<!-- Light surface card -->
<div class="bg-brand-light rounded-2xl p-6 border border-gray-100 shadow-sm">...</div>

<!-- White surface card -->
<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">...</div>

<!-- Dark card -->
<div class="bg-brand-dark rounded-2xl p-6 border border-white/10">...</div>

<!-- Gradient dark card (flagship/CTA) -->
<div class="bg-gradient-to-br from-brand-dark to-brand-darker rounded-2xl p-8 text-white">...</div>
```

### Navigation
```html
<nav class="bg-brand-dark border-b border-white/5 sticky top-0 z-50 h-16">
  <!-- Logo: gradient-btn rounded-lg icon + "iCMMS" bold -->
  <!-- Nav links: text-gray-400 inactive, text-brand-blue active -->
  <!-- CTAs: outlined + gradient-btn -->
</nav>
```

---

## Spacing Conventions

| Element | Value |
|---------|-------|
| Section vertical padding | `py-16` (64px) |
| Section horizontal padding | `px-4 sm:px-6 lg:px-8` |
| Max content width | `max-w-7xl` |
| Card padding (small) | `p-5` |
| Card padding (default) | `p-6` / `p-7` |
| Card padding (large / CTA) | `p-8` / `p-10` |
| Card grid gap | `gap-5` or `gap-6` |
| List item spacing | `space-y-2.5` |
| Hero section padding | `pt-14 pb-16` |
| Navbar height | `h-16` |
| Footer padding | `py-12` |

---

## Border Radius
| Usage | Class |
|-------|-------|
| Pills / badges | `rounded-full` |
| Buttons | `rounded-lg` |
| Inner cards / sub-cards | `rounded-xl` |
| Main cards | `rounded-2xl` |
| Logo mark | `rounded-lg` |

---

## Shadows
| Usage | Class |
|-------|-------|
| Default card | `shadow-sm` |
| Hover state | `hover:shadow-md` |
| Hero mock UI | `shadow-2xl` |

---

## Animation

All scroll animations use the `.animate-on-scroll` + `.in-view` CSS utility with IntersectionObserver.

```css
/* Base state — before visible */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s ease-out, transform 0.65s ease-out;
}
/* Triggered when element enters viewport */
.animate-on-scroll.in-view {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger delays (add alongside animate-on-scroll) */
.animate-on-scroll-delay-1 { transition-delay: 0.1s; }
.animate-on-scroll-delay-2 { transition-delay: 0.2s; }
.animate-on-scroll-delay-3 { transition-delay: 0.3s; }
```

**Hook**: `useScrollAnimation()` from `src/hooks/useScrollAnimation.ts` — call once at top of each page component.

---

## Pages

| Route key | File | Description |
|-----------|------|-------------|
| `home` | `src/pages/Home.tsx` | Main landing — hero with mock UI, legacy comparison, 6 pillars, workflow map |
| `platform` | `src/pages/Platform.tsx` | Platform overview — assets, workflows, telemetry, spares, reporting |
| `ai-native` | `src/pages/AINavtive.tsx` | AI-native design — intelligence layer, governance, operator assistance |
| `use-cases` | `src/pages/UseCases.tsx` | Use cases by role — executives, operators, reliability, procurement |
| `security` | `src/pages/Security.tsx` | Access control, version control, audit-ready reporting |
| `sustainability` | `src/pages/Sustainability.tsx` | Sustainability programs, asset lifecycle, evidence base |
| `theme` | `src/pages/Theme.tsx` | This brand kit — visual reference for designers and developers |

---

## File Structure

```
src/
├── components/
│   └── Layout.tsx          — Navbar + footer (shared across all pages)
├── hooks/
│   └── useScrollAnimation.ts — Scroll-trigger animation hook
├── pages/
│   ├── Home.tsx
│   ├── Platform.tsx
│   ├── AINavtive.tsx
│   ├── UseCases.tsx
│   ├── Security.tsx
│   ├── Sustainability.tsx
│   └── Theme.tsx
├── App.tsx                 — Router (useState-based, no react-router)
├── index.css               — Tailwind + custom animation utilities
└── main.tsx
tailwind.config.js          — Brand color tokens
index.html                  — Inter font import
BRANDKIT.md                 — This file
```

---

## How to Change Colors

1. Update hex values in this file (documentation)
2. Update `tailwind.config.js` → `theme.extend.colors.brand`
3. Update `src/index.css` → `.gradient-btn` and `.gradient-text` background values
4. Rebuild with `npm run dev`

