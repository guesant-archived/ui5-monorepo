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

import fabric from "fabric/fabric-impl";

const getWidth = (object: fabric.Object) =>
  (object.width || 0) *
  (object.type === "image" ? (object.scaleX as number) : 1);

const getHeight = (object: fabric.Object) =>
  (object.height || 0) *
  (object.type === "image" ? (object.scaleY as number) : 1);

export const calculateObjectDimensions = (object: fabric.Object) => ({
  width: getWidth(object),
  height: getHeight(object),
});

export { getWidth as calculateObjectWidth, getHeight as calculateObjectHeight };
