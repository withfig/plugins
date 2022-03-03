const plugin: Fig.Plugin = {
  name: "assume-role",
  type: "shell",
  description: "A plugin for zsh.",
  github: "weizard/assume-role",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
