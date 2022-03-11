import { StyledParagraph } from "./styles";

type TextProps = {
  children: string;
};

export default function Text({ children }: TextProps) {
  return <StyledParagraph>{children}</StyledParagraph>;
}
