import { fireEvent, render, screen } from "@testing-library/react";

import IconButton from ".";

describe("IconButton Component", () => {
  let button: HTMLButtonElement;
  const handleClick = jest.fn();

  it("Renders correctly", () => {
    render(<IconButton onClick={handleClick}>Icon</IconButton>);
    button = screen.getByRole("button", { name: /Icon/i });
    expect(button).toBeInTheDocument();
  });

  it("Calls handleClick prop when clicked", () => {
    render(<IconButton onClick={handleClick}>Icon</IconButton>);
    button = screen.getByRole("button", { name: /Icon/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
