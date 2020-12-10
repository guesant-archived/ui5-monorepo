import { createAction } from "@reduxjs/toolkit";
import { Canvas } from "fabric/fabric-impl";

export const SET_CANVAS = "editor/canvas/setCanvas";
export const setCanvas = createAction<Canvas>(SET_CANVAS);
