const plugin: Fig.Plugin = {
  name: "reentry-hook",
  type: "shell",
  description: "ZSH plugin that re-enters working directory if it has been removed and re-created.",
  github: "RobSis/zsh-reentry-hook",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
