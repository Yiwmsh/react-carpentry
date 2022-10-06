import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CardBody = styled.div<{ centerContents?: boolean }>`
  ${({ centerContents = true }) =>
    centerContents
      ? css`
          text-align: center;
          justify-content: center;
        `
      : ""}
  display: flex;
  word-break: break-word;
  hyphens: auto;
  margin: 0.25em 2em;
`;
