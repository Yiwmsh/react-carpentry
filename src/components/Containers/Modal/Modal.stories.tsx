import { Story } from "@storybook/react";
import React from "react";
import { LightPalette } from "../../../consts/colors";
import { Theme } from "../../../types/Theme";
import { TextContent } from "../../Displays/TextContent/TextContent";
import { Button } from "../../Inputs/Button/Button";
import { ThemeContext } from "../../ThemeContext";
import { ButtonBank } from "../ButtonBank/ButtonBank";
import { Card } from "../Card/Card";
import { CardBody } from "../Card/CardBody";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { Modal } from "./Modal";
import { CardFooter } from "../Card/CardFooter";

export default {
  title: "Modal",
  component: Modal,
};

const theme = new Theme(LightPalette);

export const Primary: Story = () => {
  const [showModal, setShowModal] = React.useState(true);
  const [dimmed, setDimmed] = React.useState(true);

  return (
    <ThemeContext theme={theme}>
      <Button onPress={() => setShowModal(!showModal)}>Show Modal</Button>
      <Modal dimmed={dimmed} show={showModal}>
        <Card centered="both" width="20%" height="20%">
          <CardBody centerContents>
            <TextContent>This is a card inside a modal! Wow!</TextContent>
          </CardBody>
          <CardFooter>
            <ButtonBank>
              <Button onPress={() => setShowModal(!showModal)}>
                Hide Modal
              </Button>
              <Button onPress={() => setDimmed(!dimmed)}>Dimmed?</Button>
            </ButtonBank>
          </CardFooter>
        </Card>
      </Modal>
    </ThemeContext>
  );
};
