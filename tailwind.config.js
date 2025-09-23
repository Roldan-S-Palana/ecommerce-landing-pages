/** @type {import('tailwindcss').Config} */
export default {
  // Enable both strategies so "dark:" works when:
  // - html has .dark class, OR
  // - html has [data-theme="dark"] attribute
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
}