import { clearCachedRepositories } from "@/services/get-repository-info";

export const get = async (): Promise<Response> => {
  clearCachedRepositories();
  return new Response(null, {
    status: 204,
  });
};
