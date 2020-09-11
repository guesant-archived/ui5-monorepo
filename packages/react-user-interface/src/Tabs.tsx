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

import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import styled from "styled-components";

const StyledTabs = styled(Tabs)``;

const StyledTab = styled(Tab)`
  cursor: default;
  padding: 2px;
  font-size: 14px;
  opacity: 0.6;
  &:hover,
  &.react-tabs__tab--selected {
    opacity: 1;
  }
  & + & {
    margin-left: 4px;
  }
`;

const StyledTabList = styled(TabList)`
  display: flex;
  padding: 6px;
  border-bottom: 1px;
  max-width: 100%;
  overflow: auto;
`;

const StyledTabPanel = styled(TabPanel)`
  &:not(.react-tabs__tab-panel--selected) {
    position: absolute;
    visibility: hidden;
  }
`;

export {
  StyledTabs as Tabs,
  StyledTabList as TabList,
  StyledTabPanel as TabPanel,
  StyledTab as Tab,
};
