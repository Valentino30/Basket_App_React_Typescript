import { fireEvent, render, screen } from "@testing-library/react";

import Button from ".";

describe("Button Component", () => {
  let button: HTMLButtonElement;
  const handleClick = jest.fn();

  it("Renders correctly", () => {
    render(<Button onClick={handleClick}>Click Me</Button>);
    button = screen.getByRole("button", { name: /Click Me/i });
    expect(button).toBeInTheDocument();
  });

  it("Calls handleClick prop when clicked", () => {
    render(<Button onClick={handleClick}>Click Me</Button>);
    button = screen.getByRole("button", { name: /Click Me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
