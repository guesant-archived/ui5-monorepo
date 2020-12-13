import { createAction } from "@reduxjs/toolkit";
import { ComponentDefinition } from "..";

const SET_COMPONENT = "editor/components/setComponent";
export const setComponent = createAction<ComponentDefinition>(SET_COMPONENT);
