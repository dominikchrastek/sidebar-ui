import * as rhythm from "rhythm-fns";
import styled from "../../theme";

interface Props {
  marginTop?: number;
  marginBottom?: number;
}

// For flexible height elements (e.g. textarea) only.
// Use Box for fixed height elements instead.
const Margin = styled<Props, "div">("div")`
  box-sizing: border-box;
  margin-top: ${props =>
    rhythm.getBoxMargin(
      props.theme.baseFont,
      props.theme.baseLineScale,
      0,
      props.marginTop || 0
    )}px;
  margin-bottom: ${props =>
    rhythm.getBoxMargin(
      props.theme.baseFont,
      props.theme.baseLineScale,
      0,
      props.marginBottom || 0
    )}px;
`;

Margin.defaultProps = {
  marginTop: 0,
  marginBottom: 0
};

export default Margin;
