import styled from "@emotion/styled";
import { useState } from "react";
import { SemanticColors } from "../../../../types/Color";
import { Button } from "../Button";
import React from "react";

interface ScrollToButtonProps {
  target: number;
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

  const scroll = (target: number, behavior: "smooth" | "auto") => {
    console.log("scrolling");
    window.scrollTo({
      top: target,
      behavior: behavior,
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button onPress={() => scroll(target, behavior)} visible={visible}>
      {children}
    </Button>
  );
};
