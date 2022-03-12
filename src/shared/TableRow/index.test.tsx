import { render, screen } from "@testing-library/react";

import TableRow from ".";

describe("Table Row Component", () => {
  let tableRow: HTMLTableRowElement;

  it("Renders correctly", () => {
    render(<TableRow>Data</TableRow>);
    tableRow = screen.getByRole("row", { name: /Data/i });
    expect(tableRow).toBeInTheDocument();
  });
});
