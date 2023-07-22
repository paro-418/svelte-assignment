<script>
  import { cars } from '../store/store.js';
  import Sidebarcard from './sidebarcard.svelte';

  let showBrand,
    allBrands,
    typedBrand = '';

  cars.subscribe((value) => {
    showBrand = value.carmanufacturer;
    allBrands = value.carmanufacturer;
  });

  function updateBrand() {
    showBrand = allBrands.filter((brand) =>
      brand.trim().toLowerCase().includes(typedBrand.trim().toLowerCase())
    );
  }
</script>

<div class="basis-1/4 flex flex-col gap-4 p-4 overflow-y-scroll">
  <div>{typedBrand}</div>
  <input
    type="text"
    placeholder="search brand"
    class="border-[1px] border-black w-full p-3"
    id="brand"
    bind:value={typedBrand}
    on:keyup={updateBrand}
  />

  {#each showBrand as brand (brand)}
    <Sidebarcard {brand} />
  {/each}
</div>
