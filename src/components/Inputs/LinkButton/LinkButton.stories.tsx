import React from "react";
import { Story } from "@storybook/react";
import { ThemeContext } from "../../ThemeContext";
import { lightTheme } from "../../../consts/internal/theme";
import { LinkButton } from "./LinkButton";

export default {
  title: "Components/Inputs/LinkButton",
  component: LinkButton,
};

const gitHubIcon = "https://cdn-icons-png.flaticon.com/512/25/25231.png";

export const Primary: Story = () => (
  <ThemeContext theme={lightTheme}>
    <LinkButton
      title="Github"
      href="https://github.com/Yiwmsh"
      image={gitHubIcon}
    />
  </ThemeContext>
);

export const WithoutTitle: Story = () => (
  <ThemeContext theme={lightTheme}>
    <LinkButton href="https://github.com/Yiwmsh" image={gitHubIcon} />
  </ThemeContext>
);
