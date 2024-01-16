import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: "https://datsfilipe.dev",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
    mdx({ extendMarkdownConfig: true }),
  ],
  markdown: {
    remarkPlugins: [
      remarkMath,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [
        rehypeAutolinkHeadings, {
          behavior: 'wrap',
          properties: {
            className: ['anchor']
          }
        }
      ]
    ],
    shikiConfig: {
      theme: 'min-dark',
      wrap: true,
    },
    gfm: true,
  },
  scopedStyleStrategy: "where",
});