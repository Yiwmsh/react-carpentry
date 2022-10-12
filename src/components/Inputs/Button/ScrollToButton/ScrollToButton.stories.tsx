import React from "react";
import { Story } from "@storybook/react";
import { darkTheme, lightTheme } from "../../../../consts/theme";
import { ScrollToButton } from "./ScrollToButton";
import { PageSplashSimulator } from "../../../../consts/testComponents";
import { ThemeContext } from "../../../ThemeContext";
import { ScrollToTopButton } from "./ScrollToTopButton/ScrollToTopButton";
import { ScreenFrame } from "../../../Containers/ScreenFrame/ScreenFrame";
import { PageBody } from "../../../Containers/PageBody/PageBody";
import { TextContent } from "../../../Displays/TextContent/TextContent";
import styled from "@emotion/styled";

export default {
  title: "ScrollToButton",
  component: ScrollToButton,
};

const ScrollToTopButtonLeft = styled(ScrollToTopButton)`
  bottom: 1em;
  right: unset;
  left: 1em;
`;

export const ScrollToTop: Story = () => (
  <ThemeContext theme={darkTheme}>
    <ScrollToTopButton />
    <ScreenFrame>
      <PageBody>
        <TextContent>This is the top of the page!</TextContent>
        <PageSplashSimulator />
        <PageSplashSimulator />
        <PageSplashSimulator />
        <PageSplashSimulator />
      </PageBody>
    </ScreenFrame>
  </ThemeContext>
);

export const ScrollToTopAlt: Story = () => (
  <ThemeContext theme={darkTheme}>
    <ScrollToTopButtonLeft />
    <ScreenFrame>
      <PageBody>
        <TextContent>This is the top of the page!</TextContent>
        <PageSplashSimulator />
        <PageSplashSimulator />
        <PageSplashSimulator />
        <PageSplashSimulator />
      </PageBody>
    </ScreenFrame>
  </ThemeContext>
);
