import { Button, ButtonProps } from "../Button";
import React from "react";

export interface ScrollToButtonProps extends ButtonProps {
  scrollTarget: number | React.MutableRefObject<any>;
  behavior?: "smooth" | "auto";
}

export const ScrollToButton: React.FC<ScrollToButtonProps> = ({
  behavior = "smooth",
  scrollTarget,
  ...rest
}) => {
  const scroll = (
    scrollTarget: number | React.MutableRefObject<any>,
    behavior: "smooth" | "auto"
  ) => {
    console.log("scrolling");
    if (typeof scrollTarget === "number") {
      window.scrollTo({
        top: scrollTarget,
        behavior: behavior,
      });
    } else {
      scrollTarget?.current?.scrollIntoView?.();
    }
  };

  return (
    <Button onPress={() => scroll(scrollTarget, behavior)} {...rest}></Button>
  );
};
