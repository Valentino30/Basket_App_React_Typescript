import { StyledIconButton } from "./styles";

type StyledIconButtonProps = {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function IconButton({ children, onClick }: StyledIconButtonProps) {
  return <StyledIconButton onClick={onClick}>{children}</StyledIconButton>;
}
