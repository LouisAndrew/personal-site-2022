import type { APIContext } from "astro";

import { gql } from "@/backend/github";

export const get = async (context: APIContext) => {
  console.log(process.env.GITHUB_ACCESS_TOKEN);
  const response = await gql(`
    query { 
      search(query: "Hidden stuff in:readme user:louisandrew", type: REPOSITORY, first: 100) {
        edges {
          node {
            ... on Repository {
              name
              url
            }
          }
        }
      }
    }`);

  return new Response(JSON.stringify(response));
};
