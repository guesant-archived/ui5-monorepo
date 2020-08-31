import * as React from "react";
import styled from "styled-components";
import { InputBase } from "./InputBase";
import { StyledInputText } from "./InputText";

export interface InputComboProps {
  selectProps: React.SelectHTMLAttributes<HTMLSelectElement>;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  wrapperProps: React.HTMLAttributes<HTMLDivElement>;
}

export interface InputComboProps {
  sharedProp: InputComboProps["selectProps"] & InputComboProps["inputProps"];
}

export const StyledInputCombo = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

export const StyledInputComboSelect = styled.select`
  display: block;
  width: 19ex;
  padding: 4px;
  background: transparent;
  text-align: right;
  &:focus {
    width: auto;
  }
`;

export const InputCombo = ({
  sharedProp,
  selectProps,
  inputProps,
  wrapperProps,
}: InputComboProps) => (
  <div>
    <InputBase>
      <StyledInputCombo {...wrapperProps}>
        <StyledInputText {...{ ...sharedProp, ...inputProps }} />
        <StyledInputComboSelect {...{ ...sharedProp, ...selectProps }} />
      </StyledInputCombo>
    </InputBase>
  </div>
);
