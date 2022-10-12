import styled from "@emotion/styled";
import React, { CSSProperties } from "react";
import {
  AriaTextFieldOptions,
  AriaTextFieldProps,
  useTextField,
} from "react-aria";
import { TextContent } from "../../Displays/TextContent/TextContent";

interface TextFieldProps extends AriaTextFieldOptions<"input"> {
  labelRender?: React.ReactNode;
  inputRender?: React.ReactNode;
  descriptionRender?: React.ReactNode;
  errorRender?: React.ReactNode;
}

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextFieldLabel = styled.label``;

const TextFieldInput = styled.input``;

const TextFieldDescription = styled.div``;

const TextFieldErrorMessage = styled.div``;

export const TextField: React.FC<TextFieldProps> = ({
  labelRender,
  inputRender,
  descriptionRender,
  errorRender,
  ...rest
}) => {
  const { label } = rest;
  const ref = React.useRef(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(rest, ref);
  return (
    <TextFieldContainer>
      <TextFieldLabel {...labelProps}>
        <TextContent>{label}</TextContent>
      </TextFieldLabel>
      <TextFieldInput {...inputProps} ref={ref} />
      {rest.description && (
        <TextFieldDescription {...descriptionProps}>
          <TextContent>{rest.description}</TextContent>
        </TextFieldDescription>
      )}
      {rest.errorMessage && (
        <TextFieldErrorMessage {...errorMessageProps}>
          <TextContent>{rest.errorMessage}</TextContent>
        </TextFieldErrorMessage>
      )}
    </TextFieldContainer>
  );
};
