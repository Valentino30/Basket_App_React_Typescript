import { render, screen } from "@testing-library/react";

import Text from ".";

describe("Text Component", () => {
  let text: HTMLParagraphElement;

  it("Renders correctly", () => {
    render(<Text>Text</Text>);
    text = screen.getByText("Text");
    expect(text).toBeInTheDocument();
  });
});
