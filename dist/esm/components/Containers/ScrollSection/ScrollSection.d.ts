import React from "react";
import { Color } from "../../../types/Color";
export interface ScrollSectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    backgroundColor?: Color;
    backgroundImg?: string;
}
export declare const ScrollSection: React.FC<ScrollSectionProps>;
