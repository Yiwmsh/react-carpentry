import React from "react";
import { Story } from "@storybook/react";
import { DarkPalette, LightPalette } from "../../../consts/colors";
import { Theme } from "../../../types/Theme";
import { ThemeProvider } from "../../ThemeProvider";
import { ScreenFrame } from "../Screen/ScreenFrame";
import { Card } from "../Card/Card";
import { Button } from "../../Inputs/Button/Button";
import { ButtonBank } from "../ButtonBank/ButtonBank";
import { Title } from "../../Displays/Title";
import { Navbar } from "./Navbar";
import styled from "@emotion/styled";
import { PageSplashSimulator } from "../../../consts/testComponents";

const darkTheme = new Theme(DarkPalette);
const lightTheme = new Theme(LightPalette);

export default {
  title: "Navbar",
  component: Navbar,
};

export const Primary: Story = () => (
  <ThemeProvider theme={darkTheme}>
    <PageSplashSimulator>
      Scroll down to see the navbar. When you scroll past the nav-bar, it should
      stick to the top of your screen. When you scroll back up past its original
      location, it should remain in its original location.
    </PageSplashSimulator>
    <Navbar>Test</Navbar>
    <PageSplashSimulator />
  </ThemeProvider>
);

export const TopOfPage: Story = () => (
  <ThemeProvider theme={darkTheme}>
    <Navbar>Test</Navbar>
    <PageSplashSimulator />
  </ThemeProvider>
);
