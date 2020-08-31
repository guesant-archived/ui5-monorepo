import { sharedProperty } from "./shared-property";

const pizza1 = ["pizza", "pizza", "pizza"];
const pizza2 = ["pizza", "pizza", "not pizza"];

test("every-equals: should return 'pizza'", () => {
  expect(sharedProperty((x) => x, "")(pizza1)).toBe("pizza");
});

test("every-equals: should return 'sauce'", () => {
  expect(sharedProperty((x) => x, "sauce")(pizza2)).toBe("sauce");
});
