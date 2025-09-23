<script lang="ts">
  import { products } from '$lib/data/products';
</script>

<h1 class="text-3xl font-bold mb-8">Downloads</h1>
<p class="mb-8">Download your purchased landing page templates.</p>
<div class="grid md:grid-cols-2 gap-8">
  {#each products as product}
    <div class="border rounded-lg p-6 shadow-lg">
      <h2 class="text-2xl font-semibold mb-2">{product.name}</h2>
      <p class="mb-4">{product.description}</p>
      <a href="/downloads/{product.slug}.zip" download class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Download ZIP</a>
    </div>
  {/each}
</div>