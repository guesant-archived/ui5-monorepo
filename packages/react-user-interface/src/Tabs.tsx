import { createElement } from "react";
import { Tabs, TabList, TabPanel, Tab, TabProps } from "react-tabs";
import styled from "styled-components";

const StyledTabs = styled(Tabs)``;

const StyledTab = styled((props: TabProps) =>
  createElement(Tab, { ...props, selectedClassName: "tab-selected" }),
)`
  cursor: default;
  padding: 2px;
  font-size: 14px;
  opacity: 0.6;
  &:hover,
  &.tab-selected {
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

const StyledTabPanel = styled(TabPanel)``;

export {
  StyledTabs as Tabs,
  StyledTabList as TabList,
  StyledTabPanel as TabPanel,
  StyledTab as Tab,
};
