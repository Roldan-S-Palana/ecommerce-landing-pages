<script lang="ts">
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { theme } from '$lib/stores/theme';
	import '../app.css';

	onMount(() => {
		theme.init();
	});
</script>

<svelte:head>
	<title>OpenTemplates</title>
	<link rel="icon" href={favicon} />
	<meta name="description" content="OpenTemplates — high‑converting landing page templates for your products." />
	<meta property="og:title" content="OpenTemplates" />
	<meta property="og:description" content="Browse, preview, and download landing page templates on OpenTemplates." />
	<meta property="og:image" content="/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:site_name" content="OpenTemplates" />
</svelte:head>

<!-- Site header with enhanced theme-aware styling -->
<header class="fixed top-0 inset-x-0 z-50 header-backdrop">
	<div class="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
		<a href="/" class="text-xl font-bold tracking-tight text-theme-primary">
			<span class="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Open</span><span class="text-theme-primary">Templates</span>
		</a>
		
		<nav class="hidden sm:flex items-center gap-8 text-sm font-medium">
			<a href="#templates" class="text-theme-secondary hover:text-theme-primary transition-colors">Templates</a>
		</nav>

		<!-- Enhanced theme toggle -->
		<button
			class="theme-toggle inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-lg"
			aria-label="Toggle theme"
			aria-pressed={$theme === 'dark'}
			on:click={theme.toggle}
		>
			<!-- Sun icon (shown in dark mode) -->
			<svg 
				class="h-5 w-5 {$theme === 'dark' ? 'block' : 'hidden'}" 
				viewBox="0 0 24 24" 
				fill="none" 
				stroke="currentColor" 
				stroke-width="2" 
				stroke-linecap="round" 
				stroke-linejoin="round"
			>
				<circle cx="12" cy="12" r="4"/>
				<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 5.07l-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41"/>
			</svg>
			
			<!-- Moon icon (shown in light mode) -->
			<svg 
				class="h-5 w-5 {$theme === 'light' ? 'block' : 'hidden'}" 
				viewBox="0 0 24 24" 
				fill="none" 
				stroke="currentColor" 
				stroke-width="2" 
				stroke-linecap="round" 
				stroke-linejoin="round"
			>
				<path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
			</svg>
			
			<span class="hidden sm:inline capitalize">{$theme}</span>
		</button>
	</div>
</header>

<main class="pt-16 min-h-screen bg-theme-primary text-theme-primary">
	<slot />
</main>

<footer class="border-t border-theme bg-theme-secondary">
	<div class="mx-auto max-w-7xl px-4 py-12 text-sm text-theme-muted">
		<div class="flex flex-col sm:flex-row items-center justify-between gap-6">
			<p>© {new Date().getFullYear()} OpenTemplates. All rights reserved.</p>
			<div class="flex items-center gap-6">
				<a href="#templates" class="hover:text-theme-primary transition-colors">Templates</a>
			</div>
		</div>
	</div>
</footer>
