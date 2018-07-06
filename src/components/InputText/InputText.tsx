import * as React from "react";
import styled from "styled-components";

import Input from "../../primitives/Input/Input";
import InputWrapper from "../../primitives/InputWrapper/InputWrapper";

const Img = styled.img`
  margin-right: 4px;
`;

interface Props {
  id: string;
  value: string;
  onChange: (value: string) => any;
  onClick?: () => any;
  placeholder: string;
  icon?: string;
  className?: string;
}

export default class InputText extends React.PureComponent<Props> {
  public static defaultProps = {
    placeholder: ""
  };

  public handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(ev.target.value);
  };

  public render() {
    const { id, value, placeholder, icon, className, onClick } = this.props;

    return (
      <InputWrapper
        htmlFor={id}
        height={1.5}
        marginBottom={0}
        className={className}
        onClick={onClick}
      >
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
