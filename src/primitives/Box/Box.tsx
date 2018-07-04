import * as rhythm from "rhythm-fns";

import styled from "../../theme";
import colorMixin from "../../theme/mixins/color";

interface Props {
  fontSize: number;
  color?: string;
  bold?: boolean;
  height?: number;
  marginTop?: number;
  marginBottom?: number;
  children: React.ReactNode;
}

const Box = styled<Props, "div">("div")`
  box-sizing: border-box;
  height: ${props =>
    rhythm.getBoxHeight(
      props.theme.baseFont,
      props.theme.baseLineScale,
      props.height
    )}px;
  margin-top: ${props =>
    rhythm.getBoxMargin(
      props.theme.baseFont,
      props.theme.baseLineScale,
      props.height,
      props.marginTop
    )}px;
  margin-bottom: ${props =>
    rhythm.getBoxMargin(
      props.theme.baseFont,
      props.theme.baseLineScale,
      props.height,
      props.marginBottom
    )}px;
  ${colorMixin};
`;

Box.defaultProps = {
  color: "initial",
  height: 1,
  marginBottom: 0,
  marginTop: 0
};

export default Box;
