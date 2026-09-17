# KORIS ENERGY — Mockup

Fictional single-page marketing website for **KORIS ENERGY**, a fictional
offshore, subsea, pipeline and IRM services company positioned in the
Gulf of Guinea.

> This is a demonstration mockup. Company name, projects, figures, references,
> testimonials and contact details are illustrative and fictional. No real
> services are provided.

## Stack

- Vite 8 + React 19 + TypeScript
- Lenis (smooth scroll) + GSAP + ScrollTrigger
- IBM Plex Sans / Plex Mono (Google Fonts)
- No backend — contact form is client-side only

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## Deployment

Every push to `main` triggers the workflow at
`.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages.

The base path is set in `vite.config.ts` to match the repository name
(`/koris-energy-demo/`).

## Structure

- `src/App.tsx` — page composition + Lenis / ScrollTrigger wiring
- `src/layout/` — Header (with mobile menu) + Footer
- `src/sections/` — 11 sections (Hero → Capabilities → Solutions →
  Standards → Projects → Key figures → Process → About → Testimonials →
  CTA → Contact)
- `src/data/` — all fictional content used by the sections
- `src/components/` — Logo + shared components
