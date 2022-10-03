import NodeCache from "node-cache";

const cache = new NodeCache({
  stdTTL: 60 * 60 * 48,
});

export const KEYS = {
  ALL_REPOS: "all_repos",
  PROJECT_DETAILS: "project_details",
};

export default cache;
