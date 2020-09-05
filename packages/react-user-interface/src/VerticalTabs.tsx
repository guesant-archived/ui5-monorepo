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
import { Tab, TabList, TabPanel, Tabs } from "./Tabs";

export interface VerticalTabUI {
  displayText: string;
}

export type VerticalTabComponent =
  | string
  | React.FunctionComponent<any>
  | React.ComponentClass<any, any>;

export type VerticalTabItem = () => [
  { ui: VerticalTabUI },
  VerticalTabComponent,
];

export const VerticalTab = ({ tabs }: { tabs: VerticalTabItem[] }) => {
  return (
    <React.Fragment>
      <Tabs
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TabList>
          {tabs.map((tab, idx) => {
            const [{ ui }] = tab();
            return <Tab key={idx}>{ui.displayText}</Tab>;
          })}
        </TabList>
        {tabs.map((tab, idx) => {
          const [, component] = tab();
          return (
            <TabPanel style={{ flex: 1 }} key={idx}>
              {React.createElement(component)}
            </TabPanel>
          );
        })}
      </Tabs>
    </React.Fragment>
  );
};
