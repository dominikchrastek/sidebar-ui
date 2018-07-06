import PropTypes from "prop-types";

import Line from "../Line/Line";

const Input = Line.withComponent("input").extend`
  border: none;
  padding: 0;
  background: initial;
  box-sizing: border-box;
  width: 100%;
  letter-spacing: 0.7px;
  color: ${({ theme }) => theme.color.white};
  font-weight: 500;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color ${({ theme }) => theme.color.white};
    opacity: 0.52;
    font-weight: 500;
  }
`;

Input.propTypes = {
  fontSize: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number
};

Input.defaultProps = {
  fontSize: 0.8125,
  marginTop: 0,
  marginBottom: 0
};

export default Input;
