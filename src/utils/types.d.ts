export type Edge<T> = {
  node: T;
};

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
  polyrepo?: Polyrepo[];
}

export type LanguageNode = {
  name: string;
  color: string;
};

export type CollaboratorNode = {
  name: string | null;
  url: string;
  email: string;
  avatarUrl: string;
  login: string;
};

export interface Repository {
  name: string;
  url: string;
}

export interface RepositoryDetails extends Repository {
  resourcePath: string;
  createdAt: string;
  updatedAt: string;
  defaultBranchRef: {
    name: string;
  };
  homepageUrl: string;
  languages: {
    edges: Edge<LanguageNode>[];
  };
  collaborators: {
    edges: Edge<CollaboratorNode>[];
  };
}

export interface SanitizedRepositoryDetails
  extends Pick<
    RepositoryDetails,
    | "defaultBranchRef"
    | "resourcePath"
    | "name"
    | "url"
    | "homepageUrl"
    | "createdAt"
    | "updatedAt"
  > {
  languages: LanguageNode[];
  collaborators: CollaboratorNode[];
}

export interface ExternalProject {
  name: string;
  owner: string;
  repo: string;
}

export interface ProjectDetails extends SanitizedRepositoryDetails {
  metadata?: Metadata;
  contentBaseUrl: string;
}
