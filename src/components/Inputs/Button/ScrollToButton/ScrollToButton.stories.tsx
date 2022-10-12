import React from "react";
import { Story } from "@storybook/react";
import { darkTheme, lightTheme } from "../../../../consts/theme";
import { ScrollToButton } from "./ScrollToButton";
import { PageSplashSimulator } from "../../../../consts/testComponents";
import { ThemeContext } from "../../../ThemeContext";
import { ScrollToTopButton } from "./ScrollToTopButton/ScrollToTopButton";
import { TextContent } from "../../../Displays/TextContent/TextContent";
import { ScreenFrame } from "../../../Containers/ScreenFrame/ScreenFrame";
import { PageBody } from "../../../Containers/PageBody/PageBody";

export default {
  title: "ScrollToButton",
  component: ScrollToButton,
};

export const ScrollToTop: Story = () => (
  <ThemeContext theme={darkTheme}>
    <ScreenFrame>
      <PageBody>
        <ScrollToTopButton />
        <TextContent>This is the top of the page!</TextContent>
        <PageSplashSimulator />
        <PageSplashSimulator />
        <PageSplashSimulator />
      </PageBody>
    </ScreenFrame>
  </ThemeContext>
);
