<script lang="ts">
  import Drawer from "svelte-drawer-component";
  import Toggle from "./Toggle.svelte";

  let open = false;
</script>

<button
  class="absolute z-[999999] h-8 w-8 top-12 right-8 md:hidden"
  data-open={open}
  on:click={() => (open = !open)}
>
  <Toggle />
</button>

<Drawer {open} placement="top" size="100vh">
  <div class="grid relative">
    <slot />
  </div>
</Drawer>

<style lang="postcss">
  :global(.drawer .panel) {
    background-color: #fbfcfd !important;
  }

  :global(.dark .panel) {
    background-color: #202025 !important;
  }

  @media only screen and (min-width: 768px) {
    :global(.drawer) {
      display: none !important;
    }
  }
</style>
