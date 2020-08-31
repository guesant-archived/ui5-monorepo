import { updateSelectedItems } from "./update-selected-items";

test("update-selected-items: should update selected items", () => {
  const initialTemplate = {
    template: {
      model: {
        fabricExported: {
          objects: [
            { key: "obj1", width: 10 },
            { key: "obj2", width: 10 },
            { key: "obj3", width: 10 },
          ],
        },
      },
    },
  };
  const expectedTemplate = {
    model: {
      fabricExported: {
        objects: [
          { key: "obj1", width: 100 },
          { key: "obj2", width: 10 },
          { key: "obj3", width: 100 },
        ],
      },
    },
  };

  const gotTemplate = updateSelectedItems({ selectedItems: [0, 2] })(
    initialTemplate,
  )(({ object: { width } }) => ({ width: width * 10 }));

  expect(gotTemplate).toStrictEqual(expectedTemplate);
});
