import React from "react";
import { Story } from "@storybook/react";
import { Card } from "./Card";
import { DarkPalette, LightPalette } from "../../../consts/colors";
import { Theme } from "../../../types/Theme";
import { ThemeProvider } from "../../ThemeProvider";
import { Button } from "../../Inputs/Button/Button";
import { CardToolbar } from "./CardToolbar";
import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";
import { SemanticColors } from "../../../types/Color";

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

export const CardProperties: Story = () => (
  <ThemeProvider theme={theme}>
    <Card height="30%" width="30%" centered="both">
      This card should be 30% of its container's dimensions. It should also be
      centered.
    </Card>
  </ThemeProvider>
);

export const CompositeCard: Story = () => (
  <ThemeProvider theme={theme}>
    <Card centered="horizontally">
      <CardToolbar justifyContent="space-evenly">
        <b>This Card Has a Toolbar</b>
      </CardToolbar>
      <CardHeader>
        <h1>It also has a header!</h1>
      </CardHeader>
      <CardBody centerContents={false}>
        Oh, and, would you look at that, it's even got a body, too! Here's a
        bunch of filler text,
        lalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalala!
        Did you get all of that? That should all wrap properly.
      </CardBody>
    </Card>
  </ThemeProvider>
);
