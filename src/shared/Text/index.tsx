import { StyledParagraph } from "./styles";

type TextProps = {
  children: string;
  bold?: boolean;
};

export default function Text({ children, bold = false }: TextProps) {
  return <StyledParagraph bold={bold}>{children}</StyledParagraph>;
}
