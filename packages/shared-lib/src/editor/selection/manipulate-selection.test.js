import { manipulateSelection } from "./manipulate-selection";

test("manipulate-selection: should clear all the selection", () => {
  expect(manipulateSelection("clear")([1, 2, 3])(NaN)).toStrictEqual([]);
  expect(manipulateSelection("clear")([1, 3])(NaN)).toStrictEqual([]);
});

test("manipulate-selection: should toggle the selected item", () => {
  expect(manipulateSelection("toggle")([1, 2, 3])(2)).toStrictEqual([1, 3]);
  expect(manipulateSelection("toggle")([1, 3])(2)).toStrictEqual([1, 3, 2]);
});

test("manipulate-selection: should range the selected item", () => {
  expect(manipulateSelection("range")([1, 2, 3])(5)).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
  ]);
  expect(manipulateSelection("range")([5, 4])(1)).toStrictEqual([
    5,
    4,
    3,
    2,
    1,
  ]);

  expect(manipulateSelection("range")([1, 7])(8)).toStrictEqual([1, 7, 8]);
});

test("manipulate-selection: should select the item", () => {
  expect(manipulateSelection("select")([1, 2, 3])(5)).toStrictEqual([5]);
  expect(manipulateSelection("select")([])(1)).toStrictEqual([1]);
});
