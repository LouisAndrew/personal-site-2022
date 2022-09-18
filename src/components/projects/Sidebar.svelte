<script lang="ts">
  import type { ProjectDetails } from "@/utils/types";

  export let projectDetails: ProjectDetails;
</script>

<div class="sidebar">
  <a href={projectDetails.homepageUrl} target="_blank"> Visit project </a>
  <a href={projectDetails.url} target="_blank"> Visit GitHub repository </a>

  <ul>
    {#each projectDetails.collaborators as collaborator}
      <li>
        <a href={collaborator.url} target="_blank"> Visit GitHub profile </a>
      </li>
    {/each}

    {#if projectDetails.metadata}
      {@const isPolyrepo = projectDetails.metadata.type === "polyrepo"}
      <ul>
        {#each projectDetails.metadata.tags as tag}
          <li>
            {tag}
          </li>
          {#if isPolyrepo}
            <li>Multirepo project</li>
          {/if}
        {/each}
      </ul>

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
  </ul>
</div>
