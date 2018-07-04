import * as React from "react";
import IconComment from "./comment.svg";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import InputText from "./components/InputText/InputText";
import InputTextarea from "./components/InputTextarea/InputTextarea";
import Separator from "./components/Separator/Separator";
import Box from "./primitives/Box/Box";
import BoxLine from "./primitives/BoxLine/BoxLine";
import Flex from "./primitives/Flex/Flex";
import Line from "./primitives/Line/Line";
import styled from "./theme/";

interface State {
  text: string;
}

const Bg = styled.div`
  background-color: ${props => props.theme.color.gray4};
`;

class App extends React.Component<{}, State> {
  public state = {
    text: ""
  };

  public handleChangeText = (text: string) => {
    this.setState({ text });
  };

  public render() {
    return (
      <Bg>
        <Line fontSize={1.25} color="primary">
          something
        </Line>
        <Box fontSize={1.25} color="primary">
          something
        </Box>
        <Flex marginTop={1} y="center" x="space-between" space={20}>
          <InputText
            id="input"
            value={this.state.text}
            onChange={this.handleChangeText}
            placeholder="something"
            icon={IconComment}
          />
          <Button onClick={console.log} color="primary">
            Add
          </Button>
        </Flex>
        <Card>
          <InputTextarea
            id="textarea"
            onChange={this.handleChangeText}
            value={this.state.text}
            placeholder="value"
          />
          <Separator marginTop={1} />
          <BoxLine color="gray3">
            LobsterChat app design created by Artur Muller. Lobster icon created
            by Ingmar Zawadzki from the Noun Project.
          </BoxLine>
        </Card>
      </Bg>
    );
  }
}

export default App;
