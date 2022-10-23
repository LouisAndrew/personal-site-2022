<script lang="ts">
  import Image from "@/components/projects/Image.svelte";

  export let avatarUrl: string;
</script>

<header class="header flex justify-between mb-12">
  <div class="avatar w-12 h-12 rounded-full overflow-hidden">
    <Image src={avatarUrl} />
  </div>

  <nav>
    <slot />
  </nav>
</header>
