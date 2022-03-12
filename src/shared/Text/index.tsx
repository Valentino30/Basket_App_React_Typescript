import { StyledParagraph } from "./styles";

export type TextProps = {
  bold?: boolean;
  color?: string;
  children: string;
  ellipsis?: boolean;
  textAlign?: string;
  marginLeft?: string;
  marginRight?: string;
};

export default function Text({
  marginRight,
  marginLeft,
  textAlign,
  children,
  ellipsis,
  color,
  bold,
}: TextProps) {
  return (
    <StyledParagraph
      marginRight={marginRight}
      marginLeft={marginLeft}
      textAlign={textAlign}
      ellipsis={ellipsis}
      color={color}
      bold={bold}
    >
      {children}
    </StyledParagraph>
  );
}
