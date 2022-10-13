import styled from "@emotion/styled";
import { Color, SemanticColors } from "../../types/Color";

export const PageSplashSimulator = styled.div<{ backgroundColor?: Color }>`
  width: 100vw;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? `var(${SemanticColors.background})`};
  height: 100vh;
`;
