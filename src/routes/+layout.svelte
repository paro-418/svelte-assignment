<script>
  import '../app.css';
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';
  import { modalStore } from '../store/store.js';
  import Modal from '../components/modal.svelte';
  import { cars } from '../store/store.js';
  let showBrandModal = false,
    showBrandDetailModal = false,
    newBrand = '',
    modelDetail = {
      name: '',
      fuelConsumption: '',
      cylinder: '',
      displacement: '',
      horsepower: '',
      weight: '',
      acceleration: '',
      launched: '',
      origin: '',
    };

  modalStore.subscribe((value) => {
    showBrandModal = value.showBrandModal;
    showBrandDetailModal = value.showBrandDetailModal;
  });
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

  function addModel() {
    console.log(modelDetail);
    if (
      modelDetail.acceleration <= 0 ||
      modelDetail.cylinder <= 0 ||
      modelDetail.displacement <= 0 ||
      modelDetail.fuelConsumption <= 0 ||
      modelDetail.horsepower <= 0 ||
      !modelDetail.launched ||
      !modelDetail.origin ||
      modelDetail.weight <= 0
    )
      return;

    cars.update((value) => {
      return {
        ...value,
        carmodels: [
          ...value.carmodels,
          {
            Name: modelDetail.name,
            Miles_per_Gallon: modelDetail.fuelConsumption,
            Cylinders: modelDetail.cylinder,
            Displacement: modelDetail.displacement,
            Horsepower: modelDetail.horsepower,
            Weight_in_lbs: modelDetail.weight,
            Acceleration: modelDetail.acceleration,
            Year: modelDetail.launched,
            Origin: modelDetail.origin,
          },
        ],
      };
    });

    modalStore.update((value) => {
      return {
        ...value,
        showBrandDetailModal: false,
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
          class="border-2 border-white p-2"
          bind:value={newBrand}
        />
        <button
          class="border-2 border-white p-4 text-white font-bold"
          on:click={addBrand}>add brand</button
        >
      </form></Modal
    >
  {/if}

  {#if showBrandDetailModal}
    <Modal>
      %
      <form class="p-4 bg-[#333] flex flex-col w-1/4 gap-4">
        <input
          class="p-2"
          type="text"
          bind:value={modelDetail.name}
          placeholder="model name"
        />
        <input
          class="p-2"
          type="number"
          bind:value={modelDetail.fuelConsumption}
          placeholder="fuel consumption"
        />
        <input
          class="p-2"
          type="number"
          bind:value={modelDetail.cylinder}
          placeholder="Cylinders"
        />
        <input
          class="p-2"
          type="number"
          bind:value={modelDetail.displacement}
          placeholder="displacement"
        />
        <input
          class="p-2"
          type="number"
          bind:value={modelDetail.horsepower}
          placeholder="horse power"
        />
        <input
          class="p-2"
          type="number"
          bind:value={modelDetail.weight}
          placeholder="weight"
        />
        <input
          class="p-2"
          type="number"
          bind:value={modelDetail.acceleration}
          placeholder="acceleration"
        />
        <input
          class="p-2"
          type="date"
          bind:value={modelDetail.launched}
          placeholder="year"
        />
        <input
          class="p-2"
          type="text"
          bind:value={modelDetail.origin}
          placeholder="origin Country"
        />
        <button
          class="border-2 border-white p-2 text-white font-bold"
          on:click={addModel}>add modal</button
        >
      </form>
    </Modal>
  {/if}
  <Footer />
</main>
