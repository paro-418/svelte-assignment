<script>
  import { cars } from '../store/store.js';
  import Sidebarcard from './sidebarcard.svelte';
  import { modalStore } from '../store/store.js';

  let showBrand,
    allBrands,
    typedBrand = '',
    showModal;

  cars.subscribe((value) => {
    showBrand = value.carmanufacturer;
    allBrands = value.carmanufacturer;
  });

  modalStore.subscribe((value) => (showModal = value.showModal));

  function updateBrand() {
    showBrand = allBrands.filter((brand) =>
      brand.trim().toLowerCase().includes(typedBrand.trim().toLowerCase())
    );
  }

  function openModal() {
    modalStore.update(() => {
      return {
        showBrandModal: true,
      };
    });
  }
</script>

<div class="basis-1/4 flex flex-col gap-4 p-4 overflow-hidden">
  <input
    type="text"
    placeholder="search brand"
    class="border-[1px] border-black w-full p-3"
    id="brand"
    bind:value={typedBrand}
    on:keyup={updateBrand}
  />
  <div class="flex flex-col gap-4 overflow-y-scroll p-4 flex-grow">
    {#each showBrand as brand (brand)}
      <Sidebarcard {brand} />
    {/each}
  </div>

  <button class="border-[1px] border-black w-full p-3" on:click={openModal}
    >add brand</button
  >
</div>
