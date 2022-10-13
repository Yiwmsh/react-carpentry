import React from "react";
import { Story } from "@storybook/react";
import { DarkPalette, LightPalette } from "../../../consts/internal/colors";
import { Theme } from "../../../types/Theme";
import { ThemeContext } from "../../ThemeContext";
import { PageBody } from "./PageBody";

export default {
  title: "PageBody",
  component: PageBody,
};

const theme = new Theme(DarkPalette);

export const Primary: Story = () => (
  <ThemeContext theme={theme}>
    <PageBody>Test</PageBody>
  </ThemeContext>
);
