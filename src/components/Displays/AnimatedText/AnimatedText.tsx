import styled from "@emotion/styled";
import {
  AnimationControls,
  motion,
  TargetAndTransition,
  useAnimation,
  VariantLabels,
  Variants,
} from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

// TODO Animation does not reset when component is set to `display: none` and then toggle back on again.

// TODO Allow the child delay offset to be passed as a prop.

// TODO Allow the whole component to be delayed.

export interface AnimatedTextProps {
  text: string;
  animationVariants: Variants | undefined;
  display?: boolean;
  delay?: number;
}

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const AnimatedTextWrapper = styled.div<{ display: boolean }>`
  ${({ display }) => (display ? "" : "display: none;")}
`;

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  animationVariants,
  display = true,
  delay,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <AnimatedTextWrapper display={display}>
      {text.split(" ").map((word, index) => {
        return (
          <Word
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={controls}
            variants={{}}
            transition={{
              delayChildren: delay ?? 0 + index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((char, index) => {
              return (
                <Character
                  variants={animationVariants}
                  key={index}
                  aria-hidden="true"
                >
                  {char}
                </Character>
              );
            })}
          </Word>
        );
      })}
    </AnimatedTextWrapper>
  );
};
