import { ThemeContext } from "../../ThemeContext";
import { Story } from "@storybook/react";
import React from "react";
import { DarkPalette, LightPalette } from "../../../consts/colors";
import { Theme } from "../../../types/Theme";
import { ScreenFrame } from "../ScreenFrame/ScreenFrame";
import { ScrollSection } from "./ScrollSection";

const darkTheme = new Theme(DarkPalette);
const lightTheme = new Theme(LightPalette);

export default {
  title: "ScrollSection",
  component: ScrollSection,
};

export const Primary: Story = () => (
  <ThemeContext theme={darkTheme}>
    <ScrollSection>
      This section should take up the entire screen, no more and no less.
    </ScrollSection>
  </ThemeContext>
);
