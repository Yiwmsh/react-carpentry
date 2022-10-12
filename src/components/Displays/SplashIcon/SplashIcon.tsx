import styled from "@emotion/styled";
import { motion, useScroll } from "framer-motion/dist/framer-motion";
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
  const [imgScale, setImgScale] = React.useState(100);
  const printScroll = () => {
    console.log("Scroll Y Progress:");
    console.log(scrollYProgress);
  };
  const scaleImg = () => {
    setImgScale(100 - 100 * scrollYProgress.current);
  };
  window.addEventListener("scroll", printScroll);
  window.addEventListener("scroll", scaleImg);

  const splashDimension = "100%";
  const iconDimension = "100px";

  const dimensionFormula = `clamp(${iconDimension}, ${imgScale}%, ${splashDimension})`;

  const splashIconAnimation = {
    icon: {
      position: "fixed",
      top: "50px",
      left: "50px",
    },
    splash: {
      position: "absolute",
    },
  };

  return (
    <>
      <ImgContainer animate={imgScale < 50 ? "icon" : "splash"}>
        <img {...props}></img>
      </ImgContainer>
      <FixedDiv>
        <p>ImgScale: {`${imgScale}`}</p>
      </FixedDiv>
    </>
  );
};
