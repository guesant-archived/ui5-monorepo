import { EditorPlugin } from "../plugins/EditorPlugin";

export const mountPlugins = async (plugins: EditorPlugin[]) => {
  const unmountPluginArray: any[] = [];
  for (const plugin of plugins) {
    const callback = await plugin.onMount();
    typeof callback === "function" && unmountPluginArray.push(callback);
  }
  return async () => {
    for (const callback of unmountPluginArray) {
      await callback();
    }
  };
};
