import { APIContext } from "astro";

export async function get(context: APIContext) {
  return new Response(
    JSON.stringify({
      githubRepository: "ok",
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
