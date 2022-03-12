import styled from "styled-components";

import { TextProps } from ".";

export const StyledParagraph = styled.p<TextProps>`
  margin-right: ${({ marginRight }) => marginRight && marginRight};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  text-overflow: ${({ ellipsis }) => ellipsis && "ellipsis"};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  white-space: ${({ ellipsis }) => ellipsis && "nowrap"};
  overflow: ${({ ellipsis }) => ellipsis && "hidden"};
  width: ${({ ellipsis }) => ellipsis && "100px"};
  font-weight: ${({ bold }) => bold && "bold"};
  color: ${({ color }) => color && color};
`;
