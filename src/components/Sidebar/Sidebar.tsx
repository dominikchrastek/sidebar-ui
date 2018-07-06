import * as React from "react";
import LogoFull from "../../img/Full.svg";
import Logo from "../../img/Symbol.svg";
import BoxLine from "../../primitives/BoxLine/BoxLine";
import Flex from "../../primitives/Flex/Flex";
import Margin from "../../primitives/Margin/Margin";
import styled, { withProps } from "../../theme";
import InputText from "../InputText/InputText";
import Item from "./Item";
import Section from "./Section";

import Dashboard from "../../img/Dashboard.svg";
import Data from "../../img/Data.svg";
import Expanded from "../../img/Expanded.svg";
import Indicators from "../../img/Indicators.svg";
import Logout from "../../img/Logout.svg";
import Search from "../../img/Search.svg";
import Settings from "../../img/Settings.svg";
import Strategies from "../../img/Strategies.svg";

import { Page } from "../../data";

interface IsOpenProps {
  isOpen: boolean;
}

const Side = withProps<IsOpenProps>()(styled.div)`
  box-sizing: border-box;
  width: 220px;
  height: 100vh;
  padding-top: 37px;
  background-image: linear-gradient(to top, #36268a, #7931e1);
  position: relative;
  transition: width 600ms cubic-bezier(0.19, 1, 0.22, 1);
  ${({ isOpen }) =>
    !isOpen &&
    `
    width: 60px;
    `};
`;

const LogoWrapper = Flex.extend`
  min-height: 45px;
`;

const Container = withProps<IsOpenProps>()(styled.div)`
  padding: ${({ isOpen }) => (isOpen ? "0 15px" : "0 10px")};
  #input-sidebar-search {
    transition: opacity 600ms cubic-bezier(0.19, 1, 0.22, 1);
    opacity: 1;
  }
  ${({ isOpen }) =>
    !isOpen &&
    `
  img {
    margin-left: 2px;
  }
  #input-sidebar-search {
    opacity: 0;
  }`}
`;

const Rights = BoxLine.extend`
  position: absolute;
  bottom: 0;
  opacity: 0.47;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 12px;
  height: 12px;
  letter-spacing: 0.74px;
`;

const Toggle = withProps<IsOpenProps>()(styled.img)`
  cursor: pointer;
  padding: 5px;
  opacity: 0.5;
  transition: transform 600ms cubic-bezier(0.19, 1, 0.22, 1);
  ${({ isOpen }) =>
    !isOpen &&
    `
    transform: rotate(-90deg);
    `}
  &:hover {
    opacity: 1;
  }
`;

interface State {
  text: string;
}

interface Props extends IsOpenProps {
  onToggle: () => any;
  onSelect: (page: Page) => any;
  page: Page;
}
class Sidebar extends React.PureComponent<Props, State> {
  public state = {
    text: ""
  };

  public handleChangeText = (text: string) => {
    this.setState({ text });
  };

  public handleClickInput = () => {
    const { onToggle, isOpen } = this.props;
    if (!isOpen) {
      onToggle();
    }
  };

  public render() {
    const { text } = this.state;
    const { isOpen, onToggle, onSelect, page } = this.props;
    return (
      <Side isOpen={isOpen}>
        <LogoWrapper x="center">
          {isOpen ? (
            <img src={LogoFull} alt="Logo" />
          ) : (
            <img src={Logo} alt="Logo" />
          )}
        </LogoWrapper>

        <Flex x="center" marginTop={28 / 24}>
          <Toggle src={Expanded} alt="" isOpen={isOpen} onClick={onToggle} />
        </Flex>

        <Margin>
          <Margin marginTop={1} marginBottom={5 / 24}>
            <Container isOpen={isOpen}>
              <InputText
                id="input-sidebar-search"
                value={text}
                icon={Search}
                onChange={this.handleChangeText}
                onClick={this.handleClickInput}
                placeholder="Search"
              />
            </Container>
          </Margin>
          <Section title="main" isSidebarOpen={isOpen}>
            <Item
              title="Dashboard"
              icon={Dashboard}
              isSidebarOpen={isOpen}
              onClick={onSelect}
              value={Page.DASHBOARD}
              page={page}
            />
          </Section>
          <Section title="marketplace" isSidebarOpen={isOpen}>
            <Item
              title="Strategies"
              icon={Strategies}
              isSidebarOpen={isOpen}
              onClick={onSelect}
              value={Page.STRATEGIES}
              page={page}
            />
            <Item
              title="Indicators"
              icon={Indicators}
              isSidebarOpen={isOpen}
              onClick={onSelect}
              value={Page.INDICATORS}
              page={page}
            />
            <Item
              title="Data"
              icon={Data}
              isSidebarOpen={isOpen}
              onClick={onSelect}
              value={Page.DATA}
              page={page}
            />
          </Section>
          <Section title="my profile" isSidebarOpen={isOpen}>
            <Item
              title="Settings"
              icon={Settings}
              isSidebarOpen={isOpen}
              onClick={onSelect}
              value={Page.SETTINGS}
              page={page}
            />
            <Item
              title="Log out"
              icon={Logout}
              isSidebarOpen={isOpen}
              onClick={onSelect}
              value={Page.LOG_OUT}
              page={page}
            />
          </Section>
          {isOpen && (
            <Rights fontSize={0.5625} color="white" marginBottom={20 / 24}>
              2018 All rights reserved
            </Rights>
          )}
        </Margin>
      </Side>
    );
  }
}

export default Sidebar;
