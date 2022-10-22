import type { RepositoryInfo } from "./types";

type ProjectGroups = {
  highlights: RepositoryInfo[];
  additional: RepositoryInfo[];
  others: RepositoryInfo[];
};

export const groupProjects = (projects: RepositoryInfo[]): ProjectGroups =>
  projects.reduce(
    (prev: ProjectGroups, current) => {
      if (current.highlight) {
        return {
          ...prev,
          highlights: [...prev.highlights, current],
        };
      }

      if (current.description) {
        return {
          ...prev,
          additional: [...prev.additional, current],
        };
      }

      return {
        ...prev,
        others: [...prev.others, current],
      };
    },
    {
      highlights: [],
      additional: [],
      others: [],
    }
  );
