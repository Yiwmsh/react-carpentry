/// <reference types="react" />
export interface CardProps {
    maxWidth?: string;
    width?: string;
    maxHeight?: string;
    height?: string;
    centered?: "horizontally" | "vertically" | "both";
}
export declare const Card: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & CardProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
