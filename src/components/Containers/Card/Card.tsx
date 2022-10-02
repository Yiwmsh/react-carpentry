import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { string } from "prop-types";
import { version } from "react";
import { BORDER_ROUNDING } from "../../../consts/measurements";
import { SemanticColors } from "../../../types/Color";

interface CardProps {
  maxWidth?: string;
  width?: string;
  maxHeight?: string;
  height?: string;
  centered?: "horizontally" | "vertically" | "both";
}

export const Card = styled.article<CardProps>`
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : ""}
  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : ""}
  ${({ maxWidth }) =>
    maxWidth
      ? css`
          max-width: ${maxWidth};
        `
      : ""}
  ${({ maxHeight }) =>
    maxHeight
      ? css`
          max-height: ${maxHeight};
        `
      : ""}
  ${({ centered }) =>
    centered
      ? css`
          position: absolute;
          ${centered !== "vertically"
            ? css`
                left: 50%;
              `
            : ""};
          ${centered !== "horizontally"
            ? css`
                top: 50%;
              `
            : ""}
          transform: translate(${centered !== "horizontally" ? `-50%,` : ""}
          ${centered != "vertically" ? `-50%` : ""});
        `
      : ""}
  overflow: hidden;
  border-radius: ${BORDER_ROUNDING};
  box-shadow: 0.125em 0.25em 1.25em var(${SemanticColors.shadow});
  background-color: var(${SemanticColors.foreground});
  margin: 0.5em;
`;
