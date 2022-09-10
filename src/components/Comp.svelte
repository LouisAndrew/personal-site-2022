<script lang="ts">
  let count = 0;

  const handleClick = () => count++;
</script>

<button class="px-4 py-2 bg-blue-400 text-white rounded" on:click={handleClick}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>
