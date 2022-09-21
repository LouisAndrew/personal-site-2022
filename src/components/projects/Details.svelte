<script lang="ts">
  import { Converter } from "showdown";
  import { agent } from "@/utils/agent";
  import type { ProjectDetails } from "@/utils/types";

  import IoIosFlashOff from "svelte-icons/io/IoIosFlashOff.svelte";

  export let projectDetails: ProjectDetails;

  const getReadme = async () => {
    const blob = await agent
      .get(`${projectDetails.contentBaseUrl}/README.md`)
      .text();

    return blob;
  };

  const getAdditionalInfo = async () => {
    const path = projectDetails.metadata?.moreInfoPath;
    if (path) {
      const blob = await agent.get(path).text();
      return blob;
    }

    return "";
  };

  const getContent = async () => {
    const readme = await getReadme();
    const additionalInfo = await getAdditionalInfo();

    const converter = new Converter({
      ghMentions: true,
      headerLevelStart: 2,
      openLinksInNewWindow: true,
    });

    return converter.makeHtml(`${readme}\n\n${additionalInfo}`);
  };
</script>

<div
  class="details col-span-2 row-start-2 md:col-span-4 row-start-1 max-w-sm lg:max-w-xl xl:max-w-3xl w-full mr-16 overflow-hidden"
>
  {#await getContent()}
    <div class="w-screen animate-pulse">
      <div class="h-9 bg-gray-200 dark:bg-gray-700 mb-8" />
      <div class="h-7 bg-gray-200 dark:bg-gray-700" />
      <div class="h-48 bg-gray-200 dark:bg-gray-700 mt-2" />
      <div class="h-48 bg-gray-200 dark:bg-gray-700 mt-2" />
    </div>
  {:then content}
    <div class="content">
      {@html content}
    </div>
  {:catch error}
    <div
      class="w-screen flex items-center text-yellow-600 dark:text-yellow-100"
    >
      <div class="w-10 h-10 mr-4">
        <IoIosFlashOff />
      </div>
      <span> No information is available for this project </span>
    </div>
  {/await}
</div>
