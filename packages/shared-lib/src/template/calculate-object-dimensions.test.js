import { calculateObjectDimensions } from "./calculate-object-dimensions";

test("calculate-object-dimensions: should calculate dimensions of TextBox", () => {
  const object = {
    type: "textbox",
    width: 10,
    height: 10,
    scaleX: 10,
    scaleY: 10,
  };

  expect(calculateObjectDimensions(object)).toStrictEqual({
    width: object.width,
    height: object.height,
  });
});

test("calculate-object-dimensions: should calculate dimensions of Image", () => {
  const object = {
    type: "image",
    width: 10,
    height: 10,
    scaleX: 10,
    scaleY: 10,
  };

  expect(calculateObjectDimensions(object)).toStrictEqual({
    width: object.width * object.scaleX,
    height: object.height * object.scaleY,
  });
});
