module.exports = {
  semi: true,
  singleQuote: false,
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-svelte"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
