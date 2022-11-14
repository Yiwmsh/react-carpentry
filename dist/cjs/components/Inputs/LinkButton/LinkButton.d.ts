import React from "react";
import { Color } from "../../../types";
export interface LinkButtonProps {
    href: string;
    image: string;
    title?: string;
    backgroundColor?: Color;
    target?: string;
}
export declare const LinkButton: React.FC<LinkButtonProps>;
