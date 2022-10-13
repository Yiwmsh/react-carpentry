import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import {
  FocusScope,
  OverlayContainer,
  OverlayProvider,
  useDialog,
  useModal,
  useOverlay,
  usePreventScroll,
  AriaOverlayProps,
} from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import React from "react";
import { Button } from "../../Inputs";

interface ModalProps extends AriaOverlayProps {
  children?: React.ReactNode;
}

const Underlay = styled.div`
  position: "fixed";
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: "rgba(0, 0, 0, 0.5)";
  display: "flex";
  align-items: "center";
  justify-content: "center";
`;

/* 
  TODO Rework this Modal to use react-aria's Overlay
*/

export const Modal: React.FC<ModalProps> = ({ children, ...rest }) => {
  const state = useOverlayTriggerState({});
  const { modalProps } = useModal();
  const ref = React.useRef(null);
  const { overlayProps, underlayProps } = useOverlay(rest, ref);

  return (
    <>
      <Button onPress={state.open}>Open Dialog</Button>
      {state.isOpen && (
        <OverlayContainer>
          <Underlay {...underlayProps}>
            <FocusScope contain restoreFocus autoFocus>
              <div {...overlayProps} ref={ref}>
                {children}
              </div>
            </FocusScope>
          </Underlay>
        </OverlayContainer>
      )}
    </>
  );
};
