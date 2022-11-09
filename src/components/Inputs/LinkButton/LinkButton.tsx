import styled from "@emotion/styled";
import React from "react";
import { Color } from "../../../types";

export interface LinkButtonProps {
  href: string;
  backgroundColor: Color;
  image: string;
  title: string;
}

const Logo = styled.img<{ backgroundColor: Color }>``;

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  backgroundColor,
  image,
  title,
}) => {
  return (
    <a href={href}>
      <Logo backgroundColor={backgroundColor} src={image} />
      {title}
    </a>
  );
};
