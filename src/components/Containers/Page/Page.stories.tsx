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
import { Navbar } from "../Navbar/Navbar";
import { ScrollToButton } from "../../Inputs/ScrollToButton/ScrollToButton";
import { PageSplashSimulator } from "../../../consts/testComponents";
import styled from "@emotion/styled";

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

const CenteredCard = styled(Card)`
  position: absolute;
  width: 20vw;
  height: 20vw;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const PopulatedPage: Story = () => (
  <ThemeProvider theme={darkTheme}>
    <Page>
      <CenteredCard>Test Card</CenteredCard>
      <PageSplashSimulator backgroundColor="#a4d4ff"></PageSplashSimulator>
      <Navbar>
        <ScrollToButton target={0}>Return to Top</ScrollToButton>
      </Navbar>
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
