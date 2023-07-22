<script>
  import { cars } from '../store/store.js';
  import { selectedCars } from '../store/store';
  import Contentareacard from './contentareacard.svelte';
  let searchedBrand,
    allModels,
    searchedModel = '',
    filteredModels,
    showModels = [];
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

  function updateModel() {
    showModels = filteredModels.filter((model) =>
      model.Name.toLowerCase()
        .trim()
        .includes(searchedModel.toLowerCase().trim())
    );
  }
</script>

<div
  class="basis-3/4  p-4 overflow-y-scroll flex flex-col gap-5"
>
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
      <div
        class="card-container flex-grow self-start grid grid-cols-5 gap-8"
      >
        {#each showModels as model (model)}
          <Contentareacard {model} />
        {/each}
      </div>
    {:else}
      <div>select a brand to see information</div>
    {/if}
  </div>
</div>
