import { render, RenderOptions } from "@testing-library/svelte";

import Details from "@/components/projects/Details.svelte";
import { agent } from "@/utils/agent";

const spy = vi.spyOn(agent, "get");

describe("Project details", () => {
  it("renders the content correctly", () => {
    // spy.mockResolvedValue("");
  });
});
