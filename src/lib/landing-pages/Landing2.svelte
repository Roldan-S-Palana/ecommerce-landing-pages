<script lang="ts">
  import { onMount } from 'svelte';

  let currentStep = 0;
  let email = '';
  let isSubscribed = false;

  function handleSubscribe() {
    if (email) {
      isSubscribed = true;
      // Handle subscription logic here
    }
  }

  // Process steps for interactive demo
  const processSteps = [
    {
      title: 'Connect',
      description: 'Seamlessly integrate with your existing tools and workflows.',
      icon: '🔗'
    },
    {
      title: 'Automate',
      description: 'Set up intelligent automation to streamline repetitive tasks.',
      icon: '⚡'
    },
    {
      title: 'Optimize',
      description: 'Get real-time insights and optimize your processes for maximum efficiency.',
      icon: '📊'
    }
  ];

  // Key benefits
  const benefits = [
    {
      icon: '🎯',
      title: 'Precision Targeting',
      description: 'Reach the right audience with advanced segmentation and AI-powered recommendations.'
    },
    {
      icon: '📈',
      title: 'Growth Analytics',
      description: 'Track performance metrics and ROI with comprehensive analytics dashboard.'
    },
    {
      icon: '🤝',
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration tools and shared workspaces.'
    },
    {
      icon: '🔐',
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications.'
    }
  ];

  // Interactive demo function
  function nextStep() {
    currentStep = (currentStep + 1) % processSteps.length;
  }

  function prevStep() {
    currentStep = currentStep === 0 ? processSteps.length - 1 : currentStep - 1;
  }
</script>

