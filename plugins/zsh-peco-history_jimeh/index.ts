const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "zsh-peco-history_jimeh",
  type: "shell",
  description: "Search shell history with peco when pressing ctrl+r.",
  authors: [
    {
      name: "jimeh",
      github: "jimeh",
      twitter: "jimeh",
    },
  ],
  github: "jimeh/zsh-peco-history",
  license: ["CC0-1.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-peco-history.plugin.zsh"],
  },
};

export default plugin;
