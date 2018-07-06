import PropTypes from "prop-types";
import Box from "../Box/Box";

const InputWrapper = Box.withComponent("label").extend`
  width: 100%;
  display: flex;
  align-itmes center;
  padding: 0 3px;
  background: rgba(0, 0, 0, 0.17);
  border-radius: 2px;
  position: relative;
  cursor: text;
  overflow: hidden;
`;

InputWrapper.propTypes = {
  height: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number
};

InputWrapper.defaultProps = {
  height: 2.25,
  marginTop: 0,
  marginBottom: 0
};

export default InputWrapper;
