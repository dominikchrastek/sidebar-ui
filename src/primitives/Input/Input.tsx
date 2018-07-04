import PropTypes from "prop-types";

import Line from "../Line/Line";

const Input = Line.withComponent("input").extend`
  border: none;
  padding: 0;
  background: initial;
  width: 100%;
  color: ${props => props.theme.color.gray2};

  &:focus {
    outline: none;
  }
`;

Input.propTypes = {
  fontSize: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number
};

Input.defaultProps = {
  fontSize: 1,
  marginTop: 0,
  marginBottom: 0
};

export default Input;
