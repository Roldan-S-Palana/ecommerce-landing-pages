<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="description" content="E-commerce site for landing page templates" />
	<meta property="og:title" content="E-commerce Landing Pages" />
	<meta property="og:description" content="View and download landing page templates" />
	<meta property="og:image" content="/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{@render children?.()}
