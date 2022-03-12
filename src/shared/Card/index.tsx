import { StyledDiv } from "./styles";

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return <StyledDiv>{children}</StyledDiv>;
}
