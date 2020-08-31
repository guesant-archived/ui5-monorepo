import styled from "styled-components";

export interface LayerListItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {}

export const StyledLayerListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 0 4px 12px;
  border: 1px solid transparent;
  user-select: none;
  cursor: default;
  &:hover:not(.active) {
    border-color: #184d9e;
  }
  &.active {
    background-color: rgb(24 77 158 / 13%);
  }
`;

export const LayerListItem = StyledLayerListItem;
