<script lang="ts">
  import { products } from '$lib/data/products';
</script>

<h1 class="text-3xl font-bold mb-8 dark:text-slate-100">Shop</h1>
<div class="grid md:grid-cols-2 gap-8">
  {#each products as product}
    <div class="border rounded-xl p-6 shadow-lg bg-white dark:bg-slate-900 dark:border-slate-800 dark:shadow-none transition">
      <h2 class="text-2xl font-semibold mb-2">{product.name}</h2>
      <p class="mb-4 text-slate-600 dark:text-slate-300">{product.description}</p>
      <p class="text-xl font-bold mb-4">${product.price}</p>
      <div class="flex gap-3">
        <a href="/product/{product.slug}" class="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">View Details</a>
        <a href="/landing-pages/{product.slug}" class="inline-flex items-center justify-center bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition">Preview</a>
      </div>
    </div>
  {/each}
</div>