export const loadPlugin = (
  name: string,
  forceLatest = false,
  esm = true
): Promise<Fig.Plugin> => {
  const source = forceLatest
    ? `https://cdn.jsdelivr.net/npm/@fig/plugins/dist/${esm ? "esm" : "cjs"}`
    : "..";
  // Hacky workaround to https://github.com/evanw/esbuild/issues/532#issuecomment-1044740080 
  // load module.default.default for cjs and module.default for esm.
  return import(`${source}/plugins/${name}/index.js`).then(
    mod => "default" in mod.default ? mod.default.default : mod.default
  );
};
