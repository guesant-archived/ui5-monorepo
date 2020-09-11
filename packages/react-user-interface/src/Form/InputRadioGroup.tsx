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

export interface InputRadioGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const StyledInputRadioGroup = styled.div`
  display: flex;
  border: 2px solid transparent;
  border-radius: 2px;
  &:hover {
    border-color: rgba(96, 94, 92, 0.1);
  }

  &:not(:hover) > :first-child {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    overflow: hidden;
  }

  &:not(:hover) > :last-child {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    overflow: hidden;
  }
`;

export const InputRadioGroup = StyledInputRadioGroup;
