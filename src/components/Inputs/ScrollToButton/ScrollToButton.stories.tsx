import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "../../ThemeProvider";
import { darkTheme, lightTheme } from "../../../consts/theme";
import { ScrollToButton } from "./ScrollToButton";
import { Navbar } from "../../Containers/Navbar/Navbar";
import { PageSplashSimulator } from "../../../consts/testComponents";

export default {
  title: "ScrollToButton",
  component: ScrollToButton,
};

export const Primary: Story = () => (
  <ThemeProvider theme={darkTheme}>
    <Navbar>
      <ScrollToButton target={0}>Scroll to Top</ScrollToButton>
      <p>
        This text should be at the beginning of the nav-bar if the scroll button
        isn't visible.
      </p>
    </Navbar>
    <PageSplashSimulator />
    <PageSplashSimulator />
    <PageSplashSimulator />
  </ThemeProvider>
);
