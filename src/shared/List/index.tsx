import { StyledList } from "./styles";

type ListProps = {
  children: React.ReactNode;
};

export default function List({ children }: ListProps) {
  return <StyledList>{children}</StyledList>;
}
