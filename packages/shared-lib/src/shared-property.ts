import { everySwitch } from "./every-switch";

const defaultHandler = (arg0: any) => arg0;

export const sharedProperty = (handler = defaultHandler, defaultValue = "") => (
  arr: any[],
) => {
  const computedValues = arr.map(handler);
  return everySwitch(computedValues)(computedValues[0], defaultValue);
};
