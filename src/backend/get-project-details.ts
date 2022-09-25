import { gql } from "@/backend/github";
import { agent } from "@/utils/agent";
import { projectDetailsQuery } from "@/utils/graphql";
import type {
  Edge,
  Metadata,
  ProjectDetails,
  RepositoryDetails,
} from "@/utils/types";

type GithubAPIReturnType = {
  repository: RepositoryDetails | null;
};

export const getProjectDetails = async (
  owner: string,
  name: string
): Promise<ProjectDetails | null> => {
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

        return {
          ...repo,
          contentBaseUrl,
          metadata,
          languages,
          collaborators,
        };
      }
    }
  } catch {
    return null;
  }

  return null;
};
