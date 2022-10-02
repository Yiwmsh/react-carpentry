import styled from "@emotion/styled";
import { SemanticColors } from "../../../types/Color";

export const ScreenFrame = styled.div`
  background-color: var(${SemanticColors.background});
  color: var(${SemanticColors.text});
  min-width: 100vw;
  min-height: 100vh;
`;
