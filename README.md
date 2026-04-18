# SNN_web

Companion website for [`snn_opt`](https://github.com/ahkhan03/SNN_opt) — a
gentler entry point into the spiking-neural-network → convex-optimization
equivalence, aimed at students, curious researchers, and people not from a
neuromorphic background.

The companion repository ([`SNN_opt`](https://github.com/ahkhan03/SNN_opt))
remains the canonical record (code, math, figures, benchmarks). This site
is the *friendly* presentation of that material.

## Stack

- [Astro](https://astro.build) — static site generator, zero JS by default.
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling via the
  official `@tailwindcss/vite` plugin.
- [MDX](https://mdxjs.com) — Markdown with components, used for tutorial
  pages.
- [KaTeX](https://katex.org) — fast math typesetting, wired through
  `remark-math` + `rehype-katex`.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site locally
```

## Deployment

Designed for [Cloudflare Pages](https://pages.cloudflare.com): static
output, no edge functions, no SSR. Build command `npm run build`,
output directory `dist/`. The site is reachable (after CF setup) at
[https://snn.ahkhan.me](https://snn.ahkhan.me).

## Structure

```
src/
├── components/   # Reusable Astro components
├── content/      # MDX content collections (tutorials, posts)
├── layouts/      # Page layouts (Base.astro and friends)
├── pages/        # File-based routes
└── styles/       # global.css (Tailwind + KaTeX + design-system vars)
public/
└── figures/      # Static images, including those mirrored from snn_opt
```

## Companion repository

Code, math, benchmarks, and the academic-style README live in
[`SNN_opt`](https://github.com/ahkhan03/SNN_opt). When updating shared
figures, mirror them from `SNN_opt/figures/` to
`SNN_web/public/figures/` (a `make sync-figures` target may be added
once the layout settles).
