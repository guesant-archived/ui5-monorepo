import { EditorPlugin } from "../plugins/EditorPlugin";
import storeRef from "../store/configureStore";

export const setPluginsStore = (store: typeof storeRef) => (
  plugins: EditorPlugin[]
) => {
  for (const plugin of plugins) {
    plugin.setStore(store);
  }
};
