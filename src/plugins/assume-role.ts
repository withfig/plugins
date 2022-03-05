const plugin: Fig.Plugin = {
  name: "assume-role",
  type: "shell",
  description: "A plugin for zsh.",
  github: "weizard/assume-role",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
