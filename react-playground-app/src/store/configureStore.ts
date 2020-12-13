import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import editor from "./editor";

const reducer = combineReducers({ editor });

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

export default store;
