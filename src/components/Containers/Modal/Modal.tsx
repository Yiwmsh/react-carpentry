import styled from "@emotion/styled";
import React from "react";

export const ModalContainer = styled.div<{
  dimmed?: boolean;
  show: boolean;
}>`
  position: fixed;
  background-color: rgba(
    0,
    0,
    0,
    ${({ dimmed = true }) => (dimmed ? "0.5" : "0")}
  );
  display: ${({ show }) => (show ? "block" : "none")};
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

export const Modal: React.FC<ModalProps> = ({ children, ...rest }) => {
  return <ModalContainer {...rest}>{children}</ModalContainer>;
};
