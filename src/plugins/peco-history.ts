const plugin: Fig.Plugin = {
  name: "peco-history",
  type: "shell",
  description: "Search shell history with peco when pressing ctrl+r.",
  github: "jimeh/zsh-peco-history",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
