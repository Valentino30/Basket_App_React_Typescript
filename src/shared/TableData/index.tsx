import { StyledTableData } from "./styles";

type TableDataProps = {
  children: React.ReactNode;
};

export default function TableData({ children }: TableDataProps) {
  return <StyledTableData>{children}</StyledTableData>;
}
