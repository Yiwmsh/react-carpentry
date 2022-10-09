import { css } from "@emotion/react";
import { SemanticColors } from "../types/Color";

export const focusBorder = css`
  &:focus {
    border-color: var(${SemanticColors.primaryActive});
  }
`;
