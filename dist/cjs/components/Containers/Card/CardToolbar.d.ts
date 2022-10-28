/// <reference types="react" />
import { SemanticColors } from "../../../types/Color";
export declare const CardToolbar: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & {
    justifyContent?: "center" | "space-around" | "space-between" | "space-evenly" | "flex-end" | "flex-start" | undefined;
    backgroundColor?: SemanticColors | undefined;
    textColor?: SemanticColors | undefined;
    border?: boolean | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
