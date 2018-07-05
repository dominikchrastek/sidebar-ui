import * as React from "react";

import Margin from "../../primitives/Margin/Margin";

const StyledMargin = Margin.extend`
  box-shadow: 0 2px 3px 0 rgba(31, 43, 52, 0.15);
  border-radius: 3px;
  background-color: ${props => props.theme.color.white};
  padding: 20px;
`;

interface Props {
  marginTop?: number;
  marginBottom?: number;
  children: React.ReactNode;
  className?: string;
}

const Card = (props: Props) => (
  <StyledMargin
    className={props.className}
    marginBottom={props.marginBottom}
    marginTop={props.marginTop}
  >
    {props.children}
  </StyledMargin>
);

export default Card;
