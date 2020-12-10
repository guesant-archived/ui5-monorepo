import { extract } from "../../../../helpers/extract-from-state";

export const getComponent = (area: string, defaultValue = null) => (
  _: any,
  getState: any,
) => {
  const { components } = extract("editor/components", getState());
  return components[area] || defaultValue;
};
