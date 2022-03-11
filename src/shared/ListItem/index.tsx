import { StyledListItem } from "./styles";

type ListItemProps = {
  children: React.ReactNode;
};

export default function ListItem({ children }: ListItemProps) {
  return <StyledListItem>{children}</StyledListItem>;
}
