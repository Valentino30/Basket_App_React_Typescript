import { render, screen } from "@testing-library/react";

import TableData from ".";

describe("Table Data Component", () => {
  let tableData: HTMLTableCellElement;

  it("Renders correctly", () => {
    render(<TableData>Data</TableData>);
    tableData = screen.getByRole("cell", { name: /Data/i });
    expect(tableData).toBeInTheDocument();
  });
});
