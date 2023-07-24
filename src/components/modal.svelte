<script>
  import { modalStore } from '../store/store.js';
  function closeModal(event) {
    if (event.target.classList.contains('modal'))
      modalStore.update(() => {
        return {
          showBrandModal: false,
          showBrandDetailModal: false,
        };
      });
  }
</script>

<section
  class="modal absolute w-full h-full bg-[rgb(0,0,0,0.5)] flex justify-center items-center"
  on:click={(event) => closeModal(event)}
>
  <slot />
</section>
