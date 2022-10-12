import { Story } from "@storybook/react";
import React from "react";
import { LightPalette } from "../../../consts/colors";
import {
  PageSplashSimulator,
  testImgSrc,
} from "../../../consts/testComponents";
import { Theme } from "../../../types/Theme";
import { ButtonBank } from "../../Containers/ButtonBank/ButtonBank";
import { Card } from "../../Containers/Card/Card";
import { Navbar } from "../../Containers/Navbar/Navbar";
import { PageBody } from "../../Containers/PageBody/PageBody";
import { ScreenFrame } from "../../Containers/ScreenFrame/ScreenFrame";
import { Button } from "../../Inputs/Button/Button";
import { ScrollToButton } from "../../Inputs/Button/ScrollToButton/ScrollToButton";
import { ThemeContext } from "../../ThemeContext";
import { Title } from "../Title/Title";
import { SplashIcon } from "./SplashIcon";

export default {
  title: "SplashIcon",
  component: SplashIcon,
};

const theme = new Theme(LightPalette);

export const Primary: Story = () => {
  return (
    <ThemeContext theme={theme}>
      <ScreenFrame>
        <Card centered="both" width="500px" height="500px">
          <SplashIcon
            src={testImgSrc}
            alt="A landscape depicting a river winding through snowy mountains on the left, and amber hills on the right. At the base of the hills, on the right bank of the river, is a multitude of pine trees. The branches of a pine tree intrude in the foreground of the image on the left side - they are the nearest object."
          />
        </Card>
        <PageSplashSimulator backgroundColor="#a4d4ff"></PageSplashSimulator>
        <Navbar>
          <ScrollToButton scrollTarget={0}>Return to Top</ScrollToButton>
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
};