<!-- Modern Landing Page Template 2 with Interactive Elements & Bold Design -->
<div class="relative overflow-hidden bg-theme-primary">
  <!-- Dynamic Background with Geometric Patterns -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 dark:from-slate-900/50 dark:via-slate-800 dark:to-teal-950/50"></div>

    <!-- Animated geometric shapes -->
    <div class="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 dark:from-emerald-800/20 dark:to-teal-800/20 rounded-full blur-xl animate-pulse"></div>
    <div class="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 dark:from-teal-800/20 dark:to-cyan-800/20 rounded-full blur-xl animate-pulse delay-700"></div>
    <div class="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 dark:from-cyan-800/20 dark:to-blue-800/20 rounded-full blur-lg animate-pulse delay-1000"></div>

    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
      <div class="absolute inset-0 bg-[linear-gradient(45deg,#000_1px,transparent_1px),linear-gradient(-45deg,#000_1px,transparent_1px)] bg-[length:40px_40px]"></div>
    </div>
  </div>

  <!-- Hero Section with Bold Typography -->
  <section class="relative pt-24 pb-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content Side -->
        <div>
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-8 backdrop-blur-sm border border-white/20 dark:border-white/10">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            Next-Generation Platform
          </div>

          <!-- Main Heading -->
          <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
            Innovative Solution
          </h1>

          <p class="text-xl md:text-2xl text-theme-muted mb-8 leading-relaxed">
            Transform your business with cutting-edge technology that adapts to your needs. Experience the future of digital transformation today.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <button class="group px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <svg class="w-5 h-5 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Start Free Trial
            </button>

            <button class="group px-8 py-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/20 dark:border-white/10 text-theme-primary font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10,8 16,12 10,16 10,8"/>
              </svg>
              Watch Demo
            </button>
          </div>

          <!-- Trust indicators -->
          <div class="flex flex-wrap items-center gap-8 text-sm text-theme-muted">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
              <span>No credit card required</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span>14-day free trial</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>10,000+ users</span>
            </div>
          </div>
        </div>

        <!-- Visual Side with Interactive Demo -->
        <div class="relative">
          <!-- Interactive Process Demo -->
          <div class="rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl p-8">
            <!-- Process Steps -->
            <div class="flex justify-between mb-8">
              {#each processSteps as step, index}
                <button
                  on:click={() => currentStep = index}
                  class="flex-1 text-center p-4 rounded-2xl transition-all duration-300 {currentStep === index ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' : 'hover:bg-white/50 dark:hover:bg-slate-700/50'}"
                >
                  <div class="text-2xl mb-2">{step.icon}</div>
                  <div class="text-sm font-semibold">{step.title}</div>
                </button>
              {/each}
            </div>

            <!-- Current Step Content -->
            <div class="text-center mb-8">
              <div class="text-4xl mb-4">{processSteps[currentStep].icon}</div>
              <h3 class="text-2xl font-bold text-theme-primary mb-4">{processSteps[currentStep].title}</h3>
              <p class="text-theme-muted">{processSteps[currentStep].description}</p>
            </div>

            <!-- Progress Bar -->
            <div class="w-full bg-theme-secondary rounded-full h-2 mb-6">
              <div
                class="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                style="width: {((currentStep + 1) / processSteps.length) * 100}%"
              ></div>
            </div>

            <!-- Navigation -->
            <div class="flex justify-between">
              <button
                on:click={prevStep}
                class="px-6 py-3 rounded-2xl bg-white/60 dark:bg-slate-700/60 hover:bg-white dark:hover:bg-slate-700 transition-colors"
              >
                Previous
              </button>
              <button
                on:click={nextStep}
                class="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold"
              >
                Next
              </button>
            </div>
          </div>

          <!-- Floating success indicator -->
          <div class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
            <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Grid Section -->
  <section class="py-24 px-4 bg-theme-secondary">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
          Everything You Need to Succeed
        </h2>
        <p class="text-xl text-theme-muted max-w-3xl mx-auto">
          Powerful features designed to accelerate your growth and streamline your operations.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {#each benefits as benefit, index}
          <div class="group relative">
            <!-- Card with Enhanced Effects -->
            <div class="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 p-8 text-center h-full">
              <!-- Animated gradient border -->
              <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div class="relative z-10">
                <!-- Icon with enhanced styling -->
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>

                <h3 class="text-xl font-bold text-theme-primary mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {benefit.title}
                </h3>

                <p class="text-theme-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Social Proof Section -->
  <section class="py-24 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
          Trusted by Industry Leaders
        </h2>
        <p class="text-xl text-theme-muted max-w-2xl mx-auto">
          Join thousands of companies already transforming their business with our platform.
        </p>
      </div>

      <!-- Company logos placeholder -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
        {#each Array(12) as _, i}
          <div class="h-12 bg-gradient-to-r from-theme-muted/20 to-theme-muted/40 rounded-lg flex items-center justify-center">
            <div class="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded"></div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Testimonials Carousel -->
  <section class="py-24 px-4 bg-theme-secondary">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
          What Our Customers Say
        </h2>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="p-8 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div class="flex items-center gap-1 mb-6">
            {#each Array(5) as _}
              <svg class="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            {/each}
          </div>
          <p class="text-theme-secondary text-lg mb-6 italic leading-relaxed">
            "This platform revolutionized our workflow. The automation features saved us 20 hours per week, and the analytics give us insights we never had before."
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center justify-center text-white font-bold text-lg">
              MR
            </div>
            <div>
              <div class="font-bold text-theme-primary">Marcus Rodriguez</div>
              <div class="text-theme-muted">VP of Operations, TechFlow</div>
            </div>
          </div>
        </div>

        <div class="p-8 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div class="flex items-center gap-1 mb-6">
            {#each Array(5) as _}
              <svg class="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            {/each}
          </div>
          <p class="text-theme-secondary text-lg mb-6 italic leading-relaxed">
            "The ROI was immediate. Within the first month, we saw a 150% increase in efficiency. The customer support team is also exceptional."
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
              SJ
            </div>
            <div>
              <div class="font-bold text-theme-primary">Sarah Jenkins</div>
              <div class="text-theme-muted">CEO, InnovateLabs</div>
            </div>
          </div>
        </div>

        <div class="p-8 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
          <div class="flex items-center gap-1 mb-6">
            {#each Array(5) as _}
              <svg class="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            {/each}
          </div>
          <p class="text-theme-secondary text-lg mb-6 italic leading-relaxed">
            "Game-changing solution that exceeded all our expectations. The scalability and performance are unmatched in the industry."
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold text-lg">
              DK
            </div>
            <div>
              <div class="font-bold text-theme-primary">David Kim</div>
              <div class="text-theme-muted">CTO, FutureTech Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA with Newsletter -->
  <section class="py-24 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px] shadow-2xl">
        <div class="rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-12 relative">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-5">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.2)_1px,transparent_0)] bg-[length:24px_24px]"></div>
          </div>

          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Ready to Transform?
            </div>

            <h2 class="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
              Start Your Free Trial Today
            </h2>

            <p class="text-xl text-theme-muted mb-8 max-w-2xl mx-auto">
              Join forward-thinking companies already using our platform to accelerate their digital transformation.
            </p>

            <!-- Newsletter Signup -->
            <div class="max-w-lg mx-auto mb-8">
              {#if !isSubscribed}
                <div class="flex flex-col sm:flex-row gap-3">
                  <input
                    bind:value={email}
                    type="email"
                    placeholder="Enter your work email"
                    class="flex-1 px-4 py-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/20 dark:border-white/10 text-theme-primary placeholder-theme-muted focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    on:click={handleSubscribe}
                    class="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                  >
                    Get Started
                  </button>
                </div>
                <p class="text-sm text-theme-muted mt-3">14-day free trial • No credit card required • Cancel anytime</p>
              {:else}
                <div class="px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-emerald-700 dark:text-emerald-300 font-semibold">
                  ✅ Welcome aboard! Check your email for setup instructions.
                </div>
              {/if}
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="group px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
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
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>