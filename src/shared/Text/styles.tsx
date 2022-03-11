import styled from "styled-components";

export const StyledParagraph = styled("p")<{ bold?: boolean }>`
  ${(props) =>
    props.bold &&
    `
    font-weight: bold;
  `}
`;
