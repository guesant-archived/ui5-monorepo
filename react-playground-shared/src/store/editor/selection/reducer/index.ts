import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  selectedObjects: [],
  selectedStaticImages: [],
};

const selectionReducer = createReducer(initialState, () => {});

export { selectionReducer as reducer };

export default selectionReducer;
