<script lang="ts">
  import type { ProjectDetails } from "@/utils/types";
  import IoMdImages from "svelte-icons/io/IoMdImages.svelte";

  import { onMount } from "svelte";
  export let src: string = "";
  export let alt: string = "";

  export let bgStyles = "";

  let loading = false;
  let failed = false;
  let opacity = 0;

  onMount(() => {
    const img = new Image();
    img.src = src;
    loading = true;

    img.onload = () => {
      // loading = false;
      opacity = 1;
    };

    img.onerror = () => {
      loading = false;
      failed = true;
    };
  });
</script>

<div class={`w-full mb-8 ${loading && "animate-pulse"}`}>
  {#if !loading && !failed}
    <img class="duration-300" style:opacity {src} {alt} />
  {:else}
    <div
      class={`duration-200 text-sm md:text-base px-4 md:px-0 w-full bg-gray-200 dark:bg-gray-700 flex justify-center items-center text-gray-400 ${bgStyles}`}
    >
      {#if failed}
        <div class="w-10 h-10 mr-4">
          <IoMdImages />
        </div>
        <span> No image is available for this project </span>
      {/if}
    </div>
  {/if}
</div>
