import { StyledHeader } from "./styles";

type HeaderProps = {
  children: string;
};

export default function Header({ children }: HeaderProps) {
  return <StyledHeader>{children}</StyledHeader>;
}
