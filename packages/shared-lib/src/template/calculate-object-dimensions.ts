import fabric from "fabric/fabric-impl";

const getWidth = (object: fabric.Object) =>
  (object.width || 0) *
  (object.type === "image" ? (object.scaleX as number) : 1);

const getHeight = (object: fabric.Object) =>
  (object.height || 0) *
  (object.type === "image" ? (object.scaleY as number) : 1);

export const calculateObjectDimensions = (object: fabric.Object) => ({
  width: getWidth(object),
  height: getHeight(object),
});

export { getWidth as calculateObjectWidth, getHeight as calculateObjectHeight };
