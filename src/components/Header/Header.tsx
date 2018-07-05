import * as React from "react";

import Back from "../../img/back_arrow.svg";
import logo from "../../img/logo_large.svg";
import Flex from "../../primitives/Flex/Flex";
import { mq } from "../../services/utils";
import styled from "../../theme/";

const Container = styled(Flex)`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  height: 235px;
  font-family: Lobster mem;
  font-size: 20px;
  padding: 0 55px;
  ${mq.mobile`
    height: 78px;
    padding: 0 15px;
  `};
`;

const BackBtn = Flex.withComponent("button").extend`
  width: 100px;
  height: 100px;
  background: ${props => props.theme.color.red1}
  border: none;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.color.red2}
  }
  &:active {
    background: ${props => props.theme.color.red3}
  }
  &:focus {
    outline: none;
  }
  ${mq.mobile`
      background: transparent;
      width: 20px;
      height: 20px;
      &:active {
        background: transparent;
      };

      &:hover {
        background: transparent;
      }
  `}
`;

const Logo = styled.img`
  ${mq.mobile`
    height: 30px;
  `};
`;

const Empty = styled.div`
  width: 100px;
  ${mq.mobile`
      width: 20px;
  `};
`;

interface Props {
  onBack?: () => any;
}
const Header = ({ onBack }: Props) => (
  <Container x="space-between" y="center">
    {onBack ? (
      <BackBtn x="center" y="center" onClick={onBack}>
        <img src={Back} alt="Back" />
      </BackBtn>
    ) : (
      <Empty />
    )}
    <Logo src={logo} alt="Logo" />
    <span />
  </Container>
);

export default Header;
