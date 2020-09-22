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

import { getGroupBox } from "./get-group-box";

const precisionRate = 3;

test("get-group-box: should calculate group box", () => {
  const { left, right, width } = getGroupBox([
    {
      angle: 0,
      left: 10,
      top: 0,
      width: 30,
      height: 10,
      scaleX: 1,
      scaleY: 1,
    },
    {
      angle: 0,
      left: 20,
      top: 0,
      width: 30,
      height: 10,
      scaleX: 1,
      scaleY: 1,
    },
  ]);

  expect(left).toBeCloseTo(10, precisionRate);
  expect(right).toBeCloseTo(50, precisionRate);
  expect(width).toBeCloseTo(40, precisionRate);
});
