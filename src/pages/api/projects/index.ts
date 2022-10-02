import {
  getRepositories,
  setRepositoryOrder,
} from "@/services/get-repository-info";

const thisProjectKey = "personal-site-2022";

export const get = async (): Promise<Response> => {
  try {
    const repositories = (await getRepositories())
      .map((repo) => ({
        ...repo,
        order: setRepositoryOrder(repo),
      }))
      .filter(({ name }) => name !== thisProjectKey);

    return new Response(
      JSON.stringify([...repositories].sort((a, b) => b.order - a.order)),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    return new Response(JSON.stringify(e), {
      status: 400,
    });
  }
};
