<script lang="ts">
  import { products } from '$lib/data/products';
</script>

<h1 class="text-3xl font-bold mb-8">Shop</h1>
<div class="grid md:grid-cols-2 gap-8">
  {#each products as product}
    <div class="border rounded-lg p-6 shadow-lg">
      <h2 class="text-2xl font-semibold mb-2">{product.name}</h2>
      <p class="mb-4">{product.description}</p>
      <p class="text-xl font-bold mb-4">${product.price}</p>
      <a href="/product/{product.slug}" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</a>
      <a href="/landing-pages/{product.slug}" class="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Preview</a>
    </div>
  {/each}
</div>