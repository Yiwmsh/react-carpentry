import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import {
  FocusScope,
  OverlayContainer,
  useModal,
  useOverlay,
  usePreventScroll,
  AriaOverlayProps,
} from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import React from "react";
import { Button } from "../../Inputs";
import { Theme } from "../../../types";
import { ThemeContext } from "../../ThemeContext";

interface ModalProps extends AriaOverlayProps {
  children?: React.ReactNode;
  theme: Theme;
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

/* 
  TODO Finish reworking this Modal to use react-aria's Overlay
*/

export const Modal: React.FC<ModalProps> = ({ children, theme, ...rest }) => {
  const state = useOverlayTriggerState({});
  const { modalProps } = useModal();
  const ref = React.useRef(null);
  const { overlayProps, underlayProps } = useOverlay(rest, ref);

  usePreventScroll();

  return (
    <>
      <Button onPress={state.open}>Open Dialog</Button>
      <AnimatePresence>
        {state.isOpen && (
          <OverlayContainer>
            <ThemeContext theme={theme}>
              <Underlay
                {...underlayProps}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FocusScope contain restoreFocus autoFocus>
                  <ModalContainer
                    {...overlayProps}
                    {...modalProps}
                    ref={ref}
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    exit={{ y: "100vh" }}
                  >
                    {children}
                  </ModalContainer>
                </FocusScope>
              </Underlay>
            </ThemeContext>
          </OverlayContainer>
        )}
      </AnimatePresence>
    </>
  );
};
