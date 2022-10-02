import { externalProjects } from "@/utils/external";
import {
  getPinnedItems,
  getRepository,
  getUserRepositories,
} from "@/utils/graphql";
import type { Edge, GitHubRepositoryInfo, RepositoryInfo } from "@/utils/types";

import { gql } from "./github";

type UserRepositoryInfoQuery = {
  search: {
    edges: Edge<GitHubRepositoryInfo>[];
  };
};

type PinnedItemsQuery = {
  user: {
    pinnedItems: {
      edges: Edge<{ name: string }>[];
    };
  };
};

const mapRepositoryInfo = (repo: GitHubRepositoryInfo): RepositoryInfo => {
  return {
    ...repo,
    languages: repo.languages.edges.map(({ node }) => node),
    highlight: false,
  };
};

export const getUserRepositoriesInfo = async (): Promise<RepositoryInfo[]> => {
  try {
    const {
      search: { edges },
    } = await gql<UserRepositoryInfoQuery>(getUserRepositories);

    return edges.map(({ node }) => mapRepositoryInfo(node));
  } catch {
    return [];
  }
};

export const getMonorepoInfo = async () => {};

export const getExternalRepositoriesInfo = async (): Promise<
  RepositoryInfo[]
> => {
  try {
    const requests = externalProjects
      .map(async ({ name, owner }) => {
        try {
          const { repository } = await gql<{
            repository: GitHubRepositoryInfo | null;
          }>(getRepository, { name, owner });

          return repository ? mapRepositoryInfo(repository) : null;
        } catch {
          return null;
        }
      })
      .filter((s) => !!s) as Promise<RepositoryInfo>[];

    return Promise.all(requests);
  } catch {
    return [];
  }
};

export const getHighlights = async () => {
  try {
    const {
      user: { pinnedItems },
    } = await gql<PinnedItemsQuery>(getPinnedItems);
    return pinnedItems.edges.map((edge) => edge.node.name);
  } catch {
    return [];
  }
};

export const getRepositories = async () => {
  const repositories = await Promise.all([
    getUserRepositoriesInfo(),
    getExternalRepositoriesInfo(),
  ]);

  const highlights = await getHighlights();

  return repositories.flat().map((repo) => ({
    ...repo,
    highlight: highlights.includes(repo.name),
  }));
};

export const setRepositoryOrder = (repo: RepositoryInfo) => {
  if (repo.highlight) {
    return 3;
  }

  if (repo.description) {
    return 2;
  }

  return 1;
};
