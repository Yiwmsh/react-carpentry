import React from "react";
import { Story } from "@storybook/react";
import { Theme } from "../../../types/Theme";
import { ThemeContext } from "../../ThemeContext";
import { LightPalette } from "../../../consts/internal/colors";
import { AnimatedText } from "./AnimatedText";
import { ScrollSnapper } from "../../Containers/ScrollSection/ScrollSnapper";
import { ScrollSection } from "../../Containers/ScrollSection/ScrollSection";
import { Card } from "../../Containers/Card/Card";
import { Button } from "../../Inputs/Button/Button";

export default {
  title: "Components/Displays/AnimatedText",
  component: AnimatedText,
};

const theme = new Theme(LightPalette);

export const Primary: Story = () => {
  return (
    <ThemeContext theme={theme}>
      <AnimatedText
        aria-label="Test!"
        text="Test!"
        animationVariants={{
          hidden: {
            opacity: 0,

            y: `0.25em`,
          },

          visible: {
            opacity: 1,

            y: `0em`,

            transition: {
              duration: 1,

              ease: [0.2, 0.65, 0.3, 0.9],
            },
          },
        }}
      />
    </ThemeContext>
  );
};

export const Scrolling: Story = () => {
  return (
    <ThemeContext theme={theme}>
      <ScrollSnapper>
        <ScrollSection>
          <h1>
            <AnimatedText
              aria-label="Test!"
              text="Test!"
              animationVariants={{
                hidden: {
                  opacity: 0,

                  y: `0.25em`,
                },

                visible: {
                  opacity: 1,

                  y: `0em`,

                  transition: {
                    duration: 1,

                    ease: [0.2, 0.65, 0.3, 0.9],
                  },
                },
              }}
            />
          </h1>
        </ScrollSection>
        <ScrollSection></ScrollSection>
      </ScrollSnapper>
    </ThemeContext>
  );
};

export const ExternalControls: Story = () => {
  const [display, setDisplay] = React.useState(false);
  return (
    <ThemeContext theme={theme}>
      <Button onPress={() => setDisplay(!display)}>Toggle text</Button>
      <AnimatedText
        display={display}
        aria-label="Test!"
        text="Test!"
        animationVariants={{
          hidden: {
            opacity: 0,

            y: `0.25em`,
          },

          visible: {
            opacity: 1,

            y: `0em`,

            transition: {
              duration: 1,

              ease: [0.2, 0.65, 0.3, 0.9],
            },
          },
        }}
      />
    </ThemeContext>
  );
};
