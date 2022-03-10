type SpanProps = {
  children: string;
};

export default function Span({ children }: SpanProps) {
  return <span>{children}</span>;
}
