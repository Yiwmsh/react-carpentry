import { Story } from "@storybook/react";
import { TextContent, Theme, ThemeContext } from "@yiwmsh/react-carpentry";
import { TooltipWrapper } from "./Tooltip";
import React from "react";
import { DarkPalette, LightPalette } from "../../../consts/internal/colors";

export default {
  title: "Components/Displays/ToolTip",
  component: TextContent,
};

const darkTheme = new Theme(DarkPalette);
const lightTheme = new Theme(LightPalette);

export const Primary: Story = () => (
  <ThemeContext theme={lightTheme}>
    <TooltipWrapper
      renderChild={(ref, triggerProps) => {
        return (
          <p ref={ref} {...triggerProps}>
            Text!
          </p>
        );
      }}
      tooltip="Tooltip!"
      delay={0}
    />
  </ThemeContext>
);
