import React from "react";
import { Story } from "@storybook/react";
import { DarkPalette, LightPalette } from "../../../consts/colors";
import { Theme } from "../../../types/Theme";
import { ThemeProvider } from "../../ThemeProvider";
import { ScreenFrame } from "./ScreenFrame";

export default {
  title: "Screen",
  component: ScreenFrame,
};

const theme = new Theme(DarkPalette);

export const Primary: Story = () => (
  <ThemeProvider theme={theme}>
    <ScreenFrame>Test</ScreenFrame>
  </ThemeProvider>
);
