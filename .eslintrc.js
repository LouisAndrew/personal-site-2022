module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["simple-import-sort", "@typescript-eslint", "prettier"],
  extends: [
    "plugin:astro/recommended",
    "plugin:svelte/recommended",
    "prettier",
  ],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prettier/prettier": ["error"],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".svelte"],
      },
    },
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
  settings: {
    "svelte3/typescript": true,
  },
};
