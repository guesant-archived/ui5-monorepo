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

export interface LayerListHeaderProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const StyledLayerListHeader = styled.p`
  display: flex;
  align-items: center;
  padding: 4px 0 4px 12px;
  border: 0 solid #e5e5e5;
  border-bottom-width: 1px;
  border-top-width: 1px;
  user-select: none;
  cursor: default;

  text-transform: uppercase;
  font-weight: bold;
`;

export const LayerListHeader = StyledLayerListHeader;
