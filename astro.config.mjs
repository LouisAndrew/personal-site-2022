import netlify from "@astrojs/netlify/functions";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: "server",
  adapter: netlify(),
});
