import { PropsOf } from "@emotion/react";
import styled from "@emotion/styled";
import { SectionElement } from "@react-types/shared";
import React from "react";
import { SectionProps } from "react-stately";
import { VIEW_PORT_WIDTH } from "../../../consts/measurements";
import { Color } from "../../../types/Color";

interface ScrollSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  backgroundColor: Color;
}

const StyledScrollSection = styled.section<{ backgroundColor: Color }>`
  height: 100vh;
  width: var(${VIEW_PORT_WIDTH});
  background-color: ${({ backgroundColor }) => backgroundColor};
  scroll-snap-align: center;
`;

export const ScrollSection: React.FC<ScrollSectionProps> = ({ ...props }) => {
  return <StyledScrollSection {...props} />;
};
