const plugin: Fig.Plugin = {
  name: "rhoas",
  type: "shell",
  description: "A ZSH plugin for the rhoas command-line interface",
  github: "craicoverflow/rhoas-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
