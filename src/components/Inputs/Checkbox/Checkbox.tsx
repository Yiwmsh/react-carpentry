import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion/dist/framer-motion";
import React from "react";
import styled from "@emotion/styled";
import {
  AriaCheckboxProps,
  useCheckbox,
  useFocusRing,
  VisuallyHidden,
} from "react-aria";
import { useToggleState } from "react-stately";
import { SemanticColors } from "../../../types/Color";

const Checkmark = styled(motion.path)`
  stroke: var(${SemanticColors.primary});
`;

const Box = styled(motion.path)`
  stroke: var(${SemanticColors.text});

  &:hover,
  :active {
    stroke: var(${SemanticColors.primary});
  }
`;

const CheckmarkContainer = styled(motion.svg)`
  cursor: pointer;
  stroke: var(${SemanticColors.text});

  :hover > ${Box} {
    stroke: var(${SemanticColors.primary});
  }
`;

const boxPath =
  "M 5.94 2.7 C 4.32 2.7 2.7 4.32 2.7 5.94 V 15.66 C 2.7 17.28 4.32 18.9 5.94 18.9 H 15.66 C 17.28 18.9 18.9 17.28 18.9 15.66 V 5.94 C 18.9 4.32 17.28 2.7 15.66 2.7 H 5.85";

const checkPath = "M 5 10 L 9 15 L 17 6";

const boxVariants = {
  hover: { scale: 1.15, strokeWidth: 2.5 },
  pressed: { scale: 0.95, strokeWidth: 1.5 },
};

const checkVariants = {
  checked: {
    pathLength: 1,
    transition: { duration: 0.2 },
  },
  unchecked: {
    pathLength: 0,
    transition: { duration: 0.2 },
  },
};

export const Checkbox: React.FC<AriaCheckboxProps> = (props) => {
  const { children } = props;
  const state = useToggleState(props);
  const ref = React.useRef(null);
  const { inputProps } = useCheckbox(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const isSelected = state.isSelected && !props.isIndeterminate;

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        opacity: props.isDisabled ? 0.4 : 1,
      }}
    >
      <VisuallyHidden>
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      <CheckmarkContainer
        width={24}
        height={24}
        aria-hidden="true"
        style={{ marginRight: 4 }}
        initial={false}
        animate={isSelected ? "checked" : "unchecked"}
        whileTap="pressed"
        whileHover="hover"
      >
        <Box
          d={boxPath}
          fill="transparent"
          strokeWidth="2"
          stroke="#000000"
          variants={boxVariants}
        />
        <Checkmark
          d={checkPath}
          strokeWidth={2}
          fill="transparent"
          variants={checkVariants}
        />
      </CheckmarkContainer>
      {children}
    </label>
  );
};
