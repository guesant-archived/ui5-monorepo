import { everyEquals } from "./every-equals";

test("every-equals: should return true", () => {
  expect(everyEquals([1, 1, 1, 1])).toBe(true);
});

test("every-equals: should return false", () => {
  expect(everyEquals([1, 1, 0, 1])).toBe(false);
});
