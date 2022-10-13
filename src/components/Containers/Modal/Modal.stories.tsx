import { Story } from "@storybook/react";
import React from "react";
import { Theme } from "../../../types/Theme";
import { TextContent } from "../../Displays/TextContent/TextContent";
import { Button } from "../../Inputs/Button/Button";
import { ThemeContext } from "../../ThemeContext";
import { ButtonBank } from "../ButtonBank/ButtonBank";
import { Card } from "../Card/Card";
import { CardBody } from "../Card/CardBody";
import { Modal } from "./Modal";
import { CardFooter } from "../Card/CardFooter";
import { LightPalette } from "../../../consts/internal/colors";

export default {
  title: "Components/Containers/Modal",
  component: Modal,
};

const theme = new Theme(LightPalette);

export const Primary: Story = () => {
  return (
    <ThemeContext theme={theme}>
      <Modal>
        <Card centered="both" width="20%" height="20%">
          <CardBody centerContents>
            <TextContent>This is a card inside a modal! Wow!</TextContent>
          </CardBody>
        </Card>
      </Modal>
    </ThemeContext>
  );
};
