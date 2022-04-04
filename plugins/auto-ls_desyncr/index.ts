const plugin: Fig.Plugin = {
  name: "auto-ls_desyncr",
  type: "shell",
  description: "zsh plugin for auto-ls",
  authors: [
    {
      name: "desyncr",
      github: "desyncr",
    },
  ],
  github: "desyncr/auto-ls",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "plugin", "prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["auto-ls.plugin.zsh"],
  },
};

export default plugin;
