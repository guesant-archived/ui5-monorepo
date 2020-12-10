import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import libStore from "@ui5/react-playground-shared/lib/store";
import { registerPlugin } from "@ui5/react-playground-shared/lib/store/editor/plugins/methods";
import { setPluginsStore } from "../helpers/setPluginsStore";
import { getEditorPlugins } from "../plugins";

const reducer = combineReducers(libStore);

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

const initEditorStore = async () => {
  const defaultPlugins = getEditorPlugins();
  setPluginsStore(store)(defaultPlugins);
  for (const plugin of defaultPlugins) {
    await store.dispatch(registerPlugin(plugin));
  }
};

initEditorStore();

export default store;
