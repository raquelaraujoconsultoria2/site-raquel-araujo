import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const internas = ['/marca', '/obrigado', '/404'];

export default defineConfig({
  site: 'https://raquelaraujoconsultoria.com.br',
  integrations: [
    sitemap({ filter: (page) => !internas.some((p) => new URL(page).pathname.startsWith(p)) }),
  ],
});
