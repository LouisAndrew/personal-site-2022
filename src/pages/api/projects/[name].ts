import type { APIContext } from "astro";

import { gql } from "@/backend/github";
import { projectDetailsQuery } from "@/utils/graphql";
import type { Edge, RepositoryDetails } from "@/utils/types";

type GithubAPIReturnType = {
  search: {
    repositoryCount: number;
    edges: Edge<RepositoryDetails>[];
  };
};

export const get = async (context: APIContext) => {
  const { name } = context.params;
  const externalRepo = false;
  if (name && !externalRepo) {
    const queryString = `${name} in:name user:louisandrew`;

    const {
      search: { repositoryCount, edges },
    } = await gql<GithubAPIReturnType>(projectDetailsQuery, {
      queryString,
    });

    const repo = edges.pop()?.node;
    if (repositoryCount === 1 && repo) {
      if (name === repo.name) {
        const contentBaseUrl = `https://raw.githubusercontent.com${repo.resourcePath}/${repo.defaultBranchRef.name}`;
        return new Response(
          JSON.stringify({
            ...repo,
            contentBaseUrl,
          })
        );
      }
    }

    return new Response(JSON.stringify({ msg: "not found" }), { status: 404 });
  }

  return new Response(null, { status: 500 });
};
