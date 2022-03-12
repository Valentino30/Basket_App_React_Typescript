import { StyledParagraph } from "./styles";

type TextProps = {
  bold?: boolean;
  color?: string;
  children: string;
  marginLeft?: string;
  marginRight?: string;
};

export default function Text({
  marginRight,
  marginLeft,
  children,
  color,
  bold,
}: TextProps) {
  return (
    <StyledParagraph
      marginRight={marginRight}
      marginLeft={marginLeft}
      color={color}
      bold={bold}
    >
      {children}
    </StyledParagraph>
  );
}
