import type { APIContext } from "astro";

import { gql } from "@/services/github";
import { searchProjectsQuery } from "@/utils/graphql";

export const get = async (context: APIContext) => {
  const response = await gql(searchProjectsQuery);

  return new Response(JSON.stringify(response));
};
