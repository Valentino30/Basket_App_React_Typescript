import { render, screen } from "@testing-library/react";

import Table from ".";
import TableData from "../TableData";
import TableRow from "../TableRow";

describe("Table Component", () => {
  let table: HTMLTableElement;

  it("Renders correctly", () => {
    render(
      <Table>
        <TableRow>
          <TableData>Data</TableData>
        </TableRow>
      </Table>
    );
    table = screen.getByRole("table");
    table = screen.getByRole("rowgroup");
    table = screen.getByRole("row", { name: /Data/i });
    table = screen.getByRole("cell", { name: /Data/i });
    expect(table).toBeInTheDocument();
  });
});
