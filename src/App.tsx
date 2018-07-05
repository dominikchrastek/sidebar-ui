import * as React from "react";
import { Separator } from "./components";
import { Line, Margin } from "./primitives";
import Root from "./Root";
import styled from "./theme/";

const Bg = styled.div`
  background-color: ${props => props.theme.color.gray4};
  width: 100%;
  min-height: 100%;
`;

const Container = Margin.extend`
  max-width: 450px;
  text-align: center;
  padding: 0 24px;
`;

const StyledSeparator = Separator.extend`
  margin-right: auto;
  margin-left: auto;
  max-width: 158px;
`;

class App extends React.Component {
  public render() {
    return (
      <Bg>
        <Root />
        <Container center={true}>
          <StyledSeparator marginTop={1} />
          <Line color="gray3" marginBottom={2}>
            LobsterChat app design created by Artur Muller. Lobster icon created
            by Ingmar Zawadzki from the Noun Project.
          </Line>
        </Container>
      </Bg>
    );
  }
}

export default App;
