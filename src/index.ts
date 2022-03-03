export const loadPlugin = async (name: string, forceLatest = false): Promise<Fig.Plugin> => {
  const source = forceLatest
    ? "https://cdn.jsdelivr.net/npm/@fig/plugins/build"
    : `.`;
  const mod = await import(`${source}/plugins/${name}.js`);
  return mod.default;
}
