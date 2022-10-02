import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SemanticColors } from "../../../types/Color";

export const CardToolbar = styled.div<{
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  backgroundColor?: SemanticColors;
  textColor?: SemanticColors;
  border?: boolean;
}>`
  justify-content: ${({ justifyContent }) => justifyContent ?? "flex-start"};
  background-color: var(
    ${({ backgroundColor = SemanticColors.primary }) => backgroundColor}
  );
  color: var(${({ textColor = SemanticColors.altText }) => textColor});
  width: 100%;
  line-height: 2em;
  display: flex;
  flex-direction: row;
  ${({ border }) =>
    border
      ? css`
          border-bottom: 1px solid var(${SemanticColors.text});
        `
      : ""}
`;
