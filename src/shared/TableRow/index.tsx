import { StyledTableRow } from "./styles";

type TableRowProps = {
  children: React.ReactNode;
};

export default function TableRow({ children }: TableRowProps) {
  return <StyledTableRow>{children}</StyledTableRow>;
}
