const plugin: Fig.Plugin = {
  name: "bumblebee",
  type: "shell",
  description: "Simple ZSH plugin to toggle optirun in the command line",
  github: "Niverton/zsh-bumblebee-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
