import { manipulateSelection } from "./manipulate-selection";

test("manipulate-selection: should clear all the selection", () => {
  expect(manipulateSelection("clear")([1, 2, 3])(NaN)).toStrictEqual([]);
});
