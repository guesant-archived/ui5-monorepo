import { createAction } from "@reduxjs/toolkit";
import { EditorPlugin } from "../../../../plugins/EditorPlugin";

const ADD_PLUGIN = "plugins/addPlugin";

export const addPlugin = createAction<EditorPlugin>(ADD_PLUGIN);
