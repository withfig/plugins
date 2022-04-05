const plugin: Fig.Plugin = {
  icon: "💥",
  name: "zsh-open-pr_caarlos0-graveyard",
  type: "shell",
  description: "Open pull requests from the command line.",
  authors: [
    {
      name: "caarlos0-graveyard",
      github: "caarlos0-graveyard",
    },
  ],
  github: "caarlos0-graveyard/zsh-open-pr",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["git-open-pr.sh"],
    },
    zsh: {
      sourceFiles: ["git-open-pr.plugin.zsh"],
    },
  },
};

export default plugin;
