import { AriaOverlayProps } from "react-aria";
import { OverlayTriggerState } from "react-stately";
import React from "react";
import { Theme } from "../../../types";
export interface ModalProps extends AriaOverlayProps {
    children?: React.ReactNode;
    theme: Theme;
    state: OverlayTriggerState;
}
export declare const Modal: React.FC<ModalProps>;
