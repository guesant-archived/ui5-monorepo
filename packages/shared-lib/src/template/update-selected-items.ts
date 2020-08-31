import { Template, TemplateObject } from "@fantastic-images/types";
import * as lib from "@fantastic-images/lib";

const {
  model: {
    mutations: { UPDATE_OBJECT },
  },
} = lib;

export type fnFunction = ({
  objects,
  object,
  itemIndex,
}: {
  objects: TemplateObject[];
  object: TemplateObject;
  itemIndex: number;
}) => TemplateObject;

export type fnObject = TemplateObject;

export const updateSelectedItems = ({
  selectedItems,
}: {
  selectedItems: number[];
}) => ({ template }: { template: Template }) => (fn: fnFunction | fnObject) => {
  const {
    model: {
      fabricExported: { objects },
    },
  } = template;

  return selectedItems.reduce(
    (acc, i) =>
      UPDATE_OBJECT(i, {
        ...objects[i],
        ...(typeof fn === "function"
          ? fn({ objects, object: objects[i], itemIndex: i })
          : fn),
      })(acc),
    template,
  );
};
