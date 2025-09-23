<script lang="ts">
  import Hero from '../components/Hero.svelte';
  import Pricing from '../components/Pricing.svelte';
  import Testimonials from '../components/Testimonials.svelte';
</script>

<Hero title="Innovative Solution" subtitle="Transform your business" buttonText="Get Started" />
<Pricing plans={[
  { name: 'Starter', price: 5, features: ['Basic feature'], buttonText: 'Start Free' },
  { name: 'Business', price: 15, features: ['Basic + Advanced'], buttonText: 'Go Business' },
  { name: 'Enterprise', price: 50, features: ['All features + Support'], buttonText: 'Contact Sales' }
]} />
<Testimonials testimonials={[
  { quote: 'Changed my life!', name: 'Alice', role: 'Entrepreneur' },
  { quote: 'Worth every penny.', name: 'Charlie', role: 'Manager' },
  { quote: 'Fantastic!', name: 'Diana', role: 'User' }
]} />