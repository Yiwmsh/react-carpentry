import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import { OverlayProvider } from "react-aria";
import {
  SCROLL_BAR_WIDTH,
  VIEW_PORT_WIDTH,
} from "../consts/internal/measurements";
import { SemanticColors } from "../types/Color";
import { Theme } from "../types/Theme";

// TODO Error color is not being defaulted or injected or something.

const ThemeContextCSS = styled.div<{
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
      ${SemanticColors.error}: ${theme.palette.error};

      ${VIEW_PORT_WIDTH}: calc(100vw - var(${SCROLL_BAR_WIDTH}));
    `;
  }}
`;

export const ThemeContext: React.FC<{
  theme: Theme;
  children?: React.ReactNode;
}> = ({ theme, children }) => {
  const scrollbarWidth = window.innerWidth - document.body.clientWidth;
  document.body.style.setProperty(SCROLL_BAR_WIDTH, `${scrollbarWidth}`);
  document.body.style.setProperty("padding", "0px");

  return (
    <ThemeContextCSS theme={theme}>
      <OverlayProvider>{children}</OverlayProvider>
    </ThemeContextCSS>
  );
};
