import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      fallback: 'index.html' // needed for SPA routing
    }),
    paths: {
      // Replace 'your-repo-name' with your GitHub repo
      base: dev ? '' : '/ecommerce-landing-pages'
    }
  }
};

export default config;
