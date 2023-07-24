<script>
  import '../app.css';
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';
  import { modalStore } from '../store/store.js';
  import Modal from '../components/modal.svelte';
  import { cars } from '../store/store.js';
  let showBrandModal = false,
    newBrand = '';

  modalStore.subscribe((value) => (showBrandModal = value.showBrandModal));
  function addBrand() {
    if (newBrand === '') return;
    cars.update((value) => {
      return {
        ...value,
        carmanufacturer: [...value.carmanufacturer, newBrand],
      };
    });
    modalStore.update((value) => {
      return {
        ...value,
        showBrandModal: false,
      };
    });
  }
</script>

<main class="h-screen flex flex-col">
  <Header />
  <slot />
  {#if showBrandModal}
    <Modal>
      <form class="p-4 bg-[#333] flex gap-4">
        <input
          type="text"
          placeholder="brand"
          class="border-2 border-white p-4"
          bind:value={newBrand}
        />
        <button
          class="border-2 border-white p-4 text-white font-bold"
          on:click={addBrand}>add brand</button
        >
      </form></Modal
    >
  {/if}
  <Footer />
</main>
