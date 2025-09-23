<script lang="ts">
  import { onMount } from 'svelte';

  let email = '';
  let isSubscribed = false;

  function handleSubscribe() {
    if (email) {
      isSubscribed = true;
      // Handle subscription logic here
    }
  }

  // Stats for the template
  const stats = [
    { number: '10K+', label: 'Happy Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  // Features for the template
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Built with modern technologies for instant loading and smooth performance.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Stunning visuals that captivate your audience and boost conversions.'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Responsive design that looks perfect on all devices and screen sizes.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.'
    }
  ];
</script>

<!-- Modern Landing Page Template 1 with Glassmorphism & Advanced Motifs -->
<div class="relative overflow-hidden bg-theme-primary">
  <!-- Animated Background Elements -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-slate-900/50 dark:via-slate-800 dark:to-indigo-950/50"></div>

    <!-- Floating animated orbs -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-purple-200/30 dark:from-blue-800/30 dark:to-purple-800/30 rounded-full blur-xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-200/30 to-blue-200/30 dark:from-emerald-800/30 dark:to-blue-800/30 rounded-full blur-xl animate-pulse delay-1000"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-pink-200/20 to-rose-200/20 dark:from-pink-800/20 dark:to-rose-800/20 rounded-full blur-lg animate-pulse delay-500"></div>
  </div>

  <!-- Hero Section with Modern Design -->
  <section class="relative pt-20 pb-16 px-4">
    <div class="max-w-7xl mx-auto text-center">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm border border-white/20 dark:border-white/10">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
        Next-Gen Solution
      </div>

      <!-- Main Heading with Gradient Text -->
      <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent mb-6 leading-tight">
        Amazing Product
      </h1>

      <p class="text-xl md:text-2xl text-theme-muted max-w-3xl mx-auto mb-12 leading-relaxed">
        Discover the best solution that transforms how you work. Built with cutting-edge technology for unparalleled performance and user experience.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <button class="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
          <svg class="w-5 h-5 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          Get Started Free
        </button>

        <button class="group px-8 py-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/20 dark:border-white/10 text-theme-primary font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
          <svg class="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10,8 16,12 10,16 10,8"/>
          </svg>
          Watch Demo
        </button>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {#each stats as stat}
          <div class="px-6 py-8 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
              {stat.number}
            </div>
            <div class="text-theme-muted font-medium">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Features Section with Card Grid -->
  <section class="py-24 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
          Why Choose Our Solution?
        </h2>
        <p class="text-xl text-theme-muted max-w-2xl mx-auto">
          Experience the difference with features designed for modern businesses and forward-thinking teams.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {#each features as feature, index}
          <div class="group relative">
            <!-- Card with Glassmorphism -->
            <div class="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 p-8 text-center">
              <!-- Gradient Border Effect -->
              <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div class="relative z-10">
                <!-- Icon with Glow Effect -->
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 class="text-xl font-bold text-theme-primary mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>

                <p class="text-theme-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Split Section with Image and Content -->
  <section class="py-24 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content Side -->
        <div class="order-2 lg:order-1">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/50 dark:to-blue-900/50 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 12l2 2 4-4"/>
              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
            </svg>
            Trusted by Teams
          </div>

          <h2 class="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
            Built for Modern Teams
          </h2>

          <p class="text-lg text-theme-muted mb-8 leading-relaxed">
            Our platform adapts to your workflow, not the other way around. Experience seamless collaboration with tools designed for the way you actually work.
          </p>

          <div class="space-y-4 mb-8">
            <div class="flex items-center gap-4">
              <div class="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">✓</div>
              <span class="text-theme-secondary">Real-time collaboration</span>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">✓</div>
              <span class="text-theme-secondary">Advanced analytics dashboard</span>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">✓</div>
              <span class="text-theme-secondary">Enterprise-grade security</span>
            </div>
          </div>

          <button class="group px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"/>
              <path d="M12 5v14"/>
            </svg>
            Learn More
          </button>
        </div>

        <!-- Visual Side -->
        <div class="order-1 lg:order-2">
          <div class="relative">
            <!-- Mock Dashboard Preview -->
            <div class="rounded-3xl bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-slate-800/80 dark:to-blue-950/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl p-8">
              <!-- Header -->
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <div class="h-4 bg-theme-muted rounded w-24"></div>
                </div>
                <div class="flex gap-2">
                  <div class="w-6 h-6 rounded bg-theme-muted"></div>
                  <div class="w-6 h-6 rounded bg-theme-muted"></div>
                </div>
              </div>

              <!-- Charts -->
              <div class="space-y-4">
                <div class="h-32 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-2xl flex items-end justify-around p-4">
                  <div class="w-6 bg-white/60 rounded-t" style="height: 40%"></div>
                  <div class="w-6 bg-white/60 rounded-t" style="height: 70%"></div>
                  <div class="w-6 bg-white/60 rounded-t" style="height: 55%"></div>
                  <div class="w-6 bg-white/60 rounded-t" style="height: 85%"></div>
                  <div class="w-6 bg-white/60 rounded-t" style="height: 60%"></div>
                </div>

                <div class="grid grid-cols-3 gap-4">
                  <div class="p-4 rounded-2xl bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm">
                    <div class="h-3 bg-theme-muted rounded w-12 mb-2"></div>
                    <div class="h-6 bg-gradient-to-r from-emerald-400 to-blue-400 rounded w-8"></div>
                  </div>
                  <div class="p-4 rounded-2xl bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm">
                    <div class="h-3 bg-theme-muted rounded w-12 mb-2"></div>
                    <div class="h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded w-8"></div>
                  </div>
                  <div class="p-4 rounded-2xl bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm">
                    <div class="h-3 bg-theme-muted rounded w-12 mb-2"></div>
                    <div class="h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded w-8"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-2xl shadow-lg animate-pulse"></div>
            <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl shadow-lg animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="py-24 px-4 bg-theme-secondary">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
          Loved by Teams Worldwide
        </h2>
        <p class="text-xl text-theme-muted max-w-2xl mx-auto">
          See what our customers say about transforming their workflow.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <div class="p-8 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div class="flex items-center gap-1 mb-4">
            {#each Array(5) as _}
              <svg class="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            {/each}
          </div>
          <p class="text-theme-secondary text-lg mb-6 italic">
            "This product completely transformed how our team collaborates. The interface is intuitive and the features are exactly what we needed."
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
              SJ
            </div>
            <div>
              <div class="font-bold text-theme-primary">Sarah Johnson</div>
              <div class="text-theme-muted">Product Manager, TechCorp</div>
            </div>
          </div>
        </div>

        <div class="p-8 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div class="flex items-center gap-1 mb-4">
            {#each Array(5) as _}
              <svg class="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            {/each}
          </div>
          <p class="text-theme-secondary text-lg mb-6 italic">
            "The analytics dashboard gives us insights we never had before. Our productivity increased by 40% in the first month."
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 flex items-center justify-center text-white font-bold">
              MC
            </div>
            <div>
              <div class="font-bold text-theme-primary">Mike Chen</div>
              <div class="text-theme-muted">CTO, StartupXYZ</div>
            </div>
          </div>
        </div>

        <div class="p-8 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div class="flex items-center gap-1 mb-4">
            {#each Array(5) as _}
              <svg class="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            {/each}
          </div>
          <p class="text-theme-secondary text-lg mb-6 italic">
            "Outstanding customer support and regular updates. This is exactly what enterprise software should be like."
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
              AR
            </div>
            <div>
              <div class="font-bold text-theme-primary">Anna Rodriguez</div>
              <div class="text-theme-muted">Operations Director, Enterprise Inc</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA Section -->
  <section class="py-24 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 p-[2px] shadow-2xl">
        <div class="rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-12 relative">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-5">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.2)_1px,transparent_0)] bg-[length:24px_24px]"></div>
          </div>

          <div class="relative z-10">
            <h2 class="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
              Ready to Get Started?
            </h2>

            <p class="text-xl text-theme-muted mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using our platform to streamline their workflow and boost productivity.
            </p>

            <!-- Newsletter Signup -->
            <div class="max-w-md mx-auto mb-8">
              {#if !isSubscribed}
                <div class="flex gap-3">
                  <input
                    bind:value={email}
                    type="email"
                    placeholder="Enter your email"
                    class="flex-1 px-4 py-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/20 dark:border-white/10 text-theme-primary placeholder-theme-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    on:click={handleSubscribe}
                    class="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Subscribe
                  </button>
                </div>
              {:else}
                <div class="px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/50 dark:to-blue-900/50 text-emerald-700 dark:text-emerald-300 font-semibold">
                  ✅ Thanks for subscribing! Check your email for next steps.
                </div>
              {/if}
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                <svg class="w-5 h-5 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                Start Free Trial
              </button>

              <button class="group px-8 py-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/20 dark:border-white/10 text-theme-primary font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10,8 16,12 10,16 10,8"/>
                </svg>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>