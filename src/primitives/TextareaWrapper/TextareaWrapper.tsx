import InputWrapper from "../InputWrapper/InputWrapper";

const TextareaWrapper = InputWrapper.extend`
  height: auto;
  min-height: ${props => props.minHeight * props.theme.baseLine}px;
  padding: 0px;
  resize: none;
`;

export default TextareaWrapper;
