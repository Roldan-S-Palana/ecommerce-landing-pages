<script lang="ts">
	import { theme } from '$lib/stores/theme';
</script>

<!-- Standalone theme toggle component that can be used anywhere -->
<button
	class="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm bg-slate-900 text-white hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-900 shadow ring-1 ring-slate-900/10 dark:ring-emerald-500/20 transition-colors"
	aria-label="Toggle dark mode"
	aria-pressed={$theme === 'dark'}
	on:click={theme.toggle}
>
	<!-- Sun icon (shown in dark mode) -->
	<svg 
		class="h-4 w-4 hidden dark:block" 
		viewBox="0 0 24 24" 
		fill="none" 
		stroke="currentColor" 
		stroke-width="2" 
		stroke-linecap="round" 
		stroke-linejoin="round" 
		aria-hidden="true"
	>
		<path d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.95 6.95-1.41-1.41M6.46 6.46 5.05 5.05m12.02 0-1.41 1.41M6.46 17.54l-1.41 1.41"/>
		<circle cx="12" cy="12" r="4"/>
	</svg>
	
	<!-- Moon icon (shown in light mode) -->
	<svg 
		class="h-4 w-4 dark:hidden" 
		viewBox="0 0 24 24" 
		fill="none" 
		stroke="currentColor" 
		stroke-width="2" 
		stroke-linecap="round" 
		stroke-linejoin="round" 
		aria-hidden="true"
	>
		<path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
	</svg>
	
	<span class="hidden sm:inline">{$theme === 'dark' ? 'Dark' : 'Light'}</span>
</button>