import styled from "@emotion/styled";
import React from "react";
import { SemanticColors } from "../../../types/Color";

export const PageBody = styled.div`
  color: var(${SemanticColors.text});
  background-color: var(${SemanticColors.midground});
  margin: 0 15%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
