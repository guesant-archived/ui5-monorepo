import { everyEquals } from "./every-equals";

export const everySwitch = (arr: any[]) => (
  caseIsTrue: any,
  caseIsFalse: any,
) => (everyEquals(arr) ? caseIsTrue : caseIsFalse);
