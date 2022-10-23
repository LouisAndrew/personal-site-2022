<script lang="ts">
  import type { ProjectDetails } from "@/utils/types";

  import IoLogoGithub from "svelte-icons/io/IoLogoGithub.svelte";
  import Tag from "../common/Tag.svelte";

  export let projectDetails: ProjectDetails;
</script>

<div
  class={`sidebar col-span-2 border-solid border-l-0 dark:border-gray-700 
    grid gap-4 grid-cols-2
    pb-8 border-gray-200 
    md:border-l md:pl-8 md:grid-cols-1 
  `}
>
  <div class="col-span-2 md:col-span-1">
    {#if projectDetails.homepageUrl}
      <a
        class="highlight mb-2"
        href={projectDetails.homepageUrl}
        target="_blank"
      >
        <IoLogoGithub />
        Visit project
      </a>
    {/if}
    <a class="highlight" href={projectDetails.url} target="_blank">
      <IoLogoGithub />
      Visit GitHub repository
    </a>
  </div>

  {#if projectDetails.collaborators.length > 0}
    <div class="col-span-2 md:col-span-1">
      <h4>Collaborators</h4>
      <ul class="list-none pl-0">
        {#each projectDetails.collaborators as collaborator}
          <li class="last:mb-0 mb-2">
            <a
              class="flex items-center text-sm"
              href={collaborator.url}
              target="_blank"
            >
              <img
                class="rounded-sm overflow-hidden h-7 w-7 mr-4"
                src={collaborator.avatarUrl}
                alt={collaborator.url}
              />
              {collaborator.login}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}

  <div>
    <h4>Languages</h4>
    <ul class="list-none pl-0">
      {#each projectDetails.languages as lang}
        <li>
          <Tag color={lang.color}>
            {lang.name}
          </Tag>
        </li>
      {/each}
    </ul>
  </div>

  {#if projectDetails.metadata}
    {@const isPolyrepo = projectDetails.metadata.type === "polyrepo"}
    {@const tags = projectDetails.metadata.tags}

    {#if tags}
      <div>
        <h4>Tags</h4>
        <ul class="list-none pl-0">
          {#each tags as tag}
            <li>
              <Tag color="#38bdf8">
                {tag}
              </Tag>
            </li>
            {#if isPolyrepo}
              <li>Multirepo project</li>
            {/if}
          {/each}
        </ul>
      </div>
    {/if}

    {@const polyrepos = projectDetails.metadata.polyrepo}
    {#if polyrepos && isPolyrepo}
      <ul>
        {#each polyrepos as repo}
          <li>
            <a href={repo.projectUrl} target="_blank">
              {repo.tag}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  {/if}
</div>
