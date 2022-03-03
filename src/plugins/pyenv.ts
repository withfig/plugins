const plugin: Fig.Plugin = {
  name: "pyenv",
  type: "shell",
  description: "zsh plugin for installing, updating and loading pyenv",
  github: "mattberther/zsh-pyenv",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
