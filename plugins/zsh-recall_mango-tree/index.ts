const plugin: Fig.Plugin = {
  name: "zsh-recall_mango-tree",
  type: "shell",
  description: "zsh plugin for history UI ",
  authors: [
    {
      name: "mango-tree",
      github: "mango-tree",
    }
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
