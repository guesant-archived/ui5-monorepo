import { minmax } from "./minmax";

test("minmax: should return minmax of (2, 3)", () => {
  expect(minmax()(2, 3)).toStrictEqual([2, 3]);
});

test("minmax: should return minmax of (3, 2)", () => {
  expect(minmax()(3, 2)).toStrictEqual([2, 3]);
});

test("minmax: should return minmax of (2, 3) with two modifiers", () => {
  expect(
    minmax({ withMin: (x) => x * 3, withMax: (x) => x * 2 })(2, 3),
  ).toStrictEqual([6, 6]);
});

test("minmax: should return minmax of (2, 3) with one modifier", () => {
  expect(minmax({ withMin: (x) => x * 4 })(2, 3)).toStrictEqual([8, 3]);
});
