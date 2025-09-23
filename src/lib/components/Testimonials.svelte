<div class="py-20 px-4 bg-theme-secondary">
  <h2 class="text-3xl font-bold text-center mb-10 text-theme-primary">What Our Customers Say</h2>
  <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {#each testimonials as testimonial}
      <div class="theme-card p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
        <p class="mb-4 italic text-theme-secondary">"{testimonial.quote}"</p>
        <p class="font-semibold text-theme-primary">{testimonial.name}</p>
        <p class="text-theme-muted">{testimonial.role}</p>
      </div>
    {/each}
  </div>
</div>

<script lang="ts">
  export let testimonials: { quote: string; name: string; role: string }[] = [
    {
      quote: "Great product!",
      name: "John Doe",
      role: "CEO"
    },
    {
      quote: "Highly recommend.",
      name: "Jane Smith",
      role: "Designer"
    },
    {
      quote: "Excellent service.",
      name: "Bob Johnson",
      role: "Developer"
    }
  ];
</script>