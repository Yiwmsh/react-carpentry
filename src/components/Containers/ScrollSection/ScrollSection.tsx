import { css, PropsOf } from "@emotion/react";
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
  backgroundColor?: Color;
  backgroundImg?: string;
}

const StyledScrollSection = styled.section<{
  backgroundColor?: Color;
  backgroundImg?: string;
}>`
  height: 100vh;
  width: var(${VIEW_PORT_WIDTH});
  scroll-snap-align: center;

  margin: 5px 0;

  ${({ backgroundColor }) =>
    backgroundColor
      ? css`
          background-color: ${backgroundColor};
        `
      : ""}

  ${({ backgroundImg }) =>
    backgroundImg
      ? css`
          background-image: url(${backgroundImg});
        `
      : ""}
`;

export const ScrollSection: React.FC<ScrollSectionProps> = ({ ...props }) => {
  return <StyledScrollSection {...props} />;
};
