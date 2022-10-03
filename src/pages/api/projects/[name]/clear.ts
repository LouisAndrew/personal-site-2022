import type { APIContext } from "astro";

import {
  clearCachedDetails,
  getProjectDetails,
} from "@/services/get-project-details";
import { externalProjects } from "@/utils/external";

export const get = async (context: APIContext) => {
  const { name } = context.params;
  if (name && typeof name === "string") {
    const externalProject = externalProjects.find(
      (external) => external.name === name
    );

    const owner = externalProject ? externalProject.owner : "louisandrew";
    clearCachedDetails(owner, name);
    return new Response(null, {
      status: 204,
    });
  }

  return new Response(null, {
    status: 400,
  });
};
