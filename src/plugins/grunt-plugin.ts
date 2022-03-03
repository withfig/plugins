const plugin: Fig.Plugin = {
  name: "grunt-plugin",
  type: "shell",
  description: "Zsh grunt plugin",
  github: "clauswitt/zsh-grunt-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
