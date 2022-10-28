import React from "react";
import styled from "@emotion/styled";
import { SemanticColors } from "../../../types/Color";
import { useButton } from "react-aria";
import { AriaButtonProps } from "@react-types/button";
import { BORDER_ROUNDING } from "../../../consts/internal/measurements";
import { motion } from "framer-motion";

const ButtonStyle = styled(motion.div)<{
  visible: boolean;
  display: boolean;
}>`
  display: ${({ display }) => (display ? "inline-block" : "none")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  cursor: pointer;
  border-radius: ${BORDER_ROUNDING};
`;

const HiddenButton = styled.button`
  background-color: transparent;
  line-height: 1.5em;
  text-decoration: none;
  padding: 0.5em 1em;
  border: transparent;
  color: var(${SemanticColors.altText});
  font-weight: 600;
  cursor: pointer;

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
    <ButtonStyle
      {...animations}
      display={display ?? true}
      visible={visible ?? true}
    >
      <HiddenButton ref={ref} {...rest} {...buttonProps} />
    </ButtonStyle>
  );
};
