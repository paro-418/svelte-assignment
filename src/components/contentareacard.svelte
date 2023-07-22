<script>
  export let model;
</script>

<div
  class="border-[1px] border-gray-400 p-4 flex flex-col gap-2 shadow-md hover:shadow-2xl hover:cursor-pointer"
>
  <h1 class="font-extrabold">{model.Name}</h1>
  <p class="font-bold">{model.Origin}</p>
  <p class="font-bold">{model.Year}</p>
</div>
