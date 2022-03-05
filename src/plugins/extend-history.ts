const plugin: Fig.Plugin = {
  name: "extend-history",
  type: "shell",
  description: "Zsh plugin to record command history with more context",
  github: "xav-b/zsh-extend-history",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
