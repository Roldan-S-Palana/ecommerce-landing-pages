<script lang="ts">
  import { page } from '$app/stores';
  import { products } from '$lib/data/products';

  let slug: string;
  let product: any;

  $: {
    slug = $page.params.slug;
    product = products.find(p => p.slug === slug);
  }
</script>

{#if product}
  <div class="max-w-4xl mx-auto py-8 px-4">
    <h1 class="text-4xl font-bold mb-4">{product.name}</h1>
    <p class="text-xl mb-6">{product.description}</p>
    <p class="text-3xl font-bold mb-6">${product.price}</p>
    <a href="https://buy.stripe.com/test_placeholder" class="bg-blue-500 text-white px-6 py-3 rounded font-semibold hover:bg-blue-600 inline-block">Buy Now</a>
    <a href="/landing-pages/{product.slug}" class="ml-4 bg-green-500 text-white px-6 py-3 rounded font-semibold hover:bg-green-600">Preview</a>
  </div>
{:else}
  <p>Product not found.</p>
{/if}