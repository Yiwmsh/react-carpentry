import { Story } from "@storybook/react";
import React from "react";
import { Theme } from "../../../types/Theme";
import { TextContent } from "../../Displays/TextContent/TextContent";
import { ThemeContext } from "../../ThemeContext";
import { Card } from "../Card/Card";
import { CardBody } from "../Card/CardBody";
import { Modal } from "./Modal";
import { LightPalette } from "../../../consts/internal/colors";

export default {
  title: "Components/Containers/Modal",
  component: Modal,
};

const theme = new Theme(LightPalette);

export const Primary: Story = () => {
  return (
    <ThemeContext theme={theme}>
      <Modal theme={theme}>
        <Card width="40%" height="20%">
          <CardBody centerContents>
            <TextContent>This is a card inside a modal! Wow!</TextContent>
          </CardBody>
        </Card>
      </Modal>
    </ThemeContext>
  );
};
