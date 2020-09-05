import { isSelected } from "./is-selected";

test("is-selected: verify if the index is selected", () => {
  expect(isSelected([1, 3])(3)).toBe(true);
  expect(isSelected([1, 3])(2)).toBe(false);
});
