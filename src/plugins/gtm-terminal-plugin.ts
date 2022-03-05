const plugin: Fig.Plugin = {
  name: "gtm-terminal-plugin",
  type: "shell",
  description: "Plugin for Bash or ZSH to be used with the Git Time Metric platform",
  github: "git-time-metric/gtm-terminal-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
