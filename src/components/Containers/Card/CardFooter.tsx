import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CardFooter = styled.div<{ centerContents?: boolean }>`
  ${({ centerContents = true }) =>
    centerContents
      ? css`
          text-align: center;
        `
      : ""}
  margin: 0.25em;
`;
