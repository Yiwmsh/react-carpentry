import React from "react";
import { Story } from "@storybook/react";
import { DarkPalette, LightPalette } from "../../../consts/internal/colors";
import { Theme } from "../../../types/Theme";
import { ThemeContext } from "../../ThemeContext";
import { Navbar } from "./Navbar";
import { PageSplashSimulator } from "../../../consts/internal/testComponents";
import { TextContent } from "../../Displays/TextContent/TextContent";

const darkTheme = new Theme(DarkPalette);
const lightTheme = new Theme(LightPalette);

export default {
  title: "Components/Containers/Navbar",
  component: Navbar,
};

export const Primary: Story = () => (
  <ThemeContext theme={darkTheme}>
    <PageSplashSimulator>
      <TextContent>
        Scroll down to see the navbar. When you scroll past the nav-bar, it
        should stick to the top of your screen. When you scroll back up past its
        original location, it should remain in its original location.
      </TextContent>
    </PageSplashSimulator>
    <Navbar>Test</Navbar>
    <PageSplashSimulator />
  </ThemeContext>
);

export const TopOfPage: Story = () => (
  <ThemeContext theme={darkTheme}>
    <Navbar position="fixed">Test</Navbar>
    <PageSplashSimulator />
  </ThemeContext>
);
