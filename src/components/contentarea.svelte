<script>
  import { cars } from '../store/store.js';
  import { selectedCars } from '../store/store';
  import { modalStore } from '../store/store.js';
  import Contentareacard from './contentareacard.svelte';
  import Modal from './modal.svelte';
  let searchedBrand,
    allModels,
    searchedModel = '',
    filteredModels,
    showModels = [],
    shoeBrandDetailModal = false;
  cars.subscribe((value) => {
    allModels = value.carmodels;
  });

  selectedCars.subscribe((value) => {
    searchedBrand = value.brand;
    filteredModels = searchedBrand
      ? allModels.filter((model) =>
          model.Name.trim()
            .toLowerCase()
            .includes(searchedBrand.toLowerCase().trim())
        )
      : [];

    showModels = filteredModels;
  });

  modalStore.subscribe(
    (value) => (shoeBrandDetailModal = value.showBrandDetailModal)
  );

  function updateModel() {
    showModels = filteredModels.filter((model) =>
      model.Name.toLowerCase()
        .trim()
        .includes(searchedModel.toLowerCase().trim())
    );
  }

  function openModelModal() {
    modalStore.update((value) => {
      return {
        ...value,
        showBrandDetailModal: true,
      };
    });
  }
</script>

<div class="basis-3/4 p-4 overflow-y-scroll flex flex-col gap-5">
  <input
    type="text"
    placeholder="search model"
    class="border-[1px] border-black w-full p-3"
    id="brand"
    bind:value={searchedModel}
    on:keyup={updateModel}
  />
  <div class="flex justify-center items-center flex-grow">
    {#if searchedBrand !== ''}
      <div class="card-container flex-grow self-start grid grid-cols-5 gap-8">
        {#each showModels as model (model)}
          <Contentareacard {model} />
        {/each}
        <button
          on:click={openModelModal}
          class="border-[1px] border-gray-400 flex justify-center items-center shadow-md hover:shadow-2xl hover:cursor-pointer"
        >
          <span class="text-6xl text-gray-700">+</span>
        </button>
      </div>
    {:else if searchedBrand !== '' && searchedModel.length === 0}
      <div class="font-bold">
        no model found {searchedBrand}
        {searchedModel.length}
      </div>
    {:else}
      <div class="font-bold">select a brand to see models</div>
    {/if}
  </div>
</div>
