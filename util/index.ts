export const loadPlugin = async (
  name: string,
  forceLatest = false,
  esm = true
): Promise<Fig.Plugin> => {
  const source = forceLatest
    ? `https://cdn.jsdelivr.net/npm/@fig/plugins/dist/${esm ? "esm" : "cjs"}`
    : "..";
  const mod = await import(`${source}/plugins/${name}/index.js`);
  return mod.default;
};
