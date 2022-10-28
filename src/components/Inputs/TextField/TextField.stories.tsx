import { Story } from "@storybook/react";
import React from "react";
import { ValidationState } from "react-types";
import { ThemeContext } from "../../ThemeContext";
import { TextField } from "./TextField";
import { Card } from "../../Containers/Card/Card";
import { CardBody } from "../../Containers/Card/CardBody";
import { TextContent } from "../../Displays/TextContent/TextContent";
import styled from "@emotion/styled";
import { darkTheme } from "../../../consts/internal/theme";
import { Button } from "../Button/Button";

export default {
  title: "Components/Inputs/TextField",
  component: TextField,
};

const StyledTextField = styled(TextField)`
  flex-direction: row;
`;

const CustomLabel = styled.label`
  color: yellow;
`;

export const Primary: Story = () => {
  const [text, setText] = React.useState("");
  return (
    <ThemeContext theme={darkTheme}>
      <Card centered="both" width="500px" height="500px">
        <CardBody>
          <TextField
            label="Test Input Label"
            onChange={setText}
            placeholder="Placeholder"
          />
          <br />
          <TextContent>
            <p>You entered: {text}</p>
          </TextContent>
        </CardBody>
      </Card>
    </ThemeContext>
  );
};

// TODO isRequired is not properly invalidating empty inputs.

export const Validation: Story = () => {
  const [passwordInput, setPasswordInput] = React.useState("");
  const [passwordValidity, setPasswordValidity] =
    React.useState(ValidationState);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  const [emailInput, setEmailInput] = React.useState("");
  const [emailValidity, setEmailValidity] = React.useState(ValidationState);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");

  const validateEmail = () => {
    const emailRegex = /[\w]*@[a-zA-Z]*\.[a-z]{2,}/g;

    if (emailInput === "") {
      setEmailValidity("invalid");
      setEmailErrorMessage("You must enter an email.");
    } else if (emailInput.match(emailRegex) === null) {
      setEmailValidity("invalid");
      setEmailErrorMessage("Please enter a valid email.");
    } else {
      setEmailValidity("valid");
    }
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$/g;

    if (passwordInput === "") {
      setPasswordValidity("invalid");
      setPasswordErrorMessage("You must enter a password.");
    } else if (passwordInput.match(passwordRegex) === null) {
      setPasswordValidity("invalid");
      setPasswordErrorMessage(
        "Your password must fulfill the above requirements."
      );
    } else {
      setPasswordValidity("valid");
    }
  };

  // TODO I'd like to incorperate some of these validation steps.

  return (
    <ThemeContext theme={darkTheme}>
      <Card centered="both" width="500px" height="500px">
        <CardBody>
          <TextContent>This Input Is Pattern Matched</TextContent>
          <form>
            <TextField
              onChange={setEmailInput}
              onBlur={validateEmail}
              validationState={emailValidity}
              errorMessage={emailErrorMessage}
              label="Email"
              placeholder="Enter your email"
              type="email"
              isRequired
              pattern="[\w]*@[a-zA-Z]*\.[a-z]{2,}"
            />
            <TextField
              label="Password"
              onChange={setPasswordInput}
              onBlur={validatePassword}
              validationState={passwordValidity}
              placeholder="Enter your password"
              type="password"
              isRequired
              description="Password must be at least 8 characters, and include at least one uppercase and lowercase letter, one number, and one special character."
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$"
              errorMessage={passwordErrorMessage}
            />
            <Button type="submit">Submit</Button>
          </form>
          <br />
        </CardBody>
      </Card>
    </ThemeContext>
  );
};

// TODO I'd like to figure out how to make this clear-on-focus feature a baked-in option.

export const ClearOnFocus: Story = () => {
  const [text, setText] = React.useState("Default text");

  return (
    <ThemeContext theme={darkTheme}>
      <Card centered="both" width="500px" height="500px">
        <CardBody>
          <TextField
            label="Clicking in this input should clear it."
            defaultValue={text}
            onFocus={() => setText("")}
            value={text}
            onBlur={() => {
              if (text === "") {
                setText("Default text");
              }
            }}
            onChange={setText}
            renderLabel={(props, label) => (
              <CustomLabel {...props}>{label}</CustomLabel>
            )}
          />
          <br />
          <TextContent>
            <p>You entered: {text}</p>
          </TextContent>
        </CardBody>
      </Card>
    </ThemeContext>
  );
};

export const CustomRenders: Story = () => {
  const [text, setText] = React.useState("");
  return (
    <ThemeContext theme={darkTheme}>
      <Card centered="both" width="500px" height="500px">
        <CardBody>
          <StyledTextField
            label="This font should be yellow!"
            onChange={setText}
            renderLabel={(props, label) => (
              <CustomLabel {...props}>{label}</CustomLabel>
            )}
          />
          <br />
          <TextContent>
            <p>You entered: {text}</p>
          </TextContent>
        </CardBody>
      </Card>
    </ThemeContext>
  );
};

export const Styled: Story = () => {
  const [text, setText] = React.useState("");
  return (
    <ThemeContext theme={darkTheme}>
      <Card centered="both" width="500px" height="500px">
        <CardBody>
          <StyledTextField label="This text field is styled." />
          <br />
          <TextContent>
            <p>You entered: {text}</p>
          </TextContent>
        </CardBody>
      </Card>
    </ThemeContext>
  );
};
