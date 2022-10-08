import React from "react";
import { Button } from "./Button";
import { Story } from "@storybook/react";
import { ThemeContext } from "../../ThemeContext";
import { lightTheme } from "../../../consts/theme";

export default {
  title: "Button",
  component: Button,
};

export const Primary: Story = () => (
  <ThemeContext theme={lightTheme}>
    <Button>Test Button</Button>
  </ThemeContext>
);
