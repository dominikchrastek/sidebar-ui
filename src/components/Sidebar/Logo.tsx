import * as React from "react";
import LogoFull from "../../img/Full.svg";
import LogoSmall from "../../img/Symbol.svg";
import Flex from "../../primitives/Flex/Flex";

const LogoWrapper = Flex.extend`
  min-height: 45px;
  cursor: pointer;
`;

interface Props {
  isOpen: boolean;
}
const Logo = (props: Props) => (
  <LogoWrapper x="center">
    {props.isOpen ? (
      <img src={LogoFull} alt="Logo" />
    ) : (
      <img src={LogoSmall} alt="Logo" />
    )}
  </LogoWrapper>
);

export default Logo;
