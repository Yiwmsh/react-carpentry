import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import React from "react";
import { SemanticColors } from "../../../../../types/Color";
import { ScrollToButton, ScrollToButtonProps } from "../ScrollToButton";

const StyledScrollToTopButton = styled(ScrollToButton)`
  position: fixed;
  bottom: 1em;
  right: 1em;
  border-radius: 100%;
  text-align: center;
  font-size: 2em;
  padding: 0;
  background-color: transparent;
`;

export const ScrollToTopButton: React.FC<
  Omit<ScrollToButtonProps, "scrollTarget">
> = (buttonProps) => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const upArrow = <>&uarr;</>;

  window.addEventListener("scroll", toggleVisible);

  return (
    <AnimatePresence>
      {visible && (
        <StyledScrollToTopButton unstyled scrollTarget={0} {...buttonProps}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{
              color: `var(${SemanticColors.primary})`,
              transition: {
                duration: 0.2,
              },
            }}
          >
            {upArrow}
          </motion.div>
        </StyledScrollToTopButton>
      )}
    </AnimatePresence>
  );
};
