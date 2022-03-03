const plugin: Fig.Plugin = {
  name: "pyenv-lazy",
  type: "shell",
  description: "A zsh plugin for lazy loading of pyenv",
  github: "davidparsson/zsh-pyenv-lazy",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
