export interface Assets {
  previewImage: string;
  images: string[];
  videos: string[];
}

export interface Polyrepo {
  deployedUrl: string;
  projectUrl: string;
  tag: string;
}

export interface Metadata {
  moreInfoPath?: string;
  tags: string[];
  projectUrl?: string;
  type: "single" | "polyrepo";
  assets: Assets;
  polyrepo?: Polyrepo;
}

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

export interface ExternalProject {
  name: string;
  owner: string;
  repo: string;
}

export interface ProjectDetails extends RepositoryDetails {
  metadata?: Metadata;
  contentBaseUrl: string;
}

export type Edge<T> = {
  node: T;
};
