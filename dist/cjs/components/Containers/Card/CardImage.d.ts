import React from "react";
import { TextContentProps } from "../../Displays/TextContent/TextContent";
export interface CardImageProps extends TextContentProps {
    src: string;
    alt: string;
    subtitle?: string;
}
export declare const CardImage: React.FC<CardImageProps>;
