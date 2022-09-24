<script lang="ts">
  import type { ProjectDetails } from "@/utils/types";

  export let projectDetails: ProjectDetails;

  const pad = (num: number) => (num > 9 ? num.toString() : `0${num}`);

  const dateFormatter = (str: string) => {
    const date = new Date(str);
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };
</script>

<div class="hero">
  <h1 class="block mb-2">
    {projectDetails.name}
  </h1>
  <div class="grid grid-cols-2 gap-x-2 w-max mb-8">
    <span class="text-xs text-gray-600 dark:text-gray-400">Created at</span>
    <span class="text-xs text-gray-500 dark:text-gray-400">
      Last updated at
    </span>
    <span class="text-sm">
      {dateFormatter(projectDetails.createdAt)}
    </span>
    <span class="text-sm">
      {dateFormatter(projectDetails.updatedAt)}
    </span>
  </div>
</div>
