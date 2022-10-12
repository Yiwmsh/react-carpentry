import { Button, ButtonProps } from "../Button";
import React from "react";

interface ScrollToButtonProps extends ButtonProps {
  scrollAnchor: number | React.MutableRefObject<any>;
  behavior?: "smooth" | "auto";
}

export const ScrollToButton: React.FC<ScrollToButtonProps> = ({
  behavior = "smooth",
  scrollAnchor: scrollTarget,
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
