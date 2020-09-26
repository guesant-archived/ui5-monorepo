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
import { InputBaseProps, InputBase } from "./InputBase";

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  style?: InputBaseProps["style"];
  prefix?: InputBaseProps["prefix"];
  rightPreview?: boolean;
}

export const StyledInputText = styled.input`
  border: none;
  outline: none;
  padding: 4px 4px 4px 6px;
  line-height: 1;
  width: 100%;
  max-width: 100%;
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
  <InputBase
    style={style}
    prefix={prefix}
    children={
      <React.Fragment>
        <StyledInputText
          onFocus={({ target }) => (target as any).select?.call()}
          {...props}
        />
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
