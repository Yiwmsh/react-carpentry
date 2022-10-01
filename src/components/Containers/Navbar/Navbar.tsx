import styled from "@emotion/styled";
import { SemanticColors } from "../../../types/Color";
import { Primary } from "./Navbar.stories";

export const Navbar = styled.nav`
  width: 100vw;
  background-color: var(${SemanticColors.primary});
  position: sticky;
  top: 0px;
`;
