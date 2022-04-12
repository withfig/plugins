export const loadPlugin = (
  name: string,
  forceLatest = false,
  esm = true
): Promise<Fig.Plugin> => {
  const source = forceLatest
    ? `https://cdn.jsdelivr.net/npm/@fig/plugins/dist/${esm ? "esm" : "cjs"}`
    : "..";
  return import(`${source}/plugins/${name}/index.js`).then(mod => mod.default);
};
