import styled from "@emotion/styled";
import { motion, useScroll } from "framer-motion/dist/framer-motion";
import { element } from "prop-types";
import React from "react";

const ImgContainer = styled(motion.div)`
  overflow: hidden;
`;

const FixedDiv = styled.div`
  position: fixed;
  top: 90%;
`;

interface ImgProps {
  src: string;
  /** Alt text is required because accessibility is important. */
  alt: string;
}

export const SplashIcon: React.FC<ImgProps> = (props) => {
  const { scrollYProgress } = useScroll();

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

  const printScroll = () => {
    console.log(`${scrollYProgress?.current}`);
  };

  window.addEventListener("scroll", printScroll);

  return (
    <>
      <ImgContainer
        animate={scrollYProgress?.current > 0.5 ? "icon" : "splash"}
        variants={splashIconAnimation}
      >
        <img {...props}></img>
      </ImgContainer>
    </>
  );
};
