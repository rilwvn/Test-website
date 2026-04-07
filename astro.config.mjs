import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rilwvn.github.io',
  base: '/Test-website',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
