import * as React from "react";
import styled from "styled-components";

export interface InputRadioItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: JSX.Element;
  style?: React.StyleHTMLAttributes<
    React.LabelHTMLAttributes<HTMLLabelElement>
  >;
  wrapperProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  divStyle?: React.StyleHTMLAttributes<HTMLLabelElement>;
  inputStyle?: React.StyleHTMLAttributes<
    React.InputHTMLAttributes<HTMLLabelElement>
  >;
}

export const StyledInputRadioItem = styled.label`
  flex: 1;
  input[type="radio"] {
    display: none;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input:checked + div {
    background-color: rgba(96, 94, 92, 0.1);
  }
`;

export const InputRadioItem = ({
  style,
  children,
  divStyle,
  inputStyle,
  wrapperProps,
  ...props
}: InputRadioItemProps) => (
  <StyledInputRadioItem style={style} {...wrapperProps}>
    <input style={inputStyle} type="radio" {...props} />
    <div style={divStyle} children={children} />
  </StyledInputRadioItem>
);
