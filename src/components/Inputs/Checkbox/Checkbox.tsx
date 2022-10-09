import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion/dist/framer-motion";
import React from "react";
import {
  AriaCheckboxProps,
  useCheckbox,
  useFocusRing,
  VisuallyHidden,
} from "react-aria";
import { useToggleState } from "react-stately";

export const Checkbox: React.FC<AriaCheckboxProps> = (props) => {
  const { children } = props;
  const state = useToggleState(props);
  const ref = React.useRef(null);
  const { inputProps } = useCheckbox(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const isSelected = state.isSelected && !props.isIndeterminate;

  const boxVariants = {
    hover: { scale: 1.1, strokeWidth: 3 },
    pressed: { scale: 0.95, strokeWidth: 1 },
  };

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
      <motion.svg
        width={24}
        height={24}
        aria-hidden="true"
        style={{ marginRight: 4 }}
        initial={false}
        animate={isSelected ? "selected" : "unselected"}
        whileTap="pressed"
        whileHover="hover"
      >
        <motion.path
          d="M 5.94 2.7 C 4.32 2.7 2.7 4.32 2.7 5.94 V 15.66 C 2.7 17.28 4.32 18.9 5.94 18.9 H 15.66 C 17.28 18.9 18.9 17.28 18.9 15.66 V 5.94 C 18.9 4.32 17.28 2.7 15.66 2.7 H 5.85"
          fill="transparent"
          strokeWidth="2"
          stroke="#000000"
          variants={boxVariants}
        />
        {isSelected && (
          <motion.path
            transform="translate(7 7)"
            d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`}
          />
        )}
        {props.isIndeterminate && (
          <motion.rect x={7} y={11} width={10} height={2} fill="gray" />
        )}
        {isFocusVisible && (
          <motion.rect
            x={1}
            y={1}
            width={22}
            height={22}
            fill="none"
            stroke="orange"
            strokeWidth={2}
          />
        )}
      </motion.svg>
      {children}
    </label>
  );
};
