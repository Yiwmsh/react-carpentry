import styled from "@emotion/styled";
import React, { DOMAttributes } from "react";
import { AriaTextFieldOptions, useTextField } from "react-aria";
import { SemanticColors } from "../../../types/Color";
import { TextContent } from "../../Displays/TextContent/TextContent";
import { motion } from "framer-motion";

// TODO I am not pleased with my use of <any> here.
interface TextFieldProps extends AriaTextFieldOptions<"input"> {
  renderLabel?: (
    props: DOMAttributes<any>,
    label: React.ReactNode,
    isRequired?: boolean
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

const TextFieldInput = styled(motion.input)`
  color: var(${SemanticColors.text});
  border: transparent;
  border-bottom: 1px solid var(${SemanticColors.text});
  background-color: transparent;
  outline: transparent;
  line-height: 2em;

  &:invalid {
    border-bottom: 1px solid var(${SemanticColors.error});
  }

  &:valid {
  }
`;

const TextFieldDescription = styled.div`
  font-size: 0.8em;
  font-style: italic;
  filter: opacity(50%);
`;

const TextFieldErrorMessage = styled.div``;

export const TextField: React.FC<TextFieldProps> = ({
  renderLabel,
  renderInput,
  renderDescription,
  renderError,
  ...rest
}) => {
  const { label, errorMessage, description, validationState, isRequired } =
    rest;
  const ref = React.useRef(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(rest, ref);

  if (renderLabel === undefined) {
    renderLabel = (props, label) => {
      return (
        <TextFieldLabel {...props}>
          <TextContent>
            {label}
            {isRequired && " *"}
          </TextContent>
        </TextFieldLabel>
      );
    };
  }

  if (renderInput === undefined) {
    renderInput = (props, ref) => {
      return (
        /* This sucks and I hate it, but I need to move on from this issue for now. 
        The problem is that framer-motion and react-aria have a lot of overlap in their props types.
        */
        //@ts-ignore
        <TextFieldInput
          {...props}
          placeholder={props.placeholder}
          ref={ref}
          initial={{ opacity: 0.4, scale: 1 }}
          whileFocus={{ opacity: 1, scale: 1.02 }}
        />
      );
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
          <TextContent color={SemanticColors.error}>{errorMessage}</TextContent>
        </TextFieldErrorMessage>
      );
    };
  }

  return (
    <TextFieldContainer>
      {renderLabel(labelProps, label, isRequired)}
      {renderInput(inputProps, ref)}
      {description && renderDescription(descriptionProps, description)}
      {errorMessage &&
        validationState === "invalid" &&
        renderError(errorMessageProps, errorMessage)}
    </TextFieldContainer>
  );
};
