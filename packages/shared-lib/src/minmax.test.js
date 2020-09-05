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

import { minmax } from "./minmax";

test("minmax: should return minmax of (2, 3)", () => {
  expect(minmax()(2, 3)).toStrictEqual([2, 3]);
});

test("minmax: should return minmax of (3, 2)", () => {
  expect(minmax()(3, 2)).toStrictEqual([2, 3]);
});

test("minmax: should return minmax of (2, 3) with two modifiers", () => {
  expect(
    minmax({ withMin: (x) => x * 3, withMax: (x) => x * 2 })(2, 3),
  ).toStrictEqual([6, 6]);
});

test("minmax: should return minmax of (2, 3) with one modifier", () => {
  expect(minmax({ withMin: (x) => x * 4 })(2, 3)).toStrictEqual([8, 3]);
});
