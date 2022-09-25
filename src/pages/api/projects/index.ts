import type { APIContext } from "astro";

import { getProjectDetails } from "@/backend/get-project-details";
import { externalProjects } from "@/utils/external";

export const get = async (context: APIContext): Promise<Response> => {
  const { name } = context.params;
  if (name && typeof name === "string") {
    const externalProject = externalProjects.find(
      (external) => external.name === name
    );

    const queryString = `${name} in:name user:${
      externalProject ? externalProject.owner : "louisandrew"
    }`;

    const projectDetails = await getProjectDetails(queryString, name);
    if (projectDetails) {
      return new Response(JSON.stringify(projectDetails), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify({ msg: "not found" }), { status: 404 });
  }

  return new Response(null, { status: 500 });
};
