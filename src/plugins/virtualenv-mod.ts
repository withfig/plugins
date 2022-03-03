const plugin: Fig.Plugin = {
  name: "virtualenv-mod",
  type: "shell",
  description: "modified virtualenv zsh plugins for oh-my-zsh",
  github: "mattcl/virtualenv-mod",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
