import { ThemeContext } from "../../ThemeContext";
import { Story } from "@storybook/react";
import React from "react";
import { DarkPalette, LightPalette } from "../../../consts/colors";
import { Theme } from "../../../types/Theme";
import { ScreenFrame } from "../ScreenFrame/ScreenFrame";
import { ScrollSection } from "./ScrollSection";
import { ScrollSnapper } from "./ScrollSnapper";

const darkTheme = new Theme(DarkPalette);
const lightTheme = new Theme(LightPalette);

export default {
  title: "ScrollSection",
  component: ScrollSection,
};

export const Primary: Story = () => (
  <ThemeContext theme={darkTheme}>
    <ScrollSnapper>
      <ScrollSection backgroundColor="#00FFFF">
        This section should take up the entire screen, no more and no less.
      </ScrollSection>
      <ScrollSection backgroundColor="#FFFF00">
        This section should take up the entire screen, no more and no less.
      </ScrollSection>
      <ScrollSection backgroundColor="#FF00FF">
        This section should take up the entire screen, no more and no less.
      </ScrollSection>
    </ScrollSnapper>
  </ThemeContext>
);
