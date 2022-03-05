const plugin: Fig.Plugin = {
  name: "safe-paste",
  type: "shell",
  description: "Zsh safe-paste plugin for antigen. See http://cirw.in/blog/bracketed-paste",
  github: "oz/safe-paste",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
