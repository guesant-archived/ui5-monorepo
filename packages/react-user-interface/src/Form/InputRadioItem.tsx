//region Preamble
/**
 * https://github.com/guesant/ui5-monorepo
 * Copyright (C) 2020 Gabriel Rodrigues
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
//endregion

import * as React from "react";
import styled from "styled-components";

export interface InputRadioItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: "string" | JSX.Element;
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
