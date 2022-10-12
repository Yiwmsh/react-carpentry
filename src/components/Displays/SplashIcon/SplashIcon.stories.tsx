import { Story } from "@storybook/react";
import React from "react";
import { LightPalette } from "../../../consts/colors";
import {
  PageSplashSimulator,
  testImgSrc,
} from "../../../consts/testComponents";
import { Theme } from "../../../types/Theme";
import { ThemeContext } from "../../ThemeContext";
import { SplashIcon } from "./SplashIcon";

export default {
  title: "SplashIcon",
  component: SplashIcon,
};

const theme = new Theme(LightPalette);

export const Primary: Story = () => {
  return (
    <ThemeContext theme={theme}>
      <SplashIcon
        src={testImgSrc}
        alt="A landscape depicting a river winding through snowy mountains on the left, and amber hills on the right. At the base of the hills, on the right bank of the river, is a multitude of pine trees. The branches of a pine tree intrude in the foreground of the image on the left side - they are the nearest object."
      />
      <PageSplashSimulator />
      <PageSplashSimulator />
      <PageSplashSimulator />
      <PageSplashSimulator />
      <PageSplashSimulator />
    </ThemeContext>
  );
};
