import { Variants } from "framer-motion";
import React from "react";
export interface AnimatedTextProps {
    text: string;
    animationVariants: Variants | undefined;
    display?: boolean;
    delay?: number;
}
export declare const AnimatedText: React.FC<AnimatedTextProps>;
