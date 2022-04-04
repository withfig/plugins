const plugin: Fig.Plugin = {
  name: "git-add-remote_caarlos0-graveyard",
  type: "shell",
  description: "ZSH plugin to easily add the upstream remote to your git fork.",
  authors: [
    {
      name: "caarlos0-graveyard",
      github: "caarlos0-graveyard",
    },
  ],
  github: "caarlos0-graveyard/git-add-remote",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["add-remote.sh"],
    },
    zsh: {
      sourceFiles: ["add-remote.plugin.zsh"],
    },
  },
};

export default plugin;
