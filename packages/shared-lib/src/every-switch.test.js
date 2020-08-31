import { everySwitch } from "./every-switch";

test("every-switch: should return 'on'", () => {
  expect(everySwitch([1, 1, 1, 1])("on", "off")).toBe("on");
});

test("every-switch: should return 'off'", () => {
  expect(everySwitch([1, 1, 0, 1])("on", "off")).toBe("off");
});
