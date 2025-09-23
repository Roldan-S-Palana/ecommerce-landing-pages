<div class="py-20 px-4">
  <h2 class="text-3xl font-bold text-center mb-10">Pricing Plans</h2>
  <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {#each plans as plan}
      <div class="border rounded-lg p-6 text-center shadow-lg">
        <h3 class="text-2xl font-semibold mb-4">{plan.name}</h3>
        <p class="text-4xl font-bold mb-4">${plan.price}</p>
        <ul class="mb-6">
          {#each plan.features as feature}
            <li class="mb-2">{feature}</li>
          {/each}
        </ul>
        <button class="bg-blue-500 text-white px-6 py-3 rounded font-semibold hover:bg-blue-600">{plan.buttonText}</button>
      </div>
    {/each}
  </div>
</div>

<script lang="ts">
  export let plans: { name: string; price: number; features: string[]; buttonText: string }[] = [
    {
      name: "Basic",
      price: 10,
      features: ["Feature 1", "Feature 2"],
      buttonText: "Choose Basic"
    },
    {
      name: "Pro",
      price: 20,
      features: ["Feature 1", "Feature 2", "Feature 3"],
      buttonText: "Choose Pro"
    },
    {
      name: "Premium",
      price: 30,
      features: ["All features"],
      buttonText: "Choose Premium"
    }
  ];
</script>