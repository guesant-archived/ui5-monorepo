import * as React from "react";
import styled from "styled-components";
import { InputBaseProps, InputBase } from "./InputBase";

export interface InputSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  style: InputBaseProps["style"];
  prefix: InputBaseProps["prefix"];
}

export const StyledInputSelect = styled.select`
  background-color: transparent;
  padding: 4px;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
`;

export const InputSelect = ({ style, prefix, ...props }: InputSelectProps) => (
  <InputBase
    style={style}
    prefix={prefix}
    children={<StyledInputSelect {...props} />}
  />
);
