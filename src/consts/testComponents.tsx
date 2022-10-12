import styled from "@emotion/styled";
import { Color, SemanticColors } from "../types/Color";

export const PageSplashSimulator = styled.div<{ backgroundColor?: Color }>`
  width: 100vw;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? `var(${SemanticColors.background})`};
  height: 100vh;
`;

export const testImgSrc =
  "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
