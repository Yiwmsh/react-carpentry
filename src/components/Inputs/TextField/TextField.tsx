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

/*
    TODO Style this component's constituents.
    Just figure out a good general stylistic approach, the goal is for this component to be easily restylable.
    TODO Figure out how to allow pass-through of special renders.
    Something like:
        {labelRender ? (
            <labelRender {...labelProps}>
                {label}
            </labelRender>
        ) : (
            <TextFieldLabel {...labelProps}>
                <TextContent>{label}</TextContent>
            </TextFieldLabel>
    )}
    TODO Figure out why I can't restyle this component
            const RestyledTextField = styled(TextField)``;
        doesn't work.
*/

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
