const plugin: Fig.Plugin = {
  icon: "💡",
  name: "zsh-git-sync_caarlos0-graveyard",
  type: "shell",
  description: "A zsh plugin to sync git repositories and clean them up.",
  authors: [
    {
      name: "caarlos0-graveyard",
      github: "caarlos0-graveyard",
    },
  ],
  github: "caarlos0-graveyard/zsh-git-sync",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["git-sync.sh"],
    },
    zsh: {
      sourceFiles: ["git-sync.plugin.zsh"],
    },
  },
};

export default plugin;
