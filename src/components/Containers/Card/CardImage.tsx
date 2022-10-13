import styled from "@emotion/styled";
import React from "react";
import { CARD_CONTENT_VERTICAL_MARGIN } from "../../../consts/internal/measurements";
import {
  TextContent,
  TextContentProps,
} from "../../Displays/TextContent/TextContent";

const StyledCardImage = styled.img`
  max-width: 100%;
  margin: ${CARD_CONTENT_VERTICAL_MARGIN} 0;
`;

const CardImageSubtitle = styled.p`
  font-style: italic;
  text-align: center;
  /* This negative margin is used as the simplest solution I can think of to keep the subtitle and image close to each other. */
  margin-top: -${CARD_CONTENT_VERTICAL_MARGIN};
  margin-bottom: ${CARD_CONTENT_VERTICAL_MARGIN};
`;

interface CardImageProps extends TextContentProps {
  src: string;
  alt: string;
  subtitle?: string;
}

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  subtitle,
  ...rest
}) => {
  return (
    <>
      <StyledCardImage src={src} alt={alt} />
      {subtitle ? (
        <TextContent {...rest}>
          <CardImageSubtitle>{subtitle}</CardImageSubtitle>
        </TextContent>
      ) : null}
    </>
  );
};
