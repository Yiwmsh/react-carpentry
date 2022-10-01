import styled from "@emotion/styled";
import { SemanticColors } from "../../../types/Color";
import { Primary } from "./Navbar.stories";

export const Navbar = styled.nav<{ position?: "sticky" | "fixed" }>`
  color: var(${SemanticColors.altText});
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: var(${SemanticColors.primary});
  position: ${({ position }) => position ?? "sticky"};
  top: 0px;
`;
