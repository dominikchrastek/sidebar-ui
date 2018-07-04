import { css } from "../";

const colorMixin = css`
  color: ${props => props.theme.color[props.color]};
`;

export default colorMixin;
