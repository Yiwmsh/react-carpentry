import React from "react";
import styled from "@emotion/styled";
import { SemanticColors } from "../../../types/Color";
import { useButton } from "react-aria";
import { AriaButtonProps } from "@react-types/button";
import { BORDER_ROUNDING } from "../../../consts/internal/measurements";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
  background-color: transparent;
  border: transparent;
  border-radius: ${BORDER_ROUNDING};
  padding: 0.5em 1em;
  font-weight: 600;
  line-height: 1.5em;
  cursor: pointer;
  color: var(${SemanticColors.altText});

  font-size: 0.9em;
  border-radius: ${BORDER_ROUNDING};
  border: transparent;
  text-decoration: none;
  :focus {
    border: none;
    outline: none;
  }
`;

export interface ButtonProps extends AriaButtonProps {
  secondaryColor?: boolean;
  unstyled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  secondaryColor,
  unstyled,
  ...rest
}) => {
  const ref = React.useRef(null);
  const { buttonProps } = useButton(rest, ref);

  const defaultColor = secondaryColor
    ? SemanticColors.secondary
    : SemanticColors.primary;
  const activeColor = secondaryColor
    ? SemanticColors.secondaryActive
    : SemanticColors.primaryActive;
  const disabledColor = secondaryColor
    ? SemanticColors.secondaryDisabled
    : SemanticColors.primaryDisabled;

  const animations = unstyled
    ? {}
    : {
        initial: {
          scale: 1,
          backgroundColor: `var(${defaultColor})`,
        },
        whileHover: {
          scale: 1.05,
          backgroundColor: `var(${activeColor})`,
        },
        whileFocus: {
          scale: 1.05,
          backgroundColor: `var(${activeColor})`,
        },
        whileTap: {
          scale: 0.95,
          backgroundColor: `var(${disabledColor})`,
        },
      };

  return (
    //@ts-ignore
    <StyledButton ref={ref} {...rest} {...buttonProps} {...animations} />
  );
};
