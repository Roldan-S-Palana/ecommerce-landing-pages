<script lang="ts">
  import { page } from '$app/stores';
  import Landing1 from '$lib/landing-pages/Landing1.svelte';
  import Landing2 from '$lib/landing-pages/Landing2.svelte';

  let slug: string | undefined;
  let component: any;

  $: {
    slug = $page.params.slug;
    switch (slug) {
      case 'landing1':
        component = Landing1;
        break;
      case 'landing2':
        component = Landing2;
        break;
      default:
        component = null;
    }
  }
</script>

{#if component}
  <svelte:component this={component} />
{:else}
  <p>Landing page not found.</p>
{/if}