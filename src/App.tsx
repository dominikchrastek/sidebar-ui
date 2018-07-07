import * as React from "react";
import { Button, Sidebar } from "./components";
import { Page } from "./data";
import { Flex, Line } from "./primitives";
import styled from "./theme/";

const Bg = styled.div`
  background-color: ${props => props.theme.color.white};
  width: 100%;
  min-height: 100%;
`;

interface State {
  isOpen: boolean;
  page: Page;
}
class App extends React.Component<{}, State> {
  public state = {
    isOpen: true,
    page: Page.DASHBOARD
  };

  public handleSelectItem = (page: Page) => {
    this.setState({ page });
  };

  public handleToggleSidebar = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };
  public render() {
    return (
      <Bg>
        <Flex x="space-between" style={{ height: "100%", minHeight: "100vh" }}>
          <Sidebar
            isOpen={this.state.isOpen}
            onToggle={this.handleToggleSidebar}
            onSelect={this.handleSelectItem}
            page={this.state.page}
          />

          <div>
            <Line>selected: {this.state.page}</Line>
            <Button onClick={this.handleToggleSidebar}>toggle sidebar</Button>
          </div>
        </Flex>
      </Bg>
    );
  }
}

export default App;
