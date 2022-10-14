import { ThemeContext } from "../../ThemeContext";
import { Story } from "@storybook/react";
import React from "react";
import { DarkPalette, LightPalette } from "../../../consts/internal/colors";
import { Theme } from "../../../types/Theme";
import { ScrollSection } from "./ScrollSection";
import { ScrollSnapper } from "./ScrollSnapper";
import { ScrollToTopButton } from "../../Inputs/Button/ScrollToButton/ScrollToTopButton/ScrollToTopButton";

const darkTheme = new Theme(DarkPalette);
const lightTheme = new Theme(LightPalette);

export default {
  title: "Components/Containers/ScrollSection",
  component: ScrollSection,
};

export const Primary: Story = () => (
  <ThemeContext theme={darkTheme}>
    <ScrollSnapper>
      <ScrollToTopButton />

      <ScrollSection
        backgroundColor="#00FFFF"
        backgroundImg="https://images.unsplash.com/photo-1542395975-d6d3ddf91d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      >
        This section should take up the entire screen, no more and no less.
      </ScrollSection>
      <ScrollSection
        backgroundColor="#FFFF00"
        backgroundImg="https://images.unsplash.com/photo-1542451542907-6cf80ff362d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1821&q=80"
      >
        This section should take up the entire screen, no more and no less.
      </ScrollSection>
      <ScrollSection
        backgroundColor="#FF00FF"
        backgroundImg="https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702&q=80"
      >
        This section should take up the entire screen, no more and no less.
      </ScrollSection>
    </ScrollSnapper>
  </ThemeContext>
);

export const UnstyledSections: Story = () => (
  <ThemeContext theme={darkTheme}>
    <ScrollSnapper>
      <ScrollSection>This section has no additional styling.</ScrollSection>

      <ScrollSection>This section has no additional styling.</ScrollSection>

      <ScrollSection>This section has no additional styling.</ScrollSection>

      <ScrollSection>This section has no additional styling.</ScrollSection>
    </ScrollSnapper>
  </ThemeContext>
);
