import { createReducer } from "@reduxjs/toolkit";
import { ComponentsState } from "..";
import { setComponent } from "../actions";

const componentsReducer = createReducer<ComponentsState>([], (builder) => {
  builder.addCase(setComponent, (state, action) => {
    const [payloadArea, payloadComponent] = action.payload;
    return [
      ...state.filter(([area]) => area !== payloadArea),
      [payloadArea, payloadComponent],
    ];
  });
});

export { componentsReducer as reducer };

export default componentsReducer;
