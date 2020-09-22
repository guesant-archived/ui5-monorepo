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

import { TemplateObject } from "@fantastic-images/types/src/TemplateObject";

const getWidth = (object: TemplateObject) =>
  (object.width || 0) * (object.scaleX as number);

const getHeight = (object: TemplateObject) =>
  (object.height || 0) * (object.scaleY as number);

export const calculateObjectDimensions = (object: TemplateObject) => ({
  width: getWidth(object),
  height: getHeight(object),
});

export { getWidth as calculateObjectWidth, getHeight as calculateObjectHeight };
