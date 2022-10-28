import React from "react";
import { AriaButtonProps } from "@react-types/button";
export interface ButtonProps extends AriaButtonProps {
    visible?: boolean;
    display?: boolean;
    secondaryColor?: boolean;
    unstyled?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
