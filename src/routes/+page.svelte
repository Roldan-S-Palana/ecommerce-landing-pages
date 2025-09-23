<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import TemplateArchive from '$lib/components/TemplateArchive.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
</script>

<!-- Enhanced background with theme-aware gradients -->
<div class="relative overflow-hidden bg-theme-primary">
  <div class="absolute inset-0 -z-10">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950"></div>
    <div class="aurora left-[-15%] top-[-10%]"></div>
    <div class="aurora delay-700 right-[-20%] bottom-[-10%]"></div>
  </div>

  <!-- Hero Section -->
  <section class="max-w-7xl mx-auto px-4 pt-12 pb-8">
    <Hero
      title="Free Landing Page Templates"
      subtitle="High-quality SvelteKit + Tailwind templates ready to download and customize"
      buttonText="Browse Templates"
    />

    <!-- Action buttons with enhanced styling -->
    <div class="mt-12 flex flex-wrap items-center justify-center gap-4">
      <a href="#templates" class="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-xl shadow-theme font-semibold text-lg">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/>
        </svg>
        Download Free Templates
      </a>
      <a href="/landing-pages/landing1" class="btn-secondary inline-flex items-center gap-3 px-8 py-4 rounded-xl shadow-theme font-semibold text-lg">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
        Preview Templates
      </a>
    </div>
  </section>

  <!-- Decorative gradient line -->
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="mx-auto h-1 w-64 rounded-full animate-gradient-x gradient-theme"></div>
  </div>

  <!-- Feature highlights with enhanced cards -->
  <section class="max-w-7xl mx-auto px-4 py-20">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-theme-primary mb-4">Why Choose Our Templates?</h2>
      <p class="text-xl text-theme-muted max-w-2xl mx-auto">Built with modern technologies and best practices for maximum performance and conversion.</p>
    </div>
    
    <div class="grid gap-8 md:grid-cols-3">
      <div class="theme-card rounded-2xl p-8 text-center group">
        <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
          <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-theme-primary mb-4">Blazing Fast</h3>
        <p class="text-theme-muted text-lg leading-relaxed">Built with SvelteKit and Vite for instant dev feedback and optimized production builds that load in milliseconds.</p>
      </div>

      <div class="theme-card rounded-2xl p-8 text-center group">
        <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
          <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="7" y="2" rx="2" ry="2" width="10" height="20"/>
            <path d="M11 18h2"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-theme-primary mb-4">Responsive by Default</h3>
        <p class="text-theme-muted text-lg leading-relaxed">Every section scales beautifully across phones, tablets and desktops with pixel-perfect precision.</p>
      </div>

      <div class="theme-card rounded-2xl p-8 text-center group">
        <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
          <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="7"/>
            <path d="M21 21l-4.3-4.3"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-theme-primary mb-4">SEO‑Friendly</h3>
        <p class="text-theme-muted text-lg leading-relaxed">Clean markup and meta tags help your pages rank higher and get discovered by your target audience.</p>
      </div>
    </div>
  </section>

  <!-- Template Archive Section -->
  <section class="max-w-7xl mx-auto px-4 py-20">
    <TemplateArchive />
  </section>

  <!-- Testimonials Section -->
  <section class="max-w-7xl mx-auto px-4 py-20">
    <Testimonials />
  </section>

  <!-- Enhanced Final CTA -->
  <section class="mx-auto max-w-6xl px-4 py-20">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 p-[2px] shadow-theme">
      <div class="rounded-3xl bg-theme-card p-12 text-center relative">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl"></div>
        <div class="relative z-10">
          <h3 class="text-4xl font-bold text-theme-primary mb-4">Ready to Build Your Next Landing Page?</h3>
          <p class="text-xl text-theme-muted mb-8 max-w-2xl mx-auto">Download free templates, customize them to match your brand, and start converting visitors into customers.</p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="#templates" class="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-xl shadow-theme font-semibold text-lg">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Templates
            </a>
            <a href="/landing-pages/landing1" class="theme-toggle inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              Preview Templates
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
