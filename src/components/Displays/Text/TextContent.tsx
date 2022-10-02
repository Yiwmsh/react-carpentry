import styled from "@emotion/styled";
import { SemanticColors } from "../../../types/Color";

export const TextContent = styled.div<{
  altColor?: boolean;
  color?: SemanticColors;
}>`
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
