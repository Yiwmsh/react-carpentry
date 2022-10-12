import React from "react";
import { Story } from "@storybook/react";
import { darkTheme, lightTheme } from "../../../../consts/theme";
import { ScrollToButton } from "./ScrollToButton";
import { PageSplashSimulator } from "../../../../consts/testComponents";
import { ThemeContext } from "../../../ThemeContext";
import { ScrollToTopButton } from "./ScrollToTopButton/ScrollToTopButton";
import { TextContent } from "../../../Displays/TextContent/TextContent";

export default {
  title: "ScrollToButton",
  component: ScrollToButton,
};

export const ScrollToTop: Story = () => (
  <ThemeContext theme={darkTheme}>
    <ScrollToTopButton />
    <TextContent>This is the top of the page!</TextContent>
    <PageSplashSimulator />
    <PageSplashSimulator />
    <PageSplashSimulator />
  </ThemeContext>
);
