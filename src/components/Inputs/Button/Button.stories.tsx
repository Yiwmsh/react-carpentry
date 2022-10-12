import React from "react";
import { Button } from "./Button";
import { Story } from "@storybook/react";
import { ThemeContext } from "../../ThemeContext";
import { lightTheme } from "../../../consts/theme";
import { ButtonBank } from "../../Containers/ButtonBank/ButtonBank";

export default {
  title: "Button",
  component: Button,
};

export const Primary: Story = () => (
  <ThemeContext theme={lightTheme}>
    <ButtonBank>
      <Button onPress={() => alert("Button pressed!")}>Test Button</Button>
      <Button onPress={() => alert("Button pressed!")} secondaryColor>
        Secondary Color!
      </Button>
    </ButtonBank>
  </ThemeContext>
);
