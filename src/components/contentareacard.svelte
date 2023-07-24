<script>
  import { goto } from '$app/navigation';
  import { selectedCars } from '../store/store.js';
  export let model;

  function updateModel() {
    selectedCars.update((value) => {
      return {
        ...value,
        model: model.Name,
      };
    });

    goto(`page2/${model.Name}`);
  }
</script>

<div
  class="border-[1px] border-gray-400 p-4 flex flex-col gap-2 shadow-md hover:shadow-2xl hover:cursor-pointer"
  on:click={updateModel}
>
  <h1 class="font-extrabold">{model.Name}</h1>
  <p class="font-bold">{model.Origin}</p>
  <p class="font-bold">{model.Year}</p>
</div>
