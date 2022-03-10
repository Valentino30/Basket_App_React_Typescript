type ListItemProps = {
  children: React.ReactNode;
};

export default function ListItem({ children }: ListItemProps) {
  return <li>{children}</li>;
}
