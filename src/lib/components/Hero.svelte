<script lang="ts">
  export let title: string = "Welcome";
  export let subtitle: string = "This is a hero section";
  export let buttonText: string = "Get Started";
</script>

<div class="relative overflow-hidden rounded-3xl hero-gradient text-white py-24 px-8 text-center shadow-theme ring-1 ring-white/10 dark:ring-white/5">
  <!-- Enhanced magical glow layers -->
  <div class="pointer-events-none absolute inset-0 opacity-50">
    <div class="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/20 dark:bg-blue-400/20 blur-3xl animate-pulse"></div>
    <div class="absolute -bottom-24 -right-12 h-80 w-80 rounded-full bg-emerald-300/30 dark:bg-emerald-400/20 blur-3xl animate-pulse delay-1000"></div>
    <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-blue-300/60 to-transparent"></div>
  </div>

  <!-- Floating particles effect -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full float-slow"></div>
    <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-300/60 rounded-full float-slow delay-200"></div>
    <div class="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300/50 rounded-full float-slow delay-500"></div>
  </div>

  <div class="relative z-10">
    <h1 class="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-white dark:from-slate-100 dark:via-emerald-300 dark:to-slate-100 shimmer leading-tight">
      {title}
    </h1>
    <p class="text-2xl md:text-3xl mb-10 text-white/90 dark:text-slate-100/90 max-w-4xl mx-auto leading-relaxed font-light">
      {subtitle}
    </p>

    <!-- Call-to-action text above button -->
    <p class="text-lg mb-6 text-white/80 dark:text-slate-200/80 font-medium">
      Start building your next project today
    </p>

    <button
      type="button"
      class="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl text-slate-900 bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 via-emerald-400 to-pink-400 dark:from-slate-800 dark:to-slate-800 dark:text-slate-100 bg-[length:300%_300%] animate-gradient-x hover:animate-none hover:scale-105 shadow-2xl ring-1 ring-white/30 dark:ring-white/10 transition-all duration-300 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-white/50 dark:focus:ring-white/20"
      aria-label="Get started button"
    >
      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 12l5 5L20 7"/>
      </svg>
      {buttonText}
    </button>
  </div>
</div>