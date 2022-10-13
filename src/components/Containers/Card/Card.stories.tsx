import React from "react";
import { Story } from "@storybook/react";
import { Card } from "./Card";
import styled from "@emotion/styled";
import { Theme } from "../../../types/Theme";
import { ThemeContext } from "../../ThemeContext";
import { Button } from "../../Inputs/Button/Button";
import { CardToolbar } from "./CardToolbar";
import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";
import { SemanticColors } from "../../../types/Color";
import { CardImage } from "./CardImage";
import { LightPalette } from "../../../consts/internal/colors";

export default {
  title: "Components/Containers/Card",
  component: Card,
};

const theme = new Theme(LightPalette);

export const Primary: Story = () => {
  return (
    <ThemeContext theme={theme}>
      <Card>
        This is a card. Cards should be the same color as the background, should
        fill their containers, and should have a subtle drop shadow to
        distinguish their borders. Cards should be display: flex and
        flex-direction: column. Cards should hide overflow.
      </Card>
    </ThemeContext>
  );
};

export const CardWithButton: Story = () => (
  <ThemeContext theme={theme}>
    <Card>
      This is a card
      <div>
        <Button>Test Button</Button>
      </div>
    </Card>
  </ThemeContext>
);

export const CardProperties: Story = () => (
  <ThemeContext theme={theme}>
    <Card height="30%" width="30%" centered="both">
      This card should be 30% of its container's dimensions. It should also be
      centered.
    </Card>
  </ThemeContext>
);

const testImgSrc =
  "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export const CompositeCard: Story = () => (
  <ThemeContext theme={theme}>
    <Card centered="horizontally">
      <CardToolbar justifyContent="space-evenly">
        <b>This Card Has a Toolbar</b>
      </CardToolbar>
      <CardHeader>
        <h1>It also has a header!</h1>
      </CardHeader>
      <CardImage
        src={testImgSrc}
        alt="A landscape depicting a river winding through snowy mountains on the left, and amber hills on the right. At the base of the hills, on the right bank of the river, is a multitude of pine trees. The branches of a pine tree intrude in the foreground of the image on the left side - they are the nearest object."
        subtitle="Test Subtitle"
      />
      <CardBody centerContents={false}>
        Oh, and, would you look at that, it's even got a body, too! Here's a
        bunch of filler text,
        lalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalala!
        Did you get all of that? That should all wrap properly.
      </CardBody>
    </Card>
  </ThemeContext>
);

export const NestedCard: Story = () => (
  <ThemeContext theme={theme}>
    <Card>
      <CardBody>
        This is a card
        <Card>This is a card inside a card</Card>
        Here's some stuff below the nested card
      </CardBody>
    </Card>
  </ThemeContext>
);

const RestyledCard = styled(Card)`
  background-color: var(${SemanticColors.primary});
`;

export const RestyledCardStory: Story = () => (
  <ThemeContext theme={theme}>
    <RestyledCard>This card should have a red background!</RestyledCard>
  </ThemeContext>
);
