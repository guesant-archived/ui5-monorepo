import { manipulateSelection } from "./manipulate-selection";

test("manipulate-selection: should clear all the selection", () => {
  expect(manipulateSelection("clear")([1, 2, 3])(NaN)).toStrictEqual([]);
});

test("manipulate-selection: should toggle the selected item", () => {
  expect(manipulateSelection("toggle")([1, 2, 3])(2)).toStrictEqual([1, 3]);
  expect(manipulateSelection("toggle")([1, 3])(2)).toStrictEqual([1, 3, 2]);
});
