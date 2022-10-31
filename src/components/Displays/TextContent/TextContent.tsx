import styled from "@emotion/styled";
import { SemanticColors } from "../../../types/Color";

export interface TextContentProps {
  altColor?: boolean;
  color?: SemanticColors;
}

export const TextContent = styled.div<TextContentProps>`
  height: min-content;
  width: min-content;
  margin: 0;
  color: var(
    ${({ altColor, color }) => {
      if (color) {
        return color;
      } else if (altColor) {
        return SemanticColors.altText;
      } else {
        return SemanticColors.text;
      }
    }}
  );
`;
