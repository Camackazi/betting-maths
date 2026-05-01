import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://betting-maths.vercel.app',
  integrations: [sitemap()]
});
