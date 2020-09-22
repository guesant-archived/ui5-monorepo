import { getObjectsByIndex } from "./get-objects-by-index";

test("get-objects-by-index", () => {
  expect(
    getObjectsByIndex({ model: { fabricExported: { objects: [1, 2, 3] } } })([
      0,
      2,
    ]),
  ).toStrictEqual([1, 3]);
});
