import PropTypes from "prop-types";

import Box from "../Box/Box";

const InputWrapper = Box.extend`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 ${props => props.theme.baseFont}px;
  border: 1px solid ${props => props.theme.color.gray3};
  border-radius: 3px;
  position: relative;
  cursor: text;
`;

InputWrapper.propTypes = {
  height: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number
};

InputWrapper.defaultProps = {
  height: 2.125,
  marginTop: 0,
  marginBottom: 0
};

export default InputWrapper;
