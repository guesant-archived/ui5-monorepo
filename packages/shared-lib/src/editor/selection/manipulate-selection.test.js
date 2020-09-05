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

import { manipulateSelection } from "./manipulate-selection";

test("manipulate-selection: should clear all the selection", () => {
  expect(manipulateSelection("clear")([1, 2, 3])(NaN)).toStrictEqual([]);
  expect(manipulateSelection("clear")([1, 3])(NaN)).toStrictEqual([]);
});

test("manipulate-selection: should toggle the selected item", () => {
  expect(manipulateSelection("toggle")([1, 2, 3])(2)).toStrictEqual([1, 3]);
  expect(manipulateSelection("toggle")([1, 3])(2)).toStrictEqual([1, 3, 2]);
});

test("manipulate-selection: should range the selected item", () => {
  expect(manipulateSelection("range")([1, 2, 3])(5)).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
  ]);
  expect(manipulateSelection("range")([5, 4])(1)).toStrictEqual([
    5,
    4,
    3,
    2,
    1,
  ]);

  expect(manipulateSelection("range")([1, 7])(8)).toStrictEqual([1, 7, 8]);
});

test("manipulate-selection: should select the item", () => {
  expect(manipulateSelection("select")([1, 2, 3])(5)).toStrictEqual([5]);
  expect(manipulateSelection("select")([])(1)).toStrictEqual([1]);
});
