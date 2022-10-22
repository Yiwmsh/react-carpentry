import { Story } from "@storybook/react";
import React from "react";
import { Theme } from "../../../types/Theme";
import { TextContent } from "../../Displays/TextContent/TextContent";
import { ThemeContext } from "../../ThemeContext";
import { Card } from "../Card/Card";
import { CardBody } from "../Card/CardBody";
import { Modal } from "./Modal";
import { LightPalette } from "../../../consts/internal/colors";
import { useOverlayTriggerState } from "react-stately";
import { Button } from "../../Inputs";
import { CardFooter } from "../Card/CardFooter";
import { ButtonBank } from "../ButtonBank/ButtonBank";

export default {
  title: "Components/Containers/Modal",
  component: Modal,
};

const theme = new Theme(LightPalette);

export const Primary: Story = () => {
  const modalState = useOverlayTriggerState({});

  return (
    <ThemeContext theme={theme}>
      <Button onPress={modalState.open}>Open Dialog</Button>
      <Modal theme={theme} state={modalState}>
        <Card width="40%" height="20%">
          <CardBody centerContents>
            <TextContent>This is a card inside a modal! Wow!</TextContent>
          </CardBody>
          <CardFooter>
            <ButtonBank>
              <Button onPress={modalState.close}>Close Dialog</Button>
            </ButtonBank>
          </CardFooter>
        </Card>
      </Modal>
    </ThemeContext>
  );
};
