import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
import { Color } from "../../../types";
import { TextContent } from "../../Displays";

export interface LinkButtonProps {
  href: string;
  image: string;
  title?: string;
  backgroundColor?: Color;
  target?: string;
}

const Logo = styled.img`
  max-height: 24px;
  max-width: 24px;
  margin-left: 8px;
`;

const StyledLinkButton = styled(motion.a)<{ backgroundColor?: Color }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 0.85em;
  text-decoration: none;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? "transparent"};
  border-radius: 100%;
`;

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  image,
  title,
  backgroundColor,
  target = "_blank",
}) => {
  return (
    <StyledLinkButton
      href={href}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      backgroundColor={backgroundColor}
      target={target}
    >
      <Logo src={image} />
      <TextContent>{title}</TextContent>
    </StyledLinkButton>
  );
};
