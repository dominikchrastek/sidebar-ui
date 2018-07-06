import * as React from "react";
import { Page } from "../../data";
import { Flex, Line } from "../../primitives";
import styled, { withProps } from "../../theme";

interface PropsLi {
  selected: boolean;
  isSidebarOpen: boolean;
}

const Li = withProps<PropsLi>()(styled(Flex.withComponent("li")))`
  color: ${({ theme }) => theme.color.white};
  list-style-type: none;
  position: relative;
  letter-spacing: 0.7px;
  height: 39px;
  padding-left: 46px;
  padding-top: 4px;
  padding-bottom: 4px;
  transition: padding 600ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  ${({ isSidebarOpen }) =>
    !isSidebarOpen &&
    `
    padding-left: 0;
    `}
  ${({ selected }) =>
    selected &&
    `
    &:before {
      content: "";
      width: 4px;
      height: 100%;
      position: absolute;
      left: 0;
      background-image: linear-gradient(to bottom, #9dfad4, #64b7f2);
    }
    &:after {
      content: "";
      width: 4px;
      height: 31px;
      position: absolute;
      left: 0;
      -webkit-filter: blur(4px);
      filter: blur(4px);
      background-color: #86dfe0;
    }`}
`;

const Img = styled.img`
  margin-right: 4px;
`;

const Bg = withProps<{ selected: boolean }>()(styled.div)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    `
    opacity: 0.17;
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.15), #000000);
    `}
  &:hover {
    opacity: 0.17;
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.15), #000000);
  }
`;

const Title = withProps<{ isSidebarOpen: boolean }>()(Line.extend)`
  max-height: 20px;
  opacity: 1;
  transition: opacity 300ms cubic-bezier(0.19, 1, 0.22, 1);
  ${({ isSidebarOpen }) =>
    !isSidebarOpen &&
    `
    position: absolute;
    opacity: 0;
    `}
`;

interface Props {
  isSidebarOpen: boolean;
  title: string;
  page: Page;
  value: Page;
  icon: string;
  onClick: (value: string) => any;
}

class Item extends React.PureComponent<Props> {
  public handleClick = () => {
    const { onClick, value } = this.props;
    onClick(value);
  };

  public render() {
    const { isSidebarOpen, icon, page, value, title } = this.props;
    const selected = page === value;
    return (
      <Li
        y="center"
        x={isSidebarOpen ? "initial" : "center"}
        selected={selected}
        isSidebarOpen={isSidebarOpen}
        onClick={this.handleClick}
      >
        <Img src={icon} alt="Dashboard" />
        {<Title isSidebarOpen={isSidebarOpen}>{title}</Title>}
        <Bg selected={selected} />
      </Li>
    );
  }
}

export default Item;
