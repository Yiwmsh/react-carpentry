declare type RGB = `rgb(${number}, ${number}, ${number})`;
declare type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
declare type HEX = `#${string}`;
export declare type Color = RGB | RGBA | HEX;
export interface ColorPalette {
    background: Color;
    midground?: Color;
    foreground?: Color;
    text: Color;
    altText: Color;
    shadow?: Color;
    primary: Color;
    primaryActive?: Color;
    primaryDisabled?: Color;
    secondary?: Color;
    secondaryActive?: Color;
    secondaryDisabled?: Color;
    error?: Color;
}
export declare enum SemanticColors {
    background = "--background-color",
    midground = "--midground-color",
    foreground = "--foreground-color",
    text = "--text-color",
    altText = "--alt-text-color",
    shadow = "--shadow-color",
    primary = "--primary-color",
    primaryActive = "--primary-active-color",
    primaryDisabled = "--primary-disabled-color",
    secondary = "--secondary-color",
    secondaryActive = "--secondary-active",
    secondaryDisabled = "--secondaryDisabled",
    error = "--error-color"
}
export {};
