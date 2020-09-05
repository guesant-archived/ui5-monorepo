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

export interface InputBaseProps {
  style?: React.StyleHTMLAttributes<HTMLLabelElement>;
  children?: JSX.Element;
  prefix?: string;
}

export const StyledInputBase = styled.label`
  display: flex;
  max-width: 100%;

  border: 2px solid transparent;
  border-radius: 2px;
  border-color: rgba(96, 96, 92, 0.1);

  & > span,
  input,
  textarea,
  select {
    font-family: monospace;
    font-size: 12px;
  }

  select {
    font-size: initial;
  }

  & > div {
    width: 100%;
  }

  & > span {
    user-select: none;
    color: rgba(94, 94, 92);
    padding: 4px 8px;
    background: rgba(243, 242, 241);
  }

  &:hover {
    border-color: rgba(96, 94, 92, 0.4);
  }

  &:focus-within {
    border-color: #184d93;
  }
`;

export const InputBase = ({ style, prefix, children }: InputBaseProps) => (
  <StyledInputBase style={style}>
    {prefix && <span>{prefix}</span>}
    <div>{children}</div>
  </StyledInputBase>
);
