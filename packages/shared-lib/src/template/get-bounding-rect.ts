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
import { rotate } from "../rotate";
import { calculateObjectDimensions } from "./calculate-object-dimensions";

const degreeToRadians = (degree: number) => (degree * Math.PI) / 180;

export const getBoundingRect = (object: TemplateObject) => {
  const { left, top, angle } = object;
  const { width, height } = calculateObjectDimensions(object);
  const right = left + width;
  const bottom = top + height;

  const origin: [number, number] = [left, top];
  const lt = rotate([left, top])(origin)(degreeToRadians(-angle));
  const lb = rotate([left, bottom])(origin)(degreeToRadians(-angle));
  const rt = rotate([right, top])(origin)(degreeToRadians(-angle));
  const rb = rotate([right, bottom])(origin)(degreeToRadians(-angle));

  const boxLeft = [lt, lb, rt, rb]
    .map(([x]) => x)
    .reduce((acc, i) => Math.min(acc, i), Infinity);
  const boxTop = [lt, lb, rt, rb]
    .map(([, y]) => y)
    .reduce((acc, i) => Math.min(acc, i), Infinity);
  const boxRight = [lt, lb, rt, rb]
    .map(([x]) => x)
    .reduce((acc, i) => Math.max(acc, i), -Infinity);
  const boxBottom = [lt, lb, rt, rb]
    .map(([, y]) => y)
    .reduce((acc, i) => Math.max(acc, i), -Infinity);

  return {
    lt,
    lb,
    rt,
    rb,
    boxTop,
    boxLeft,
    boxRight,
    boxBottom,
    boxWidth: Math.abs(boxRight - boxLeft),
    boxHeight: Math.abs(boxBottom - boxTop),
  };
};
