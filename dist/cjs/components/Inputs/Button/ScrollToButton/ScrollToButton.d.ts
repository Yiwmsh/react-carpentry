import { ButtonProps } from "../Button";
import React from "react";
export interface ScrollToButtonProps extends ButtonProps {
    scrollTarget: number | React.MutableRefObject<any>;
    behavior?: "smooth" | "auto";
}
export declare const ScrollToButton: React.FC<ScrollToButtonProps>;
