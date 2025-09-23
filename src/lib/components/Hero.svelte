<div class="bg-blue-500 text-white py-20 px-4 text-center">
  <h1 class="text-5xl font-bold mb-4">{title}</h1>
  <p class="text-xl mb-8">{subtitle}</p>
  <button class="bg-white text-blue-500 px-6 py-3 rounded font-semibold hover:bg-gray-100">{buttonText}</button>
</div>

<script lang="ts">
  export let title: string = "Welcome";
  export let subtitle: string = "This is a hero section";
  export let buttonText: string = "Get Started";
</script>