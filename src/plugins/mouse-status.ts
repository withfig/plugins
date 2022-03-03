const plugin: Fig.Plugin = {
  name: "mouse-status",
  type: "shell",
  description: "ZSH plugin for mouse color status",
  github: "gryffyn/mouse-status",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
