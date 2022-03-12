import { render, screen } from "@testing-library/react";

import Card from ".";

describe("Card Component", () => {
  let card: HTMLDivElement;

  it("Renders correctly", () => {
    render(<Card>Card</Card>);
    card = screen.getByText("Card");
    expect(card).toBeInTheDocument();
  });
});
