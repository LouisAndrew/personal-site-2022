import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  // @ts-ignore
  auth: import.meta.env.GITHUB_ACCESS_TOKEN,
});
console.log("creating");

export const gql = octokit.graphql;
