import { render } from "@testing-library/svelte";
import { repoInfos } from "test/fixture";

import Card from "@/components/project-info/Card.svelte";

describe("Project info card", () => {
  const repo = repoInfos[0];
  const renderComponent = () =>
    render(Card, {
      props: {
        repositoryInfo: repo,
      },
    });

  it("renders the name of the project", () => {
    const { getByText } = renderComponent();

    expect(getByText(repo.name)).toBeTruthy();
  });

  it("renders the description of the project if available", () => {
    const { getByText } = renderComponent();

    expect(getByText(repo.description!)).toBeTruthy();
  });

  it.skip("renders an identifier if the project should be highlighted", () => {});
});
