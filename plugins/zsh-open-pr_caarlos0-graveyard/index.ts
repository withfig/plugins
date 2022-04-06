const plugin: Fig.Plugin = {
  icon: "🎋",
  name: "zsh-open-pr_caarlos0-graveyard",
  displayName: "open-pr",
  type: "shell",
  keywords: ["git", "pr", "github"],
  screenshots: [
    "https://github.com/caarlos0-graveyard/zsh-open-pr/raw/master/git-open-pr.mov.gif",
  ],
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
