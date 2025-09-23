<script lang="ts">
  import { products } from '$lib/data/products';
</script>

<h1 class="text-3xl font-bold mb-8 dark:text-slate-100">Downloads</h1>
<p class="mb-8 text-slate-700 dark:text-slate-300">Download your purchased landing page templates.</p>
<div class="grid md:grid-cols-2 gap-8">
  {#each products as product}
    <div class="border rounded-xl p-6 shadow-lg bg-white dark:bg-slate-900 dark:border-slate-800 dark:shadow-none transition">
      <h2 class="text-2xl font-semibold mb-2">{product.name}</h2>
      <p class="mb-4 text-slate-700 dark:text-slate-300">{product.description}</p>
      <a href="/downloads/{product.slug}.zip" download class="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-900 transition">
        Download ZIP
      </a>
    </div>
  {/each}
</div>