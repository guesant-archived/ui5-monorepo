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

import { TemplateObject } from "@fantastic-images/types";
import { getBoundingRect } from "./get-bounding-rect";

export const getGroupBox = (objects: TemplateObject[]) => {
  const [left, top, right, bottom] = objects
    .map((object) => getBoundingRect(object))
    .reduce(
      (
        [left, top, right, bottom],
        { boxLeft, boxTop, boxRight, boxBottom },
      ) => [
        Math.min(boxLeft, left),
        Math.min(boxTop, top),
        Math.max(boxRight, right),
        Math.max(boxBottom, bottom),
      ],
      [Infinity, Infinity, -Infinity, -Infinity],
    );

  return {
    left,
    top,
    right,
    bottom,
    width: right - left,
    height: bottom - top,
  };
};
