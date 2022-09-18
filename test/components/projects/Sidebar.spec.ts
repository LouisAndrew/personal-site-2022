import { render, RenderOptions } from "@testing-library/svelte";

import Sidebar from "@/components/projects/Sidebar.svelte";
import type { Metadata } from "@/utils/types";

import { projectDetails } from "../../fixture";

describe("Projects sidebar", () => {
  const renderComponent = (options: RenderOptions = {}) =>
    render(Sidebar, {
      props: {
        projectDetails,
      },
      ...options,
    });

  it("renders an URL to visit the project site", () => {
    const { getByText } = renderComponent();

    const el = getByText("Visit project");
    expect(el).toBeTruthy();
    expect(el.getAttribute("href")).toEqual(projectDetails.homepageUrl);
  });

  it("renders an URL to visit the project's github repository", () => {
    const { getByText } = renderComponent();

    const el = getByText("Visit GitHub repository");
    expect(el).toBeTruthy();
    expect(el.getAttribute("href")).toEqual(projectDetails.url);
  });

  it.each(projectDetails.collaborators.map(({ url }) => [url]))(
    "renders other contributors to the project",
    (ghUrl) => {
      const { getAllByText } = renderComponent();

      expect(
        getAllByText("Visit GitHub profile").filter(
          (el) => el.getAttribute("href") === ghUrl
        )
      ).toHaveLength(1);
    }
  );

  const metadata = projectDetails.metadata!;

  it.each(metadata.tags.map((s) => [s]))(
    "renders the tags of the project",
    (tag) => {
      const { getByText } = renderComponent();
      expect(getByText(tag)).toBeTruthy();
    }
  );

  describe.skip("Polyrepo-projects", () => {
    const renderComponentWithPolyrepo = () => renderComponent();

    it("renders the main organization / project repository of the project");

    it("renders the list of repositories of the project");

    it("renders a tag that describes the polyrepository structure");
  });
});
