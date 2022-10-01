import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import { SemanticColors } from "../types/Color";
import { Theme } from "../types/Theme";

export const ThemeProvider = styled.div<{
  theme: Theme;
}>`
  ${({ theme }) => {
    return css`
      ${SemanticColors.altText}: ${theme.palette.altText};
      ${SemanticColors.text}: ${theme.palette.text};
      ${SemanticColors.background}: ${theme.palette.background};
      ${SemanticColors.foreground}: ${theme.palette.foreground};
      ${SemanticColors.midground}: ${theme.palette.midground};
      ${SemanticColors.primary}: ${theme.palette.primary};
      ${SemanticColors.primaryActive}: ${theme.palette.primaryActive};
      ${SemanticColors.primaryDisabled}: ${theme.palette.primaryDisabled};
      ${SemanticColors.secondary}: ${theme.palette.secondary};
      ${SemanticColors.secondaryActive}: ${theme.palette.secondaryActive};
      ${SemanticColors.secondaryDisabled}: ${theme.palette.secondaryDisabled};
      ${SemanticColors.shadow}: ${theme.palette.shadow};
    `;
  }}
`;
