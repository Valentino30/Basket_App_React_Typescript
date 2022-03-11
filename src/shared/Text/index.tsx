import { StyledParagraph } from "./styles";

type TextProps = {
  children: string;
  bold?: boolean;
  color?: string;
};

export default function Text({ children, bold = false, color }: TextProps) {
  return (
    <StyledParagraph color={color} bold={bold}>
      {children}
    </StyledParagraph>
  );
}
