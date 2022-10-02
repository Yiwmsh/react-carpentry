import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CardHeader = styled.div<{ centerContents?: boolean }>`
  ${({ centerContents = true }) =>
    centerContents
      ? css`
          text-align: center;
        `
      : ""}
  margin: 0.25em;
`;
