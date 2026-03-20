# Projscope Website — Claude Context

## Project Overview
**Projscope** — IT consulting and software development company website. Showcases services, case studies, project demos, and a booking calendar.

## Tech Stack
- **React 18** + **TypeScript** + **Vite** (port 3000)
- **React Router DOM v6** for routing
- **@calcom/embed-react** for booking calendar
- Custom CSS with CSS variables (no Tailwind) — charcoal (`#1a1a2e`) + teal (`#0d9488`) brand colors
- Fonts: Inter (sans-serif), JetBrains Mono (monospace)
- Light/dark theme via CSS custom properties + `useTheme` hook
- Deployed on Netlify (`public/_redirects`)

## Key Routes
- `/` — HomePage (Hero, Services, LinkedIn Feed, Process, TechStack, Contact)
- `/project/music-player` — MusicPlayerPage
- `/project/masonry` — MasonryPage
- `/case-study/programmable-hardware` — HardwarePage

## Source Structure
```
src/
  components/
    case-study/   # Case study layout
    home/         # Hero, Services, LinkedInFeed, Process, TechStack, Contact
    layout/       # Header, Footer
    ui/           # Reusable UI components
  pages/          # HomePage, MusicPlayerPage, MasonryPage, HardwarePage
  hooks/          # useCounter, useHeaderScroll, useScrollAnimation, useTheme
  data/           # TypeScript data files (services, etc.)
  styles.css      # Main stylesheet
  case-study.css  # Case study styles
  App.tsx         # Routes
  main.tsx        # Entry point
```

## Business Info
- Phone: +1 204-797-1681
- Email: support@projscope.com
- Stats: 150+ projects, 15+ years experience, 98% client satisfaction, 40+ clients

---

## Rules

### Color Schemes — Always update both
The project has **two color schemes: light and dark**. Every styling change must be applied to both.
- Check for both the default (light) CSS variables and dark theme overrides (`[data-theme="dark"]`, `.dark`, or `@media (prefers-color-scheme: dark)`)
- When adding or changing colors, backgrounds, borders, shadows, or any visual property — update **both** sections

### Mobile Compatibility — Required for all changes
Every change must work correctly on mobile viewports.
- Use responsive CSS (`@media` queries, flexible units, `clamp()`, `min()`, `max()`)
- Layouts must reflow gracefully — no horizontal overflow, no fixed widths that break small screens
- Touch targets must be adequately sized
- Test mentally at common breakpoints: 375px (mobile), 768px (tablet), 1024px+ (desktop)
