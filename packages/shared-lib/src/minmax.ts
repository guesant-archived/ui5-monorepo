const fnDefault = (a: number) => a;

export const minmax = ({ withMin = fnDefault, withMax = fnDefault } = {}) => (
  a: number,
  b: number,
) => [withMin(Math.min(a, b)), withMax(Math.max(a, b))];
