//region Preamble
/**
 * https://github.com/guesant/ui5-monorepo
 * Copyright (C) 2020 Gabriel Rodrigues
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
//endregion

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
