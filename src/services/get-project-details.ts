import { gql } from "@/services/github";
import { agent } from "@/utils/agent";
import { projectDetailsQuery } from "@/utils/graphql";
import type {
  Edge,
  Metadata,
  ProjectDetails,
  RepositoryDetails,
} from "@/utils/types";

import cache, { KEYS } from "./cache";

type GithubAPIReturnType = {
  repository: RepositoryDetails | null;
};

export const getProjectDetails = async (
  owner: string,
  name: string
): Promise<ProjectDetails | null> => {
  const cacheKey = `${KEYS.PROJECT_DETAILS}--${name}--${owner}`;

  const cachedDetails = cache.get<ProjectDetails>(cacheKey);
  if (cachedDetails) {
    return cachedDetails;
  }

  try {
    const { repository: repo } = await gql<GithubAPIReturnType>(
      projectDetailsQuery,
      {
        name,
        owner,
      }
    );

    if (repo) {
      if (name === repo.name) {
        const contentBaseUrl = `https://raw.githubusercontent.com${repo.resourcePath}/${repo.defaultBranchRef.name}`;
        let metadata = undefined;

        try {
          metadata = await agent
            .get(`${contentBaseUrl}/.metadata/metadata.json`)
            .json<Metadata>();
        } catch {}

        const languages = repo.languages.edges.map(({ node }) => node);
        const collaborators = repo.collaborators.edges
          .filter(
            ({ node: { url } }) => url !== "https://github.com/LouisAndrew"
          )
          .map(({ node }) => node);

        const projectDetails = {
          ...repo,
          contentBaseUrl,
          metadata,
          languages,
          collaborators,
        };

        cache.set(cacheKey, projectDetails);

        return projectDetails;
      }
    }
  } catch {
    return null;
  }

  return null;
};

export const clearCachedDetails = async (owner: string, name: string) => {
  const cacheKey = `${KEYS.PROJECT_DETAILS}--${name}--${owner}`;
  cache.del(cacheKey);
};
