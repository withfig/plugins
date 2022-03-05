const plugin: Fig.Plugin = {
  name: "pyenv-lazy-load",
  type: "shell",
  description: "Plugin for lazy-loading pyenv in zsh.",
  github: "erikced/zsh-pyenv-lazy-load",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
