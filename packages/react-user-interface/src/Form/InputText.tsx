import * as React from "react";
import styled from "styled-components";
import { InputBaseProps } from "./InputBase";

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  style: InputBaseProps["style"];
  prefix: InputBaseProps["prefix"];
  rightPreview: boolean;
}

export const StyledInputText = styled.input`
  border: none;
  outline: none;
  padding: 4px 4px 4px 6px;
  line-height: 1;
  width: 100%;
  &[type="color"] {
    height: 100%;
    width: 25px;
  }
`;

export const InputText = ({
  style,
  prefix,
  rightPreview,
  ...props
}: InputTextProps) => (
  <StyledInputText
    style={style}
    prefix={prefix}
    children={
      <React.Fragment>
        <StyledInputText onFocus={({ target }) => target.select()} {...props} />
        {rightPreview && (
          <StyledInputText
            type="text"
            style={{ width: "auto", userSelect: "none", pointerEvents: "none" }}
            defaultValue={props.value}
          />
        )}
      </React.Fragment>
    }
  />
);
