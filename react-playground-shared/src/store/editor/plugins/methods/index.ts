import { EditorPlugin } from "../../../../EditorPlugin";
import { addPlugin } from "../actions";

export const registerPlugin = (plugin: EditorPlugin) => async (
  dispatch: any,
) => {
  dispatch(addPlugin(plugin));
  await plugin.onSetup();
};

export const registerPluginWithStore = (store: any) => {
  return (plugin: EditorPlugin) => async (dispatch: any) => {
    store && plugin.setStore(store);
    dispatch(registerPlugin(plugin));
  };
};
