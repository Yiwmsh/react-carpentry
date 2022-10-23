import { Story } from "@storybook/react";
import React from "react";
import { ThemeContext } from "../../ThemeContext";
import { TextField } from "./TextField";
import { Card } from "../../Containers/Card/Card";
import { CardBody } from "../../Containers/Card/CardBody";
import { TextContent } from "../../Displays/TextContent/TextContent";
import styled from "@emotion/styled";
import { darkTheme } from "../../../consts/internal/theme";

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

export const CustomRenders: Story = () => {
  const [text, setText] = React.useState("");
  return (
    <ThemeContext theme={darkTheme}>
      <Card centered="both" width="500px" height="500px">
        <CardBody>
          <StyledTextField
            label="This font should be yellow!"
            renderLabel={(props: React.DOMAttributes<any>) => (
              <CustomLabel {...props}>This font should be yellow!</CustomLabel>
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
