import { Story } from "@storybook/react";
import React from "react";
import { LightPalette } from "../../../consts/colors";
import { Theme } from "../../../types/Theme";
import { TextContent } from "../../Displays/TextContent/TextContent";
import { Button } from "../../Inputs/Button/Button";
import { ThemeProvider } from "../../ThemeProvider";
import { ButtonBank } from "../ButtonBank/ButtonBank";
import { Card } from "../Card/Card";
import { CardBody } from "../Card/CardBody";
import { Modal } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
};

const theme = new Theme(LightPalette);

export const Primary: Story = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [dimmed, setDimmed] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Button onPress={() => setShowModal(!showModal)}>Show Modal</Button>
      <Modal dimmed={dimmed} show={showModal}>
        <Card centered="both" width="20%" height="20%">
          <CardBody centerContents>
            <TextContent>This is a card inside a modal! Wow!</TextContent>
          </CardBody>
          <ButtonBank>
            <Button onPress={() => setShowModal(!showModal)}>Hide Modal</Button>
            <Button onPress={() => setDimmed(!dimmed)}>Dimmed?</Button>
          </ButtonBank>
        </Card>
      </Modal>
    </ThemeProvider>
  );
};
