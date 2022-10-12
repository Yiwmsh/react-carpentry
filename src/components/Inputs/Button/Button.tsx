import React from "react";
import styled from "@emotion/styled";
import { SemanticColors } from "../../../types/Color";
import { useButton } from "react-aria";
import { AriaButtonProps } from "@react-types/button";
import { BORDER_ROUNDING } from "../../../consts/measurements";
import { motion } from "framer-motion/dist/framer-motion";

const StyledButton = styled(motion.button)<{
  visible: boolean;
  display: boolean;
}>`
  display: ${({ display }) => (display ? "inline-block" : "none")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  font-weight: 600;
  color: var(${SemanticColors.altText});
  cursor: pointer;
  line-height: 1.5em;
  border-radius: ${BORDER_ROUNDING};
  border: transparent;
  padding: 0.5em 1em;
  text-decoration: none;

  :focus {
    border: none;
    outline: none;
  }
`;

export interface ButtonProps extends AriaButtonProps {
  visible?: boolean;
  display?: boolean;
  secondaryColor?: boolean;
  unstyled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  visible,
  display,
  secondaryColor,
  unstyled,
  ...rest
}) => {
  const ref = React.useRef(null);
  const { buttonProps, isPressed } = useButton(rest, ref);
  const { children } = rest;

  const defaultColor = secondaryColor
    ? SemanticColors.secondary
    : SemanticColors.primary;
  const activeColor = secondaryColor
    ? SemanticColors.secondaryActive
    : SemanticColors.primaryActive;
  const disabledColor = secondaryColor
    ? SemanticColors.secondaryDisabled
    : SemanticColors.primaryDisabled;

  return unstyled ? (
    <StyledButton
      display={display ?? true}
      visible={visible ?? true}
      ref={ref}
      {...rest}
      {...buttonProps}
    />
  ) : (
    <StyledButton
      initial={{
        scale: 1,
        backgroundColor: `var(${defaultColor})`,
      }}
      whileHover={{
        scale: 1.05,
        backgroundColor: `var(${activeColor})`,
      }}
      whileFocus={{
        scale: 1.05,
        backgroundColor: `var(${activeColor})`,
      }}
      whileTap={{
        scale: 0.95,
        backgroundColor: `var(${disabledColor})`,
      }}
      display={display ?? true}
      visible={visible ?? true}
      ref={ref}
      {...rest}
      {...buttonProps}
    />
  );
};
