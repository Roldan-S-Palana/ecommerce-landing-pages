<script lang="ts">
  import { page } from '$app/stores';
  import { products, type Product } from '$lib/data/products';

  let product: Product | undefined;

  $: {
    const slug = $page.params.slug;
    product = products.find(p => p.slug === slug);
  }
</script>

<svelte:head>
  <title>{product ? product.name : 'Product Not Found'} - Ecommerce Landing Pages</title>
  <meta name="description" content={product ? product.description : 'Product not found'} />
</svelte:head>

{#if product}
  <div class="max-w-4xl mx-auto py-8 px-4 text-slate-900 dark:text-slate-100">
    <div class="mb-6">
      <a href="/shop" class="text-blue-600 dark:text-emerald-400 hover:underline">&larr; Back to Shop</a>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
      <h1 class="text-4xl font-bold mb-4">{product.name}</h1>
      <p class="text-xl mb-6 text-slate-600 dark:text-slate-300">{product.description}</p>
      
      <div class="flex items-center gap-4 mb-8">
        <span class="text-3xl font-bold text-emerald-600 dark:text-emerald-400">${product.price}</span>
        <span class="text-sm text-slate-500 dark:text-slate-400">One-time purchase</span>
      </div>
      
      <div class="flex flex-wrap gap-4">
        <a
          href="https://buy.stripe.com/test_placeholder"
          class="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-emerald-400"
          role="button"
        >
          Buy Now
        </a>
        <a
          href="/landing-pages/{product.slug}"
          class="inline-block bg-emerald-500 hover:bg-emerald-600 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-slate-400"
          role="button"
        >
          Preview Template
        </a>
      </div>
    </div>
  </div>
{:else}
  <div class="max-w-4xl mx-auto py-8 px-4 text-center">
    <div class="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
      <h1 class="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Product Not Found</h1>
      <p class="text-xl mb-6 text-slate-600 dark:text-slate-300">The product you're looking for doesn't exist.</p>
      <a
        href="/shop"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Browse All Products
      </a>
    </div>
  </div>
{/if}