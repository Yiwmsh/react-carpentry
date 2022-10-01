import styled from "@emotion/styled";
import { BORDER_ROUNDING } from "../../../consts/measurements";
import { SemanticColors } from "../../../types/Color";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: ${BORDER_ROUNDING};
  box-shadow: 0.125em 0.25em 1.25em rgba(0, 0, 0, 0.08);
  background-color: var(${SemanticColors.foreground});
  margin: 0.5em;
  padding: 0 0.5em;
`;
