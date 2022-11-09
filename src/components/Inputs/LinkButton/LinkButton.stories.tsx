import React from "react";
import { Story } from "@storybook/react";
import { ThemeContext } from "../../ThemeContext";
import { lightTheme } from "../../../consts/internal/theme";
import { LinkButton } from "./LinkButton";

export default {
  title: "Components/Inputs/LinkButton",
  component: LinkButton,
};

const gitHubIcon = "../../resources/GitHub-Mark-32px.png";

export const Primary: Story = () => (
  <ThemeContext theme={lightTheme}>
    <img src={gitHubIcon} />
  </ThemeContext>
);
