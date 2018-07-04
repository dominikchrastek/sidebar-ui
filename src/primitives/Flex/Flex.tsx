import Margin from "../Margin/Margin";

interface Props {
  children: React.ReactNodeArray;
  marginBottom?: number;
  marginTop?: number;
  space?: number;
  direction?:
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "initial"
    | "inherit";
  x?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  y?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
}

const Flex = Margin.extend<Props>`
  display: flex;
  ${props =>
    props.x &&
    `justify-content: ${props.direction === "column" ? props.y : props.x}`};
  ${props =>
    props.y &&
    `align-items: ${props.direction === "column" ? props.x : props.y}`};
  ${props => props.direction && `flex-direction: ${props.direction}`};
  & > *:not(:last-child) {
    ${props => props.space && `margin-right: ${props.space}px`};
  }
`;

Flex.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  space: 0
};

export default Flex;
