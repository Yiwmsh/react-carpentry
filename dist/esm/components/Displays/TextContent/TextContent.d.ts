/// <reference types="react" />
import { SemanticColors } from "../../../types/Color";
export interface TextContentProps {
    altColor?: boolean;
    color?: SemanticColors;
}
export declare const TextContent: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & TextContentProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
