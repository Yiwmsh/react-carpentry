import React from "react";
import { Story } from "@storybook/react";
import { DarkPalette, LightPalette } from "../../../consts/colors";
import { Theme } from "../../../types/Theme";
import { ThemeProvider } from "../../ThemeProvider";
import { Page } from "./Page";
import { ScreenFrame } from "../Screen/ScreenFrame";
import { Card } from "../Card/Card";
import { Button } from "../../Inputs/Button/Button";
import { ButtonBank } from "../ButtonBank/ButtonBank";
import { Title } from "../../Displays/Title";

const darkTheme = new Theme(DarkPalette);
const lightTheme = new Theme(LightPalette);

export default {
  title: "Page",
  component: Page,
};

export const Primary: Story = () => (
  <ThemeProvider theme={darkTheme}>
    <Page>Test</Page>
  </ThemeProvider>
);

export const PageWithScreenFrame: Story = () => (
  <ThemeProvider theme={darkTheme}>
    <Page>
      <ScreenFrame>Test</ScreenFrame>
    </Page>
  </ThemeProvider>
);

export const PopulatedPage: Story = () => (
  <ThemeProvider theme={darkTheme}>
    <Page>
      <ScreenFrame>
        <Title>Title</Title>
        <Card>
          <h1>Heading</h1>
          <p>Filling</p>
          <p>Filling</p>
          <p>Filling</p>
          <p>Filling</p>
        </Card>
        <br />
        <Card>
          <p>Filling</p>
          <p>Filling</p>
          <p>Filling</p>
          <p>Filling</p>
          <ButtonBank>
            <Button>Test Button</Button>
            <Button>Test Button</Button>
            <Button>Test Button</Button>
            <Button>Test Button</Button>
          </ButtonBank>
        </Card>
      </ScreenFrame>
    </Page>
  </ThemeProvider>
);
