/// <reference types="react" />
import { SemanticColors } from "../../../types/Color";
export declare const CardToolbar: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & {
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
    backgroundColor?: SemanticColors | undefined;
    textColor?: SemanticColors | undefined;
    border?: boolean | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
