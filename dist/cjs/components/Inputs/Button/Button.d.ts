import React from "react";
import { AriaButtonProps } from "@react-types/button";
export interface ButtonProps extends AriaButtonProps {
    secondaryColor?: boolean;
    unstyled?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
