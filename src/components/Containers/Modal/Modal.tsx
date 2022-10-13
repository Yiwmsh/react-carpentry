import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import React from "react";

const ModalBackdrop = styled.div<{
  dimmed?: boolean;
}>`
  position: fixed;
  background-color: rgba(
    0,
    0,
    0,
    ${({ dimmed = true }) => (dimmed ? "0.5" : "0")}
  );
  width: 100vw;
  height: 100vh;
  top: 0%;
  left: 0%;
`;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0%;
  left: 0%;
`;

interface ModalProps {
  dimmed?: boolean;
  children?: React.ReactNode;
  show: boolean;
}

/* 
  TODO Rework this Modal to use react-aria's Overlay
*/

export const Modal: React.FC<ModalProps> = ({ children, show, dimmed }) => {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalBackdrop dimmed={dimmed}>
            <motion.div
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              exit={{ y: "100vh" }}
            >
              <ModalContainer>{children}</ModalContainer>
            </motion.div>
          </ModalBackdrop>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
