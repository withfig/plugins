const plugin: Fig.Plugin = {
  name: "mfunc_hlohm",
  type: "shell",
  description: "function wrapper plugin for oh-my-zsh",
  authors: [
    {
      name: "hlohm",
      github: "hlohm",
    },
  ],
  github: "hlohm/mfunc",
  license: ["GPL-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["mfunc.plugin.zsh"],
  },
};

export default plugin;
