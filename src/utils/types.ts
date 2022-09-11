export interface Repository {
  name: string;
  url: string;
}

export interface RepositoryDetails extends Repository {
  resourcePath: string;
  defaultBranchRef: {
    name: string;
  };
}

export type Edge<T> = {
  node: T;
};
