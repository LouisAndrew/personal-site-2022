import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  // @ts-ignore
  auth: import.meta.env.GITHUB_ACCESS_TOKEN,
});

export const gql = octokit.graphql;
