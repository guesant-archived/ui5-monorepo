import { combineReducers } from "@reduxjs/toolkit";
import canvas from "./canvas";
import components from "./components";
import events from "./events";
import plugins from "./plugins";
import selection from "./selection";

const editorReducer = combineReducers({
  canvas,
  components,
  plugins,
  events,
  selection,
});

export default editorReducer;
