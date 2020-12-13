import { createReducer } from "@reduxjs/toolkit";
import { EditorPlugin } from "../../../../plugins/EditorPlugin";

import { addPlugin } from "../actions";

const pluginsReducer = createReducer<EditorPlugin[]>([], (builder) => {
  builder.addCase(addPlugin, (state, action) => {
    return Array.from(new Set(state).add(action.payload));
  });
});

export { pluginsReducer as reducer };

export default pluginsReducer;
