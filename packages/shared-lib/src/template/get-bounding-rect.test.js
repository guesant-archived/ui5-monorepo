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

import { getBoundingRect } from "./get-bounding-rect";

const precisionRate = 3;

test("get-bounding-rect: should calculate bounding rect with 90º angle", () => {
  const object = {
    type: "textbox",
    left: 0,
    top: 0,
    angle: 90,
    width: 30,
    height: 10,
    scaleX: 1,
    scaleY: 1,
  };

  const {
    boxTop,
    boxLeft,
    boxRight,
    boxBottom,
    boxWidth,
    boxHeight,
  } = getBoundingRect(object);

  expect(boxLeft).toBeCloseTo(-10, precisionRate);
  expect(boxTop).toBeCloseTo(0, precisionRate);
  expect(boxBottom).toBeCloseTo(30, precisionRate);
  expect(boxRight).toBeCloseTo(0, precisionRate);
  expect(boxWidth).toBeCloseTo(10, precisionRate);
  expect(boxHeight).toBeCloseTo(30, precisionRate);
});
