<script lang="ts">
</script>

<ul
  class={`navbar list-none grid gap-x-12 gap-y-4 font-sans px-8 py-16 md:px-0 md:py-0 text-xl md:text-base ${$$restProps.class}`}
>
  <li class="!pt-0 w-fit">
    <a href="/"> Home</a>
  </li>
  <li>
    <a href="/projects"> Projects</a>
  </li>
  <slot />
</ul>
