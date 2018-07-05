import * as React from "react";

import styled from "../../theme";

interface Props {
  children: React.ReactNode;
  onClick: (event: any) => any;
}
const Button = styled<Props, "button">("button")`
  box-sizing: border-box;
  display: block;
  border-radius: 4px;
  height: 54px;
  padding: 20px;
  border: none;
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};
  font-size: 18px;
  line-height: 16px;
  text-align: center;
  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: inset 0 -2px 0 0 ${({ theme }) => theme.color.red1}
    cursor: pointer;
  }
  &:active {
    box-shadow: inset 0 2px 0 0 rgba(0, 0, 0, 0.15);
    background: ${({ theme }) => theme.color.red1};
  }
`;

Button.defaultProps = {
  color: "primary"
};

export default Button;
