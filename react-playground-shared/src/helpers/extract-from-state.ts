import { Notation } from "notation";

const notate = Notation.create;

export const extract = (path: string, state: any, defaultValue = null) =>
  notate(state).get(path.replace(/\//g, "."), defaultValue);
