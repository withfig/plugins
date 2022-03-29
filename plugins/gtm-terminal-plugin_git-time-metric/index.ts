const plugin: Fig.Plugin = {
  name: "gtm-terminal-plugin_git-time-metric",
  type: "shell",
  description: "Plugin for Bash or ZSH to be used with the Git Time Metric platform",
  authors: [
    {
      name: "git-time-metric",
      github: "git-time-metric",
    }
  ],
  github: "git-time-metric/gtm-terminal-plugin",
  shells: ["bash", "zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"gtm-plugin.sh"
      ],
    },
    zsh: {
      sourceFiles: [
"gtm-plugin.sh"
      ],
    },
  },
};

export default plugin;
