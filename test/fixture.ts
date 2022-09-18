import type { ProjectDetails } from "@/utils/types";

export const projectDetails: ProjectDetails = {
  name: "etheral",
  resourcePath: "/etheralmade/etheral",
  url: "https://github.com/etheralmade/etheral",
  homepageUrl: "https://etheralmade.com",
  defaultBranchRef: {
    name: "master",
  },
  languages: [
    {
      name: "JavaScript",
      color: "#f1e05a",
    },
    {
      name: "TypeScript",
      color: "#3178c6",
    },
    {
      name: "CSS",
      color: "#563d7c",
    },
    {
      name: "SCSS",
      color: "#c6538c",
    },
  ],
  collaborators: [
    {
      name: null,
      url: "https://github.com/LouisAndrew",
      email: "",
      avatarUrl:
        "https://avatars.githubusercontent.com/u/61015467?u=f5708c1ea909d49b9cbc97d506a9c9c910bb80bb&v=4",
      login: "LouisAndrew",
    },
    {
      name: null,
      url: "https://github.com/etheralmade",
      email: "",
      avatarUrl: "https://avatars.githubusercontent.com/u/72875600?v=4",
      login: "etheralmade",
    },
  ],
  contentBaseUrl:
    "https://raw.githubusercontent.com/etheralmade/etheral/master",
  metadata: {
    moreInfoPath:
      "https://raw.githubusercontent.com/etheralmade/etheral/master/.metadata/info.md",
    tags: ["react", "firebase"],
    projectUrl: "https://github.com/etheralmade/etheral",
    type: "single",
    assets: {
      previewImage:
        "https://raw.githubusercontent.com/LouisAndrew/portfolio/master/static/img/etheral__main-mailinglist.png",
      images: [
        "https://raw.githubusercontent.com/LouisAndrew/portfolio/master/static/img/etheral__main-dropdown.png",
      ],
      videos: [
        "https://raw.githubusercontent.com/LouisAndrew/portfolio/master/static/img/vid_20210102_173057.mp4",
      ],
    },
  },
};
