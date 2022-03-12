import { render, screen } from "@testing-library/react";

import Wrapper from ".";

describe("Wrapper Component", () => {
  let wrapper: HTMLDivElement;

  it("Renders correctly", () => {
    render(<Wrapper>Wrapper</Wrapper>);
    wrapper = screen.getByText("Wrapper");
    expect(wrapper).toBeInTheDocument();
  });
});
