<script lang="ts">
  export let color: string;

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) {
      return null;
    }

    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    return `rgba(${r}, ${g}, ${b}, 20%)`;
  };

  $: bgColor = hexToRgb(color) ?? "transparent";
</script>

<div
  style:--color={color}
  style:--bg-color={bgColor}
  class="tag text-sm font-bold border-2 border-solid rounded-md px-2 py-1 w-max my-2"
>
  <slot />
</div>

<style>
  .tag {
    border-color: var(--color);
    color: var(--color);
    background-color: var(--bg-color);
  }
</style>
