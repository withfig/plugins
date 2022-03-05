const plugin: Fig.Plugin = {
  name: "pyenv",
  type: "shell",
  description: "zsh plugin for installing, updating and loading pyenv",
  github: "mattberther/zsh-pyenv",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
