import React from "react";
import { Story } from "@storybook/react";
import { Card } from "./Card";
import { LightPalette } from "../../../consts/colors";
import { Theme } from "../../../types/Theme";
import { ThemeProvider } from "../../ThemeProvider";
import { Button } from "../../Inputs/Button/Button";

export default {
  title: "Card",
  component: Card,
};

const theme = new Theme(LightPalette);

export const Primary: Story = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        This is a card. Cards should be the same color as the background, should
        fill their containers, and should have a subtle drop shadow to
        distinguish their borders. Cards should be display: flex and
        flex-direction: column. Cards should hide overflow.
      </Card>
    </ThemeProvider>
  );
};

export const CardWithButton: Story = () => (
  <ThemeProvider theme={theme}>
    <Card>
      This is a card
      <div>
        <Button>Test Button</Button>
      </div>
    </Card>
  </ThemeProvider>
);
