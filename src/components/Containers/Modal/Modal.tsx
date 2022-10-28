import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import {
  FocusScope,
  OverlayContainer,
  useModal,
  useOverlay,
  usePreventScroll,
  AriaOverlayProps,
} from "react-aria";
import { OverlayTriggerState, useOverlayTriggerState } from "react-stately";
import React from "react";
import { Theme } from "../../../types";
import { ThemeContext } from "../../ThemeContext";

export interface ModalProps extends AriaOverlayProps {
  children?: React.ReactNode;
  theme: Theme;
  state: OverlayTriggerState;
}

const Underlay = styled(motion.div)`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled(motion.div)`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal: React.FC<ModalProps> = ({
  children,
  theme,
  state,
  ...rest
}) => {
  const { modalProps } = useModal();
  const ref = React.useRef(null);
  const { overlayProps, underlayProps } = useOverlay(rest, ref);

  usePreventScroll();

  return (
    <>
      <AnimatePresence>
        {state.isOpen && (
          <OverlayContainer>
            <ThemeContext theme={theme}>
              <div {...underlayProps}>
                <Underlay
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FocusScope contain restoreFocus autoFocus>
                    <div {...overlayProps} {...modalProps}>
                      <ModalContainer
                        ref={ref}
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        exit={{ y: "100vh" }}
                      >
                        {children}
                      </ModalContainer>
                    </div>
                  </FocusScope>
                </Underlay>
              </div>
            </ThemeContext>
          </OverlayContainer>
        )}
      </AnimatePresence>
    </>
  );
};
