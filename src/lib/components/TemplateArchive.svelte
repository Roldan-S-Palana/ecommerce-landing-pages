<script lang="ts">
  import { products, type Product } from '$lib/data/products';

  // Extended product interface with download and support info
  interface TemplateProduct extends Product {
    downloadUrl: string;
    previewUrl: string;
    supportOptions: {
      patreon?: string;
      gcash?: string;
    };
  }

  // Mock extended products data (in real app, this would come from API)
  const templateProducts: TemplateProduct[] = products.map(product => ({
    ...product,
    downloadUrl: `/${product.slug}-source.zip`,
    previewUrl: `/landing-pages/${product.slug}`,
    supportOptions: {
      patreon: 'https://patreon.com/yourusername',
      gcash: 'gcash://pay?amount=50&message=Support%20for%20template%20development'
    }
  }));

  // Download template function that works in both dev and production
  function downloadTemplate(template: TemplateProduct) {
    console.log('Starting download for template:', template.slug);

    // Show loading message
    const loadingMsg = '🚀 Downloading ' + template.slug + ' template...\n\n📁 This will download the complete template ZIP file to your computer.';
    alert(loadingMsg);

    // Create download link to the ZIP file
    const link = document.createElement('a');
    link.href = template.downloadUrl;
    link.download = `${template.slug}-source.zip`;
    link.style.display = 'none';

    // Add to DOM and click
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);

    // Show success message
    const successMsg = '✅ SUCCESS: ' + template.slug + ' template downloaded!\n\n📂 File saved to your downloads folder:\n• ' + template.slug + '-source.zip\n\n🎯 Next steps:\n1. Extract the ZIP file\n2. Open index.html in your browser\n3. Customize as needed!';
    alert(successMsg);
    console.log('Template downloaded successfully:', template.slug);
  }

</script>

