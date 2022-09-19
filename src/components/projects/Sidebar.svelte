<script lang="ts">
  import type { ProjectDetails } from "@/utils/types";
  import IoLogoGithub from "svelte-icons/io/IoLogoGithub.svelte";
  import Tag from "../common/Tag.svelte";

  export let projectDetails: ProjectDetails;
</script>

<div
  class="sidebar border-solid border-l border-gray-500 pl-4 grid grid-cols-1 gap-4"
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

  <div>
    <h4>Collaborators</h4>
    <ul>
      {#each projectDetails.collaborators as collaborator}
        <li>
          <a class="flex items-center" href={collaborator.url} target="_blank">
            <img
              class="rounded-lg overflow-hidden h-9 w-9 mr-4"
              src={collaborator.avatarUrl}
              alt={collaborator.url}
            />
            {collaborator.login}
          </a>
        </li>
      {/each}
    </ul>
  </div>

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

    <div>
      <h4>Tags</h4>
      <ul>
        {#each projectDetails.metadata.tags as tag}
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
