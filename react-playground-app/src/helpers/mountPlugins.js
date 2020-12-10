export const mountPlugins = async (plugins) => {
  const toUnmount = [];
  for (const plugin of plugins) {
    const callback = await plugin.onMount();
    typeof callback === "function" && toUnmount.push(callback);
  }
  return async () => {
    for (const callback of toUnmount) {
      await callback();
    }
  };
};
