import Comp from "@components/Comp.svelte";
import { render } from "@testing-library/svelte";

describe("Component", () => {
  it("renders", () => {
    const { getByRole } = render(Comp);

    expect(getByRole("button")).toBeTruthy();
  });
});
