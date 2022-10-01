import React from "react";
import { Button } from "./Button";
import { Story } from "@storybook/react";
import { ThemeProvider } from "../../ThemeProvider";
import { lightTheme } from "../../../consts/theme";

export default {
  title: "Button",
  component: Button,
};

export const Primary: Story = () => (
  <ThemeProvider theme={lightTheme}>
    <Button>Test Button</Button>
  </ThemeProvider>
);