<!-- Modern Template Archive with Glassmorphism & Microinteractions -->
<div id="templates" class="relative py-24 px-4 overflow-hidden bg-theme-primary">
  <!-- Background Effects -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-slate-900/50 dark:via-slate-800 dark:to-indigo-950/50"></div>
    <!-- Subtle animated background elements -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-200/20 to-blue-200/20 dark:from-emerald-800/20 dark:to-blue-800/20 rounded-full blur-xl animate-pulse delay-1000"></div>
  </div>

  <!-- Hero Section for Templates -->
  <div class="text-center mb-20">
    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20 dark:border-white/10">
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      Free & Open Source
    </div>

    <h2 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent mb-6 leading-tight">
      Template Archive
    </h2>

    <p class="text-xl text-theme-muted max-w-3xl mx-auto leading-relaxed mb-8">
      Discover beautifully crafted landing page templates built with modern web technologies.
      Download completely free and customize to match your brand vision.
    </p>

    <!-- Usage Instructions -->
    <div class="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm text-center">
      <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/20 dark:bg-blue-400/20 mb-4">
        <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <path d="M12 17h.01"/>
        </svg>
      </div>
      <h3 class="text-lg font-bold text-theme-primary mb-4">How to Use Downloaded Templates</h3>
      <div class="text-theme-secondary space-y-2 text-sm">
        <p><strong>For Local Development:</strong> Extract the ZIP file and run <code class="bg-theme-primary/20 px-2 py-1 rounded text-xs">npm install && npm run dev</code></p>
        <p><strong>For Production:</strong> Use <code class="bg-theme-primary/20 px-2 py-1 rounded text-xs">npm run build</code> then deploy the <code class="bg-theme-primary/20 px-2 py-1 rounded text-xs">dist/</code> folder</p>
        <p><strong>Static Version:</strong> Open <code class="bg-theme-primary/20 px-2 py-1 rounded text-xs">index.html</code> directly in your browser</p>
        <p class="text-xs text-theme-muted mt-3">📁 Each download includes source code, assets, and setup instructions</p>
      </div>
    </div>
    <!-- Stats Cards -->
    <div class="flex flex-wrap justify-center gap-6 mb-12">
      <div class="px-6 py-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">{templateProducts.length}</div>
        <div class="text-sm text-theme-muted">Templates</div>
      </div>
      <div class="px-6 py-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Free</div>
        <div class="text-sm text-theme-muted">Forever</div>
      </div>
      <div class="px-6 py-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">Svelte</div>
        <div class="text-sm text-theme-muted">Powered</div>
      </div>
    </div>
  </div>

  <!-- Template Grid with Modern Card Design -->
  <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
    {#each templateProducts as template, index}
      <div class="group relative">
        <!-- Card with Glassmorphism Effect -->
        <div class="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
          <!-- Gradient Border Effect -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <!-- Mini Preview with Enhanced Design -->
          <div class="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50">
            <!-- Animated Background Pattern -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>

            <!-- Content -->
            <div class="relative h-full flex items-center justify-center p-6">
              <div class="text-center">
                <!-- Icon with Glow Effect -->
                <div class="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  <!-- Glow effect -->
                  <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </div>

                <h3 class="text-xl font-bold text-theme-primary mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{template.name}</h3>
                <p class="text-sm text-theme-muted leading-relaxed">{template.description}</p>
              </div>
            </div>

            <!-- Preview Overlay with Smooth Animation -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <a
                href="{template.previewUrl}"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-theme-primary font-semibold hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg"
                aria-label="Preview {template.name}"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                Live Preview
              </a>
            </div>
          </div>

          <!-- Content Section with Modern Spacing -->
          <div class="p-8">
            <!-- Download Button with Enhanced Design -->
            <div class="mb-6 space-y-3">
              <div class="text-center">
                <button
                  on:click={() => downloadTemplate(template)}
                  class="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group/btn"
                >
                  <svg class="w-5 h-5 group-hover/btn:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/>
                  </svg>
                  Download Template
                </button>
              </div>

              <div class="text-center">
                <p class="text-xs text-theme-muted mb-2">💡 Complete template ZIP with source code</p>
                <a
                  href="/templates/{template.slug}/README.md"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-theme-secondary hover:bg-theme-tertiary text-theme-secondary hover:text-theme-primary text-xs font-medium transition-all duration-200"
                  target="_blank"
                >
                  <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                  </svg>
                  Setup Guide
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Floating Badge for New/Popular -->
        {#if index === 0}
          <div class="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs font-bold shadow-lg animate-pulse">
            Popular
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Support CTA Section -->
  <div class="mt-24 max-w-6xl mx-auto">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-500 dark:via-purple-500 dark:to-emerald-500 p-[2px] shadow-2xl">
      <div class="rounded-3xl bg-theme-primary/95 backdrop-blur-xl p-12 text-center relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.2)_1px,transparent_0)] bg-[length:24px_24px]"></div>
        </div>

        <div class="relative z-10">
          <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/50 dark:to-blue-900/50 text-emerald-700 dark:text-emerald-300 mb-6">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span class="font-semibold">Community Driven</span>
          </div>

          <h3 class="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
            Love These Templates?
          </h3>

          <p class="text-lg text-theme-secondary mb-8 max-w-2xl mx-auto">
            Support ongoing development and help create more amazing templates for the community.
            Your contribution makes a real difference!
          </p>

          <div class="flex flex-wrap justify-center gap-4">
            <a
              href="https://patreon.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-1.4 0-2.72-.4-3.85-1.11L7.5 20.01c-.36.21-.82.09-1.03-.27-.21-.36-.09-.82.27-1.03l3.46-2.01c-1.65-1.63-2.64-3.89-2.64-6.39 0-3.96 3.22-7.18 7.18-7.18z"/>
              </svg>
              Become a Patron
            </a>

            <a
              href="gcash://pay?amount=100&message=Support%20for%20OpenTemplates"
              class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
              Support via GCash
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>