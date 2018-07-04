import * as React from "react";
import styled from "styled-components";

import Input from "../../primitives/Input/Input";
import InputWrapper from "../../primitives/InputWrapper/InputWrapper";

const Img = styled.img`
  margin-right: 22px;
`;

interface Props {
  id: string;
  value: string;
  onChange: (value: string) => any;
  placeholder: string;
  icon?: string;
}

export default class InputText extends React.PureComponent<Props> {
  public static defaultProps = {
    placeholder: ""
  };

  public handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(ev.target.value);
  };

  public render() {
    const { id, value, placeholder, icon } = this.props;

    return (
      <InputWrapper height={2.25} marginBottom={0}>
        {/* i will use personally react-icons */}
        {icon && <Img src={icon} alt="" />}
        <Input
          id={id}
          type="text"
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
        />
      </InputWrapper>
    );
  }
}
