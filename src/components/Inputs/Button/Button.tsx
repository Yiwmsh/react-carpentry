import React from "react";
import styled from "@emotion/styled";
import { SemanticColors } from "../../../types/Color";
import { useButton } from "react-aria";
import { AriaButtonProps } from "@react-types/button";
import { BORDER_ROUNDING } from "../../../consts/measurements";

const StyledButton = styled.button<{ visible: boolean; display: boolean }>`
  display: ${({ display }) => (display ? "inline-block" : "none")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  background-color: var(${SemanticColors.primary});
  font-weight: 600;
  color: var(${SemanticColors.altText});
  cursor: pointer;
  line-height: 1.5em;
  border-radius: ${BORDER_ROUNDING};
  border: transparent;
  padding: 0.5em 1em;
  text-decoration: none;

  &:hover {
    background-color: var(${SemanticColors.primaryActive});
  }
`;

export interface ButtonProps extends AriaButtonProps {
  visible?: boolean;
  display?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  visible,
  display,
  ...rest
}) => {
  const ref = React.useRef(null);
  const { buttonProps } = useButton(rest, ref);
  const { children } = rest;

  return (
    <StyledButton
      display={display ?? true}
      visible={visible ?? true}
      {...buttonProps}
      ref={ref}
    >
      {children}
    </StyledButton>
  );
};
