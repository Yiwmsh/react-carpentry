import styled from "@emotion/styled";

export const Title = styled.h1<{ sticky?: boolean }>`
  position: ${({ sticky }) => (sticky ? "sticky" : "static")};
  overflow: hidden;
  top: 1em;
  text-align: center;
  font-size: 4em;
`;
