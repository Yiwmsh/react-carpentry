import { Story } from "@storybook/react";
import React from "react";
import { darkTheme } from "../../../consts/theme";
import { ThemeContext } from "../../ThemeContext";
import { TextField } from "./TextField";
import { Card } from "../../Containers/Card/Card";
import { CardBody } from "../../Containers/Card/CardBody";
import { TextContent } from "../../Displays/TextContent/TextContent";
import styled from "@emotion/styled";

export default {
  title: "TextField",
  component: TextField,
};

const StyledTextField = styled(TextField)`
  flex-direction: row;
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
          <br />
          <StyledTextField label="This text field is styled." />
        </CardBody>
      </Card>
    </ThemeContext>
  );
};
