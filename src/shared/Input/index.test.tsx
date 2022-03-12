import { fireEvent, render, screen } from "@testing-library/react";

import Input from ".";

describe("Input Component", () => {
  let input: HTMLInputElement;
  const handleChange = jest.fn();

  it("Renders correctly", () => {
    render(<Input value={1} onChange={handleChange} />);
    input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });

  it("Calls handleChange prop on change event", () => {
    render(<Input value={1} onChange={handleChange} />);
    input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: 5 } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
