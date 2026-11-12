import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://hierbasyraices.com',
  integrations: [],
  redirects: {
    // <-- NUEVO: redirección 301 para consolidar duplicados de manzanilla
    '/blog/manzanilla-propiedades-usos-tradicionales': '/blog/manzanilla-historia-usos-tradicionales',
  },
});