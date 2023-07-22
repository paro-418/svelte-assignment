<script>
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';
  import '../app.css';
</script>

<main class="h-screen flex flex-col">
  <Header />
  <slot />
  <Footer />
</main>
