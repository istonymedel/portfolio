// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


const isProd = import.meta.env.PROD;

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://istonymedel.github.io',
  base: isProd ? 'portfolio' : '/',
});