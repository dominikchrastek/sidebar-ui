import * as rhythm from "rhythm-fns";

import styled, { theme } from "../../theme";
import colorMixin from "../../theme/mixins/color";

interface Props {
  fontSize: number;
  color?: string;
  bold?: boolean;
  scale?: number;
  marginTop?: number;
  marginBottom?: number;
  children: React.ReactNode;
}

const Line = styled<Props, "span">("span")`
  display: inline-block;
  font-size: ${props => props.fontSize * props.theme.baseFont}px;
  line-height: ${props =>
    rhythm.getLineHeight(props.theme.baseFont, props.scale, props.fontSize)}px;
  margin-top: ${props =>
    rhythm.getLineMargin(
      props.theme.baseFont,
      props.scale,
      props.marginTop,
      0
    )}px;
  margin-bottom: ${props =>
    rhythm.getLineMargin(
      props.theme.baseFont,
      props.scale,
      props.marginBottom,
      0
    )}px;
  ${colorMixin};
`;

Line.defaultProps = {
  bold: false,
  fontSize: 1,
  marginBottom: 0,
  marginTop: 0,
  scale: theme.baseLineScale
};

export default Line;
