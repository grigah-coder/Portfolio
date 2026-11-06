# Hamza Grigah — Portfolio

A dark, editorial portfolio built with React, TypeScript, Tailwind CSS and Framer Motion. The design is deliberately **Industrial**: warm-black surfaces, acid-lime signal color, mono typography, hairline rules, no shadows and no gradients.

## Run it

```bash
npm install
npm run dev
```

Build the production bundle:

```bash
npm run build
npm run preview
```

Type-check only:

```bash
npm run typecheck
```

Requires Node.js 20.19+ (Vite 8).

## Structure

```
.
├─ public/                 # CV, favicon, static files
├─ src/
│  ├─ components/          # Nav, Hero, Ticker, Work, About, Contact, Footer
│  ├─ data/                # site links + real project index
│  ├─ App.tsx
│  ├─ index.css            # Tailwind theme tokens + base styles
│  └─ main.tsx
├─ index.html
└─ vite.config.ts
```

## Design notes

- **Palette:** ink `#0B0C0A`, bone `#EDEDE6`, muted `#9A9C90`, acid `#C6FF4A`.
- **Type:** JetBrains Mono for display, IBM Plex Mono for body — both monospace, per the Industrial anchor.
- **Structure:** 1440px shell with 1px side rules, numbered sections, left-aligned editorial hierarchy, tabular numerals.
- **Signature interaction:** project rows invert to solid acid on hover/focus, with the title stepping right and the arrow lifting. Every interactive surface uses the same inversion motif.
- **Motion:** masked reveals and staggered rows via Framer Motion; all motion is disabled when `prefers-reduced-motion` is set.

## Content

Project entries in `src/data/projects.ts` describe six desktop and web projects. Burger and Calculatrice are included as live demos under `public/projects/`. The other projects link to their GitHub repositories. Contact links, the CV and the local Morocco clock are configured in `src/data/site.ts`.
