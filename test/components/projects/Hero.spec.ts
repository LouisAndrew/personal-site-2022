import { render, RenderOptions } from "@testing-library/svelte";

import Hero from "@/components/projects/Hero.svelte";

import { projectDetails } from "../../fixture";

describe("Projects hero component", () => {
  const renderComponent = (options: RenderOptions<Hero> = {}) =>
    render(Hero, {
      props: {
        projectDetails,
      },
    });

  it("renders the preview image of the project", () => {
    const { getByRole } = renderComponent();

    expect(getByRole("img")).toBeTruthy();
    expect(getByRole("img").getAttribute("src")).toEqual(
      projectDetails.metadata?.assets.previewImage!
    );
  });

  it("renders the date of when the repository is created", () => {
    const { getByText } = renderComponent();

    expect(getByText("Created at")).toBeTruthy();
    expect(getByText("21.08.2020")).toBeTruthy();
  });

  it("renders the date of when the repository is last updated", () => {
    const { getByText } = renderComponent();

    expect(getByText("Last updated at")).toBeTruthy();
    expect(getByText("16.09.2022")).toBeTruthy();
  });
});
