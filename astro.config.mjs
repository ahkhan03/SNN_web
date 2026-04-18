// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://snn.ahkhan.me',
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      // Light/dark dual themes — Shiki injects CSS vars so the page can
      // pick. We're committing to a single dark code theme for consistency.
      theme: 'github-dark-dimmed',
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
