const plugin: Fig.Plugin = {
  name: "asdf",
  type: "shell",
  description: "Zsh integration and completions for asdf",
  github: "kiurchv/asdf.plugin.zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
