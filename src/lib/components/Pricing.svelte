<script lang="ts">
  export let plans: { name: string; price: number; features: string[]; buttonText: string }[] = [
    {
      name: "Basic",
      price: 10,
      features: ["1 Landing Page Template", "Basic Customization", "Email Support", "Commercial License"],
      buttonText: "Choose Basic"
    },
    {
      name: "Pro",
      price: 20,
      features: ["5 Landing Page Templates", "Advanced Customization", "Priority Support", "Commercial License", "Source Code Access"],
      buttonText: "Choose Pro"
    },
    {
      name: "Premium",
      price: 30,
      features: ["Unlimited Templates", "Full Customization", "24/7 Support", "Extended License", "Source Code + PSD Files", "Future Updates"],
      buttonText: "Choose Premium"
    }
  ];
</script>

<div class="py-20 px-4 bg-theme-secondary text-theme-primary">
  <div class="text-center mb-16">
    <h2 class="text-4xl font-bold text-theme-primary mb-4">Choose Your Plan</h2>
    <p class="text-xl text-theme-muted max-w-2xl mx-auto">Select the perfect package for your needs. All plans include lifetime access and updates.</p>
  </div>
  
  <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {#each plans as plan, index}
      <div class="theme-card rounded-2xl p-8 text-center relative {index === 1 ? 'ring-2 ring-blue-500 dark:ring-blue-400 scale-105' : ''}">
        {#if index === 1}
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 dark:bg-blue-400 text-white dark:text-slate-900 px-6 py-2 rounded-full text-sm font-bold">
            Most Popular
          </div>
        {/if}
        
        <div class="mb-6">
          <h3 class="text-2xl font-bold text-theme-primary mb-2">{plan.name}</h3>
          <div class="flex items-baseline justify-center gap-1">
            <span class="text-5xl font-extrabold text-theme-primary">${plan.price}</span>
            <span class="text-theme-muted">/ package</span>
          </div>
        </div>
        
        <ul class="mb-8 space-y-4">
          {#each plan.features as feature}
            <li class="flex items-center gap-3 text-theme-secondary">
              <svg class="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12l5 5L20 7"/>
              </svg>
              {feature}
            </li>
          {/each}
        </ul>
        
        <button class="{index === 1 ? 'btn-primary' : 'btn-secondary'} w-full px-6 py-4 rounded-xl font-bold text-lg shadow-theme transition-all duration-300 hover:scale-105">
          {plan.buttonText}
        </button>
      </div>
    {/each}
  </div>
  
  <div class="text-center mt-12">
    <p class="text-theme-muted mb-4">All plans include:</p>
    <div class="flex flex-wrap justify-center gap-6 text-sm">
      <span class="flex items-center gap-2 text-theme-secondary">
        <svg class="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12l5 5L20 7"/>
        </svg>
        Lifetime Access
      </span>
      <span class="flex items-center gap-2 text-theme-secondary">
        <svg class="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12l5 5L20 7"/>
        </svg>
        No Monthly Fees
      </span>
      <span class="flex items-center gap-2 text-theme-secondary">
        <svg class="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12l5 5L20 7"/>
        </svg>
        30-Day Guarantee
      </span>
    </div>
  </div>
</div>