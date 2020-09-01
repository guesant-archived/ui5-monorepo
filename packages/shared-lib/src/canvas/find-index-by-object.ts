import fabric from "fabric/fabric-impl";

export const findIndexByObject = (canvas: fabric.Canvas) => (
  object: fabric.Object,
) => canvas._objects.findIndex((i) => Object.is(object, i));
