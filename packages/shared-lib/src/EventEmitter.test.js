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

import { EventEmitter } from "./EventEmitter";

test("event-emitter: should listen to n events", () => {
  const events = new EventEmitter();
  let listenersCount = 0;

  events.on("new book", () => {
    listenersCount++;
  });

  events.on("new book", () => {
    listenersCount++;
  });

  events.syncEmit("new book");
  expect(listenersCount).toBe(2);
});

test("event-emitter: should unlisten to events", () => {
  const events = new EventEmitter();
  let listenersCount = 0;

  events.on("new book", () => {
    listenersCount++;
  });

  events.on("new book", () => {
    listenersCount++;
  });

  events.off("new book");
  events.syncEmit("new book");
  expect(listenersCount).toBe(0);
});

test("event-emitter: should listen to events. async emit", async () => {
  const events = new EventEmitter();
  const waitFor = (ms) => new Promise((resolve) => setInterval(resolve, ms));

  let listenersCount = 0;
  events.on("new book", async () => {
    await waitFor(1);
    listenersCount += 1;
  });
  events.on("new book", async () => {
    await waitFor(2);
    listenersCount += 2;
  });
  await events.emit("new book");
  expect(listenersCount).toBe(3);
});

test("event-emitter: should listen to events. parallel emit", async () => {
  const events = new EventEmitter();
  const waitFor = (ms) => new Promise((resolve) => setInterval(resolve, ms));

  let listenersCount = 0;
  events.on("new book", async () => {
    await waitFor(1);
    listenersCount += 1;
  });
  events.on("new book", async () => {
    await waitFor(2);
    listenersCount += 2;
  });
  await events.parallelEmit("new book");
  expect(listenersCount).toBe(3);
});
