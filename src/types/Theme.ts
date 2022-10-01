import { ColorPalette } from "./Color";

export class Theme {
    palette: ColorPalette;

    constructor(pallate: ColorPalette ) {
        this.palette = {
            background: pallate.background,
            text: pallate.text,
            altText: pallate.altText,
            primary: pallate.primary,
            midground: pallate.midground ?? pallate.background,            
            foreground: pallate.foreground ?? pallate.background,
            shadow: pallate.shadow,
            primaryActive: pallate.primaryActive ?? pallate.primary,
            primaryDisabled: pallate.primaryDisabled ?? pallate.primary,
            secondary: pallate.secondary ?? pallate.primary,
            secondaryActive: pallate.secondaryActive ?? pallate.primaryActive,
            secondaryDisabled: pallate.secondaryDisabled ?? pallate.primaryDisabled
        }
    }
}