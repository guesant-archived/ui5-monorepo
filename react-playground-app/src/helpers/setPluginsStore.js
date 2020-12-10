export const setPluginsStore = (store) => (plugins) => {
  for (const plugin of plugins) {
    plugin.setStore(store);
  }
};
