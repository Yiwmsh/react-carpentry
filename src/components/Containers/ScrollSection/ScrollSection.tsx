import { PropsOf } from "@emotion/react";
import styled from "@emotion/styled";
import { SectionElement } from "@react-types/shared";
import React from "react";
import { SectionProps } from "react-stately";
import { VIEW_PORT_WIDTH } from "../../../consts/measurements";

const StyledScrollSection = styled.section`
  height: 100vh;
  width: var(${VIEW_PORT_WIDTH});
  background-color: pink;
`;

export const ScrollSection: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ ...props }) => {
  return <StyledScrollSection {...props} />;
};
