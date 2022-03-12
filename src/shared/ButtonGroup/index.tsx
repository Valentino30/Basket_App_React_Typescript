import { StyledButtonGroup } from "./styles";

type ButtonGroupProps = {
  children: React.ReactNode;
};

export default function ButtonGroup({ children }: ButtonGroupProps) {
  return <StyledButtonGroup>{children}</StyledButtonGroup>;
}
