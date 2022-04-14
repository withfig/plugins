const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "git-prune_diazod",
  displayName: "Git Prune",
  type: "shell",
  description:
    "Plugin of oh-my-zsh for deleting branches already merged in your git repositories",
  authors: [
    {
      name: "diazod",
      github: "diazod",
    },
  ],
  github: "diazod/git-prune",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["git-prune.plugin.zsh"],
  },
};

export default plugin;
