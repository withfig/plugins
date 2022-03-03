const plugin: Fig.Plugin = {
  name: "hub-ci-zsh-plugin",
  type: "shell",
  description: "A plugin for displaying ci status on your zsh theme",
  github: "raymondjcox/hub-ci-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
