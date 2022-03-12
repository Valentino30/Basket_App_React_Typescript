import { StyledTable } from "./styles";

type TableProps = {
  children: React.ReactNode;
};

export default function Table({ children }: TableProps) {
  return (
    <StyledTable>
      <tbody>{children}</tbody>
    </StyledTable>
  );
}
