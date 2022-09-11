import { render } from "@testing-library/svelte";

import Comp from "@/components/Comp.svelte";

describe("Component", () => {
  it("renders", () => {
    const { getByRole } = render(Comp);

    expect(getByRole("button")).toBeTruthy();
  });
});
