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
