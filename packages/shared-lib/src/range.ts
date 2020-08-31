export const range = (start: number, end: number) =>
  start === end
    ? [start]
    : Array.from(Array(end - start).keys()).map((i) => i + start);
