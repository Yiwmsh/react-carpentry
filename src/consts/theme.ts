import { Theme } from "../types/Theme";
import { DarkPalette, LightPalette } from "./colors";

export const lightTheme: Theme = {
    palette: LightPalette,
}
export const darkTheme: Theme = {
    palette: DarkPalette,
}

const theme: Theme = {
    palette: {
        background: `#FFFFFF`,
        text: `rgba(0, 0, 0, 1)`,
        altText: `#FFFFFF`,
        primary: 'rgb(150, 60, 50)'
    }
}