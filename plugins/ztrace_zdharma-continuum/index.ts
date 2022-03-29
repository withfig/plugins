const plugin: Fig.Plugin = {
  name: "ztrace_zdharma-continuum",
  type: "shell",
  authors: [
    {
      name: "zdharma-continuum",
      github: "zdharma-continuum",
    }
  ],
  github: "zdharma-continuum/ztrace",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["ztrace.plugin.zsh"],
  },
};

export default plugin;
