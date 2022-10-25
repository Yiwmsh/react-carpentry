import { Story } from "@storybook/react";
import React from "react";
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
            placeholder="Tell me a joke"
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
  const [text, setText] = React.useState("");
  return (
    <ThemeContext theme={darkTheme}>
      <Card centered="both" width="500px" height="500px">
        <CardBody>
          <TextContent>This Input Is Pattern Matched</TextContent>
          <form>
            <TextField
              label="Email"
              placeholder="Enter your email"
              type="email"
              isRequired
              pattern="[\w]*@[a-zA-Z]*\.[a-z]{2,}"
            />
            <TextField
              label="Password"
              onChange={setText}
              placeholder="Enter your password"
              type="password"
              isRequired
              validationState="invalid"
              description="Password must be at least 8 characters, and include at least one uppercase and lowercase letter, one number, and one special character."
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$"
            />
            <Button type="submit">Submit</Button>
          </form>
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
