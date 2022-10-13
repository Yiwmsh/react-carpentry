import { Story } from "@storybook/react";
import React from "react";
import { DarkPalette, LightPalette } from "../../../consts/internal/colors";
import { SemanticColors } from "../../../types/Color";
import { Theme } from "../../../types/Theme";
import { Card } from "../../Containers/Card/Card";
import { CardBody } from "../../Containers/Card/CardBody";
import { CardHeader } from "../../Containers/Card/CardHeader";
import { CardToolbar } from "../../Containers/Card/CardToolbar";
import { ThemeContext } from "../../ThemeContext";
import { TextContent } from "./TextContent";

export default {
  title: "TextContent",
  component: TextContent,
};

const darkTheme = new Theme(DarkPalette);
const lightTheme = new Theme(LightPalette);

export const LightModeText: Story = () => (
  <ThemeContext theme={lightTheme}>
    <Card centered="horizontally">
      <CardToolbar justifyContent="center">
        <TextContent altColor>This text should be visible.</TextContent>
      </CardToolbar>
      <CardHeader id="CardHeader">
        <TextContent id="TextContent">
          <h1>This should also be visible.</h1>
        </TextContent>
      </CardHeader>
      <CardBody>
        <TextContent color={SemanticColors.primary}>
          <h2>
            This text should be the same color as the toolbar's background.
          </h2>
          And so should this.
        </TextContent>
      </CardBody>
    </Card>
  </ThemeContext>
);
