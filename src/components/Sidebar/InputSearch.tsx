import * as React from "react";
import Search from "../../img/Search.svg";
import styled, { withProps } from "../../theme";
import InputText from "../InputText/InputText";

const Container = withProps<{ isOpen: boolean }>()(styled.div)`
  padding: ${({ isOpen }) => (isOpen ? "0 15px" : "0 10px")};
  #input-sidebar-search {
    transition: opacity 600ms cubic-bezier(0.19, 1, 0.22, 1);
    opacity: 1;
  }
  ${({ isOpen }) =>
    !isOpen &&
    `
  img {
    margin-left: 2px;
  }
  #input-sidebar-search {
    opacity: 0;
  }`}
`;

interface Props {
  isOpen: boolean;
  text: string;
  onChange: (text: string) => any;
  onClick: () => any;
}
const InputSearch = (props: Props) => (
  <Container isOpen={props.isOpen}>
    <InputText
      id="input-sidebar-search"
      value={props.text}
      icon={Search}
      onChange={props.onChange}
      onClick={props.onClick}
      placeholder="Search"
    />
  </Container>
);

export default InputSearch;
