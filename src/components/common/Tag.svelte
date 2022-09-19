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

  $: backgroundColor = hexToRgb(color) ?? "transparent";
</script>

<div
  style:color
  style:background-color={backgroundColor}
  class="tag px-1 text-sm py-0.5 w-max my-2 brightness-75 dark:brightness-150"
>
  #<slot />
</div>
