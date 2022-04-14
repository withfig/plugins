const plugin: Fig.Plugin = {
  icon: "😎",
  name: "zsh-pyenv-lazy_davidparsson",
  displayName: "Zsh Pyenv Lazy",
  type: "shell",
  description: "A zsh plugin for lazy loading of pyenv",
  authors: [
    {
      name: "davidparsson",
      github: "davidparsson",
    },
  ],
  github: "davidparsson/zsh-pyenv-lazy",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["pyenv-lazy.plugin.zsh"],
  },
};

export default plugin;
