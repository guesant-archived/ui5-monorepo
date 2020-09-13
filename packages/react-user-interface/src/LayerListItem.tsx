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

import styled from "styled-components";

export interface LayerListItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {}

export const StyledLayerListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  border: 1px solid transparent;
  user-select: none;
  cursor: default;
  &:not(.no-border):hover:not(.active) {
    border-color: #184d9e;
  }
  &.active {
    background-color: rgb(24 77 158 / 13%);
  }
`;

export const LayerListItem = StyledLayerListItem;
