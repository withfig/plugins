const plugin: Fig.Plugin = {
  name: "plugin",
  type: "shell",
  description: "Custom zsh plugin to create custom plugins",
  github: "darrenbutcher/plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
