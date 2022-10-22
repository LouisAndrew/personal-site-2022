import { gql } from "@/services/github";
import { getAvatarUrl } from "@/utils/graphql";

export async function get() {
  const {
    user: { avatarUrl },
  } = await gql<{ user: { avatarUrl: string } }>(getAvatarUrl);

  return new Response(
    JSON.stringify({
      avatarUrl,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
