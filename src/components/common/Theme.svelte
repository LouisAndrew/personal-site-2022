<script lang="ts">
  import { onMount } from "svelte";
  let darkMode = true;

  const toggleDarkMode = (useDark: boolean) => {
    const body = document.body;
    if (useDark) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  };

  $: {
    toggleDarkMode(darkMode);
  }

  onMount(() => toggleDarkMode(darkMode));
</script>

<li class="theme !pt-0">
  <button on:click={() => (darkMode = !darkMode)}> Toggle </button>
</li>
