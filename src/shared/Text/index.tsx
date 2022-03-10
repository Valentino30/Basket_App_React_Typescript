type TextProps = {
  children: string;
};

export default function Text({ children }: TextProps) {
  return <p>{children}</p>;
}
