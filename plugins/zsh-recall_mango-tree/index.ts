const plugin: Fig.Plugin = {
  icon: "👾",
  name: "zsh-recall_mango-tree",
  displayName: "Zsh Recall",
  type: "shell",
  description: "zsh plugin for history UI ",
  authors: [
    {
      name: "mango-tree",
      github: "mango-tree",
    },
  ],
  github: "mango-tree/zsh-recall",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-recall.plugin.zsh"],
  },
};

export default plugin;
