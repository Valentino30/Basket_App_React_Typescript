import { render, screen } from "@testing-library/react";

import Header from ".";

describe("Header Component", () => {
  let header: HTMLHeadingElement;

  it("Renders correctly", () => {
    render(<Header>Header</Header>);
    header = screen.getByRole("heading", { name: /Header/i });
    expect(header).toBeInTheDocument();
  });
});
