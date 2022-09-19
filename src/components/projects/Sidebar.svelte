<script lang="ts">
  import type { ProjectDetails } from "@/utils/types";

  import IoLogoGithub from "svelte-icons/io/IoLogoGithub.svelte";
  import Tag from "../common/Tag.svelte";

  export let projectDetails: ProjectDetails;
</script>

<div
  class="sidebar border-solid border-l border-gray-200 dark:border-gray-700 pl-8 grid grid-cols-1 gap-4"
>
  <div>
    <a class="highlight mb-2" href={projectDetails.homepageUrl} target="_blank">
      <IoLogoGithub />
      Visit project
    </a>
    <a class="highlight" href={projectDetails.url} target="_blank">
      <IoLogoGithub />
      Visit GitHub repository
    </a>
  </div>

  {#if projectDetails.collaborators.length > 0}
    <div>
      <h4>Collaborators</h4>
      <ul>
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
    <ul>
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
        <ul>
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
