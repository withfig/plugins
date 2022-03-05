const plugin: Fig.Plugin = {
  name: "pyenv-lazy",
  type: "shell",
  description: "A zsh plugin for lazy loading of pyenv",
  github: "davidparsson/zsh-pyenv-lazy",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
