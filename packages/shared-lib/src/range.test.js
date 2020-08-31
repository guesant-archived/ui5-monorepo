import { range } from "./range";

test("range: return array from 1 to 4", () => {
  expect(range(1, 5)).toStrictEqual([1, 2, 3, 4]);
});
