import styled from "@emotion/styled";
import { useState } from "react";
import { SemanticColors } from "../../../../types/Color";
import { Button } from "../Button";
import React from "react";

interface ScrollToButtonProps {
  target: number | React.MutableRefObject<any>;
  behavior?: "smooth" | "auto";
  children?: React.ReactNode;
}

export const ScrollToButton: React.FC<ScrollToButtonProps> = ({
  behavior = "smooth",
  target,
  children,
}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scroll = (
    target: number | React.MutableRefObject<any>,
    behavior: "smooth" | "auto"
  ) => {
    console.log("scrolling");
    if (typeof target === "number") {
      window.scrollTo({
        top: target,
        behavior: behavior,
      });
    } else {
      target?.current?.scrollIntoView?.();
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button onPress={() => scroll(target, behavior)} visible={visible}>
      {children}
    </Button>
  );
};
