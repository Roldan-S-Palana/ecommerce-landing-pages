import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html' // ensures SPA routing works
    }),
    paths: {
      base: '/ecommerce-landing-pages', // MUST match your repo name
    }
  }
};

export default config;
