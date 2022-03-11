import styled from "styled-components";

export const StyledParagraph = styled.p<{ bold?: boolean; color?: string }>`
  font-weight: ${({ bold }) => bold && "bold"};
  color: ${({ color }) => color && color};
`;
