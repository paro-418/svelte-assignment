<script>
  import { selectedCars } from '../store/store.js';
  export let brand;

  function updateSelectedBrand() {
    selectedCars.update((carObj) => {
      return {
        ...carObj,
        brand,
      };
    });
  }
</script>

<div
  class="w-full h-fit border-[1px] border-gray-300 shadow-md hover:shadow-xl p-4 hover:cursor-pointer"
  on:click={updateSelectedBrand}
>
  {brand}
</div>
