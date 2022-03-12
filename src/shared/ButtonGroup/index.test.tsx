import { render, screen } from "@testing-library/react";

import ButtonGroup from ".";

describe("ButtonGroup Component", () => {
  let buttonGroup: HTMLDivElement;

  it("Renders correctly", () => {
    render(<ButtonGroup>ButtonGroup</ButtonGroup>);
    buttonGroup = screen.getByText("ButtonGroup");
    expect(buttonGroup).toBeInTheDocument();
  });
});
