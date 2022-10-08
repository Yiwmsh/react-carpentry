import React from "react";
import { Story } from "@storybook/react";
import { darkTheme, lightTheme } from "../../../../consts/theme";
import { ScrollToButton } from "./ScrollToButton";
import { Navbar } from "../../../Containers/Navbar/Navbar";
import { PageSplashSimulator } from "../../../../consts/testComponents";
import { ThemeContext } from "../../../ThemeContext";

export default {
  title: "ScrollToButton",
  component: ScrollToButton,
};

export const Primary: Story = () => (
  <ThemeContext theme={darkTheme}>
    <Navbar>
      <ScrollToButton target={0}>Scroll to Top</ScrollToButton>
      <p>
        This text should leave space for the scroll button even if it isn't
        visible.
      </p>
    </Navbar>
    <PageSplashSimulator />
    <PageSplashSimulator />
    <PageSplashSimulator />
  </ThemeContext>
);
