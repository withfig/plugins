const plugin: Fig.Plugin = {
  name: "cmdtime",
  type: "shell",
  description: "ZSH plugin to display duration of command",
  github: "tom-auger/cmdtime",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
