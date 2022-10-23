import styled from "@emotion/styled";
import React, { CSSProperties, DOMAttributes } from "react";
import {
  AriaTextFieldOptions,
  AriaTextFieldProps,
  useTextField,
} from "react-aria";
import { TextContent } from "../../Displays/TextContent/TextContent";

// TODO I am not pleased with my use of <any> here.
interface TextFieldProps extends AriaTextFieldOptions<"input"> {
  renderLabel?: (
    props: DOMAttributes<any>,
    label: React.ReactNode
  ) => React.ReactNode;
  renderInput?: (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.MutableRefObject<null>
  ) => React.ReactNode;
  renderDescription?: (
    props: DOMAttributes<any>,
    description: any
  ) => React.ReactNode;
  renderError?: (
    props: DOMAttributes<any>,
    errorMessage: React.ReactNode
  ) => React.ReactNode;
}

/*
    TODO Style this component's constituents.
    Just figure out a good general stylistic approach, the goal is for this component to be easily restylable.
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
  renderLabel,
  renderInput,
  renderDescription,
  renderError,
  ...rest
}) => {
  const { label } = rest;
  const ref = React.useRef(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(rest, ref);

  if (renderLabel === undefined) {
    renderLabel = (props) => {
      return (
        <TextFieldLabel {...props}>
          <TextContent>{label}</TextContent>
        </TextFieldLabel>
      );
    };
  }

  if (renderInput === undefined) {
    renderInput = (props, ref) => {
      return <TextFieldInput {...props} ref={ref} />;
    };
  }

  if (renderDescription === undefined) {
    renderDescription = (props, description) => {
      return (
        <TextFieldDescription {...props}>
          <TextContent>{description}</TextContent>
        </TextFieldDescription>
      );
    };
  }

  if (renderError === undefined) {
    renderError = (props, errorMessage) => {
      return (
        <TextFieldErrorMessage {...props}>
          <TextContent>{errorMessage}</TextContent>
        </TextFieldErrorMessage>
      );
    };
  }

  return (
    <TextFieldContainer>
      {renderLabel(labelProps, label)}
      {renderInput(inputProps, ref)}
      {rest.description &&
        renderDescription(descriptionProps, rest.description)}
      {rest.errorMessage && renderError(errorMessageProps, rest.errorMessage)}
    </TextFieldContainer>
  );
};
