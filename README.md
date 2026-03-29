# iCMMS — AI-Native CMMS for Mission-Critical Data Centers

iCMMS is a modern, AI-native Computerized Maintenance Management System (CMMS) built specifically for mission-critical data centers. It captures structured, linked, evidence-backed operational data across work orders, digital MOPs, rounds, incidents, spares, and contracts — so AI agents can retain institutional knowledge, assist operators, expose blind spots at scale, and extend asset life.

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — fast dev server and build tool
- **React Router DOM** — clean client-side routing (`/platform`, `/theme`, etc.)
- **Tailwind CSS** — utility-first styling with custom brand tokens
- **Lucide React** — icon library
- **Inter** — primary font (Google Fonts)

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero with mock asset UI, legacy vs iCMMS comparison, 6 pillars, workflow map |
| `/platform` | Platform overview — assets, workflows, telemetry, spares, reporting, collaboration |
| `/ai-native` | AI-native design — intelligence layer, operator assistance, governance |
| `/use-cases` | Use cases by role — executives, operators, reliability, procurement, sustainability |
| `/security` | Security & governance — access control, version control, audit-ready reporting |
| `/sustainability` | Sustainability programs — asset lifecycle, waste reduction, evidence base |
| `/theme` | Brand Kit — visual reference for colors, typography, buttons, and components (not in navbar) |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   └── Layout.tsx              # Shared navbar + footer
├── hooks/
│   └── useScrollAnimation.ts   # Scroll-triggered fade-up animations
├── pages/
│   ├── Home.tsx
│   ├── Platform.tsx
│   ├── AINavtive.tsx
│   ├── UseCases.tsx
│   ├── Security.tsx
│   ├── Sustainability.tsx
│   └── Theme.tsx               # Brand Kit visual page
├── App.tsx                     # React Router routes
├── index.css                   # Tailwind + animation utilities
└── main.tsx
tailwind.config.js              # Brand color tokens
BRANDKIT.md                     # Design system source of truth
```

---

## Brand Kit

All design decisions — colors, typography, spacing, gradients, and components — are documented in [`BRANDKIT.md`](./BRANDKIT.md).

To change colors or fonts:
1. Edit the values in `BRANDKIT.md` (documentation)
2. Update `tailwind.config.js` → `theme.extend.colors.brand`
3. Update `.gradient-btn` / `.gradient-text` in `src/index.css`

You can also visually browse the brand kit at **`/theme`** in the running app.

---

## Key Features

- **Assets as system of record** — every asset holds a full operational history: work orders, incidents, rounds, telemetry, spares, and documents
- **Digital MOPs** — mobile procedure execution with Pilot/Co-pilot accountability, step evidence capture, and audit-ready reports
- **Telemetry & threshold automation** — signals generate work orders automatically; trends support drift detection
- **AI intelligence layer** — asset auto-enrichment, spare obsolescence watch, document Q&A (RAG), management bulletins, predictive signals
- **Operator assistance** — video-to-work-order via vision models, chat in work orders, instant notifications
- **Governance** — site-level RBAC, version-controlled documents, permission-aware AI outputs
- **Audit-ready reporting** — reports generated from structured execution data across all modules
- **Scroll animations** — fade-up transitions powered by IntersectionObserver via `useScrollAnimation` hook

---

## License

Private — all rights reserved. © 2026 iCMMS.
