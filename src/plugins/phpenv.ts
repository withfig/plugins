const plugin: Fig.Plugin = {
  name: "phpenv",
  type: "shell",
  description: "A Zsh plugin to auto-load phpenv",
  github: "sptndc/phpenv.plugin.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
