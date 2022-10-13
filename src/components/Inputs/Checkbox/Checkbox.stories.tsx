import { Story } from "@storybook/react";
import React from "react";
import { lightTheme } from "../../../consts/internal/theme";
import { ThemeContext } from "../../ThemeContext";
import { Checkbox } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
};

export const Primary: Story = () => (
  <ThemeContext theme={lightTheme}>
    <Checkbox>This is a test checkbox!</Checkbox>
  </ThemeContext>
);
