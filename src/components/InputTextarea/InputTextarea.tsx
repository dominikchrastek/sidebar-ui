import * as React from "react";

import Input from "../../primitives/Input/Input";
import TextareaWrapper from "../../primitives/TextareaWrapper/TextareaWrapper";

const Textarea = Input.withComponent("textarea").extend`
  resize: none;
  padding 18px;
`;

interface Props {
  id: string;
  value: string;
  placeholder: string;
  onChange: (ev: string) => any;
  minHeight?: number;
  marginTop?: number;
  marginBottom?: number;
}

export default class InputTextarea extends React.PureComponent<Props> {
  public static defaultProps = {
    minHeight: 4,
    marginTop: 0,
    marginBottom: 0,
    max: Infinity
  };

  public handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.onChange(ev.target.value);
  };

  public render() {
    const {
      id,
      marginTop,
      marginBottom,
      minHeight,
      value,
      placeholder
    } = this.props;

    return (
      <TextareaWrapper
        height={0 /* auto-scaled */}
        minHeight={minHeight}
        marginTop={marginTop}
        marginBottom={marginBottom}
      >
        <Textarea
          id={id}
          onChange={this.handleChange}
          value={value}
          placeholder={placeholder}
        />
      </TextareaWrapper>
    );
  }
}
