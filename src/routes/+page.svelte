<script>
  import { goto } from '$app/navigation';
</script>

<main class="flex-grow flex justify-center items-center">
  <div class="flex flex-col justify-center items-center gap-8">
    <h1 class="font-bold text-5xl">welcome to the car info page</h1>
    <button
      class="font-bold border-2 border-gray-400 p-4 rounded-md"
      on:click={() => goto('/page1')}>go to page1</button
    >
  </div>
</main>
