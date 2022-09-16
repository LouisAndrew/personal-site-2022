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
  search: {
    repositoryCount: number;
    edges: Edge<RepositoryDetails>[];
  };
};

export const getProjectDetails = async (
  queryString: string,
  name: string
): Promise<ProjectDetails | null> => {
  const {
    search: { edges },
  } = await gql<GithubAPIReturnType>(projectDetailsQuery, {
    queryString,
  });

  const repoNode = edges.find((edge) => edge.node.name === name);
  if (repoNode) {
    const { node: repo } = repoNode;

    if (name === repo.name) {
      const contentBaseUrl = `https://raw.githubusercontent.com${repo.resourcePath}/${repo.defaultBranchRef.name}`;
      let metadata = undefined;

      try {
        metadata = await agent
          .get(`${contentBaseUrl}/.metadata/metadata.json`)
          .json<Metadata>();
      } catch {}

      return {
        ...repo,
        contentBaseUrl,
        metadata,
      };
    }
  }

  return null;
};
