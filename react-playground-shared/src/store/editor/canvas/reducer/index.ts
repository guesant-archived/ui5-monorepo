import { createReducer } from "@reduxjs/toolkit";
import { Canvas } from "fabric/fabric-impl";
import { setCanvas } from "../actions";

export type CanvasState = null | Canvas;

const canvasReducer = createReducer<CanvasState>(null, (builder) => {
  builder.addCase(setCanvas, (_, action) => action.payload);
});

export { canvasReducer as reducer };

export default canvasReducer;
