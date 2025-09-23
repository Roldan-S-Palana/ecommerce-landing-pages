<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Pricing from '$lib/components/Pricing.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
</script>

<!-- Background gradient wrapper -->
<div class="relative">
  <div class="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 to-white"></div>

  <!-- Hero -->
  <section class="max-w-7xl mx-auto px-4 pt-8">
    <Hero
      title="Launch high‑converting landing pages"
      subtitle="SvelteKit + Tailwind templates ready to customize and sell"
      buttonText="Browse the Shop"
    />
    <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
      <a href="/shop" class="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M16 11V7a4 4 0 10-8 0v4M5 11h14l-1 9a2 2 0 01-2 2H8a2 2 0 01-2-2l-1-9z"/>
        </svg>
        Shop templates
      </a>
      <a href="/downloads" class="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg shadow hover:bg-slate-800">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/>
        </svg>
        Downloads
      </a>
    </div>
  </section>

  <!-- Feature highlights -->
  <section class="max-w-7xl mx-auto px-4 py-16">
    <div class="grid gap-6 md:grid-cols-3">
      <div class="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
        <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <h3 class="text-lg font-semibold">Blazing fast</h3>
        <p class="mt-2 text-gray-600">Built with SvelteKit and Vite for instant dev feedback and optimized production builds.</p>
      </div>

      <div class="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
        <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="7" y="2" rx="2" ry="2" width="10" height="20"/>
            <path d="M11 18h2"/>
          </svg>
        </div>
        <h3 class="text-lg font-semibold">Responsive by default</h3>
        <p class="mt-2 text-gray-600">Every section scales beautifully across phones, tablets and desktops.</p>
      </div>

      <div class="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
        <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7"/>
            <path d="M21 21l-4.3-4.3"/>
          </svg>
        </div>
        <h3 class="text-lg font-semibold">SEO‑friendly</h3>
        <p class="mt-2 text-gray-600">Clean markup and meta tags help your pages rank and get discovered.</p>
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section class="max-w-7xl mx-auto px-4">
    <Pricing />
  </section>

  <!-- Testimonials -->
  <section class="max-w-7xl mx-auto px-4">
    <Testimonials />
  </section>

  <!-- Final CTA -->
  <section class="mx-auto max-w-6xl px-4 py-16">
    <div class="rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 p-[1px] shadow-lg">
      <div class="rounded-2xl bg-white p-10 text-center">
        <h3 class="text-2xl font-bold">Ready to ship your next product?</h3>
        <p class="mt-2 text-gray-600">Pick a template, customize, and start selling in minutes.</p>
        <div class="mt-6">
          <a href="/shop" class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M16 11V7a4 4 0 10-8 0v4M5 11h14l-1 9a2 2 0 01-2 2H8a2 2 0 01-2-2l-1-9z"/>
            </svg>
            Get started
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
