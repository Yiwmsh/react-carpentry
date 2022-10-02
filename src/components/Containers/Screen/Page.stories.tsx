import React from "react";
import { Story } from "@storybook/react";
import { DarkPalette, LightPalette } from "../../../consts/colors";
import { Theme } from "../../../types/Theme";
import { ThemeProvider } from "../../ThemeProvider";
import { Page } from "./Page";

export default {
  title: "Page",
  component: Page,
};

const theme = new Theme(DarkPalette);

export const Primary: Story = () => (
  <ThemeProvider theme={theme}>
    <Page>Test</Page>
  </ThemeProvider>
);
