import React from "react";
import { Story } from "@storybook/react";
import { DarkPalette, LightPalette } from "../../../consts/colors";
import { Theme } from "../../../types/Theme";
import { ThemeContext } from "../../ThemeContext";
import { ScreenFrame } from "./ScreenFrame";
import { PageBody } from "../PageBody/PageBody";
import { Card } from "../Card/Card";
import { Button } from "../../Inputs/Button/Button";
import { ButtonBank } from "../ButtonBank/ButtonBank";
import { Title } from "../../Displays/Title/Title";
import { Navbar } from "../Navbar/Navbar";
import { ScrollToTopButton } from "../../Inputs/Button/ScrollToButton/ScrollToTopButton/ScrollToTopButton";
import { PageSplashSimulator } from "../../../consts/testComponents";
import { TextContent } from "../../Displays/TextContent/TextContent";
import styled from "@emotion/styled";

const darkTheme = new Theme(DarkPalette);
const lightTheme = new Theme(LightPalette);

export default {
  title: "ScreenFrame",
  component: ScreenFrame,
};

export const Primary: Story = () => (
  <ThemeContext theme={darkTheme}>
    <ScreenFrame>Test</ScreenFrame>
  </ThemeContext>
);

export const PageWithScreenFrame: Story = () => (
  <ThemeContext theme={darkTheme}>
    <ScreenFrame>
      <PageBody>Test</PageBody>
    </ScreenFrame>
  </ThemeContext>
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
  <ThemeContext theme={darkTheme}>
    <ScrollToTopButton />
    <ScreenFrame>
      <CenteredCard>Test Card</CenteredCard>
      <PageSplashSimulator backgroundColor="#a4d4ff"></PageSplashSimulator>
      <Navbar>
        <TextContent altColor>This is a toolbar!</TextContent>
      </Navbar>
      <PageBody>
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
      </PageBody>
    </ScreenFrame>
  </ThemeContext>
);
