import * as React from "react";
import { Tab, TabList, TabPanel, Tabs } from "./Tabs";

export interface VerticalTabUI {
  displayText: string;
}

export type VerticalTabComponent =
  | string
  | React.FunctionComponent<any>
  | React.ComponentClass<any, any>;

export interface VerticalTabItem {
  ui: VerticalTabUI;
  component: VerticalTabComponent;
}

export const VerticalTab = ({ tabs }: { tabs: VerticalTabItem[] }) => {
  return (
    <Tabs
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TabList>
        {tabs.map(({ ui }, idx) => (
          <Tab key={idx}>{ui.displayText}</Tab>
        ))}
      </TabList>
      {tabs.map(({ component: Component }, idx) => (
        <TabPanel style={{ flex: 1 }} key={idx}>
          {React.createElement(Component)}
        </TabPanel>
      ))}
    </Tabs>
  );
};
