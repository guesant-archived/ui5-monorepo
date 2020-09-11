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
import { InputBase } from "./InputBase";
import { StyledInputText } from "./InputText";

export interface InputComboProps {
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
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
  width: 19px;
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
