import * as rhythm from "rhythm-fns";
import styled from "../../theme";
import colorMixin from "../../theme/mixins/color";

interface Props {
  fontSize?: number;
  color?: string;
  bold?: boolean;
  height?: number;
  marginTop?: number;
  marginBottom?: number;
  children: React.ReactNode;
}
const BoxLine = styled<Props, "div">("div")`
  box-sizing: border-box;
  height: ${props =>
    rhythm.getBoxHeight(
      props.theme.baseFont,
      props.theme.baseLineScale,
      props.height
    )}px;
  line-height: ${props =>
    rhythm.getLineHeight(
      props.theme.baseFont,
      props.theme.baseLineScale,
      props.fontSize
    )}px;
  font-size: ${props => props.fontSize * props.theme.baseFont}px;
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

BoxLine.defaultProps = {
  bold: false,
  color: "inital",
  fontSize: 1,
  height: 1,
  marginBottom: 0,
  marginTop: 0
};

export default BoxLine;
