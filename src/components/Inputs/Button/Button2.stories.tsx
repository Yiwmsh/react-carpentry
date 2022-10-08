import React from "react";
import { Button } from "./Button";
import { Story } from "@storybook/react";
import styled from "@emotion/styled";
import { ThemeContext } from "../../ThemeContext";
import { LightPalette } from "../../../consts/colors";
import { lightTheme } from "../../../consts/theme";

export default {
  title: "Button2",
  component: Button,
};

const CustomButton2 = styled(Button)`
  background-color: green;
  padding: 50px;
`;

export const Primary: Story = () => (
  <ThemeContext theme={lightTheme}>
    <CustomButton2>skhbgiqbe;lt</CustomButton2>
  </ThemeContext>
);
