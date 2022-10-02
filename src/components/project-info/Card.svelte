<script lang="ts">
  import type { RepositoryInfo } from "@/utils/types";
  import Tag from "@/components/common/Tag.svelte";

  import IoIosStarOutline from "svelte-icons/io/IoIosStarOutline.svelte";
  export let repositoryInfo: RepositoryInfo;
</script>

<div class="highlight p-1 rounded w-full h-full">
  <div
    class="card h-full w-full grid gap-y-4 bg-[#fbfcfd] dark:bg-[#202025] border border-solid dark:border-zinc-700 p-5 rounded"
  >
    <div class="flex items-center">
      <h3 class="mt-0">{repositoryInfo.name}</h3>
      {#if repositoryInfo.highlight}
        <div class="mb-1 ml-1 text-yellow-400 ">
          <IoIosStarOutline />
        </div>
      {/if}
    </div>
    <p
      class={`self-start text-sm ${
        repositoryInfo.description ? "dark:text-gray-300" : "dark:text-gray-400"
      }`}
    >
      {repositoryInfo.description
        ? repositoryInfo.description
        : "No description"}
    </p>

    <div class="flex flex-wrap self-end">
      {#each repositoryInfo.languages as lang}
        <Tag class="last:mr-0 mr-4 mb-0" color={lang.color}>
          {lang.name}
        </Tag>
      {/each}
    </div>
  </div>
</div>

<style scoped>
  .card {
    grid-template-rows: auto 1fr auto;
  }
</style>
