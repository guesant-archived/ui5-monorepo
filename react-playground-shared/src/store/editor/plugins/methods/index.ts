import { EditorPlugin } from "../../../../EditorPlugin";
import { addPlugin } from "../actions";

export const registerPluginWithStore = (store: any) => {
  return (plugin: EditorPlugin) => async (dispatch: any) => {
    dispatch(addPlugin(plugin));
    store && plugin.setStore(store);
    await plugin.onSetup();
  };
};
