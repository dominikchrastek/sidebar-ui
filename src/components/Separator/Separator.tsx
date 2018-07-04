import Box from "../../primitives/Box/Box";

const Separator = Box.extend`
  width: 100%;
  border-top: 1px solid ${props => props.theme.color.gray3};
`;

Separator.defaultProps = {
  height: 0,
  width: 1,
  marginTop: 0,
  marginBottom: 1
};

export default Separator;
