import styled from "styled-components";

export const StyledParagraph = styled.p<{
  bold?: boolean;
  color?: string;
  marginLeft?: string;
  marginRight?: string;
}>`
  margin-right: ${({ marginRight }) => marginRight && marginRight};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  font-weight: ${({ bold }) => bold && "bold"};
  color: ${({ color }) => color && color};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100px;
`;
