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
