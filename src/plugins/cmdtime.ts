const plugin: Fig.Plugin = {
  name: "cmdtime",
  type: "shell",
  description: "ZSH plugin to display duration of command",
  github: "tom-auger/cmdtime",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
