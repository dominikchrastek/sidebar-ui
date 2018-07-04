import PropTypes from "prop-types";
import * as React from "react";

import styled from "../../theme";

interface Props {
  children: React.ReactNode;
  color: string;
}
const Button = styled<Props, "div">("div")`
  box-sizing: border-box;
  display: block;
  border-radius: 4px;
  height: 55px;
  padding: 20px;
  border: none;
  background-color: ${props => props.theme.color[props.color]};
  color: ${props => props.theme.color.white};
  font-size: 18px;
  line-height: 16px;
  transition: box-shadow 250ms ease-in;
  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: inset 0 -2px 0 0 #cd3728;
    cursor: pointer;
  }
  &:active {
    box-shadow: inset 0 2px 0 0 #cd3728;
  }
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  color: "primary"
};

export default Button;
