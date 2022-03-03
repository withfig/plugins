const plugin: Fig.Plugin = {
  name: "recall",
  type: "shell",
  description: "zsh plugin for history UI",
  github: "mango-tree/zsh-recall",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
