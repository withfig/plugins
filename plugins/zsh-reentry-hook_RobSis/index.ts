const plugin: Fig.Plugin = {
  name: "zsh-reentry-hook_RobSis",
  type: "shell",
  description: "ZSH plugin that re-enters working directory if it has been removed and re-created.",
  authors: [
    {
      name: "RobSis",
      github: "RobSis",
    },
  ],
  github: "RobSis/zsh-reentry-hook",
  license: ["GPL-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-reentry-hook.plugin.zsh"],
  },
};

export default plugin;
