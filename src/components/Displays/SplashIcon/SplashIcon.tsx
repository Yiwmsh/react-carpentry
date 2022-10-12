import styled from "@emotion/styled";
import { motion, useScroll } from "framer-motion/dist/framer-motion";
import React from "react";

const ImgContainer = styled(motion.div)`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

interface ImgProps {
  src: string;
  /** Alt text is required because accessibility is important. */
  alt: string;
}

export const SplashIcon: React.FC<ImgProps> = (props) => {
  const { scrollYProgress } = useScroll();
  const [scroll, setScroll] = React.useState(false);

  /* 
    TODO This component does not presently work as intended.
    And I'm a bit stumped on it currently. It'll come to me. The issue is that Framer Motion utilizes css transforms,
    naturally, but that's causing the 'fixed' icon transition to use the wrong coordinate system. As a result it gets
    'fixed' within its parent container, not at the top-most level of the page. The last thing I tried was surrounding
    the whole component in a higher level container that would become fixed at 100vw and 100vh, in an attempt to provide
    a fresh coordinate system that matched the screen, but that didn't work either.

    The goal of this component is to provide an image that will be a splash at the top of the screen, taking up the image's full width,
    but when the user scrolls the image out of view it shrinks to a 100x100 circular icon and stays in the top right corner of their screen.
  */

  const splashIconAnimation = {
    icon: {
      position: "fixed",
      top: 50,
      left: 50,
      width: "100px",
      height: "100px",
      borderRadius: 100,
    },
    splash: {
      position: "absolute",
      top: "unset",
      left: "unset",
      width: "100%",
      height: "100%",
    },
  };

  window.addEventListener("scroll", () =>
    //This value is temporarily set to 0.09 for testing, but it should absolutely not stay this way into prod.
    setScroll(scrollYProgress?.current > 0.09)
  );

  return (
    <>
      <ImgContainer
        layout
        animate={scroll ? "icon" : "splash"}
        variants={splashIconAnimation}
      >
        <img {...props}></img>
      </ImgContainer>
    </>
  );
};
