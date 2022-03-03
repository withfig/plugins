const plugin: Fig.Plugin = {
  name: "toggle-command-prefix",
  type: "shell",
  description: "Zsh widget to toggle a prefix on a command",
  github: "xPMo/zsh-toggle-command-prefix",
  shells: ["zsh"],
  tags: [
    "sudo",
    "zsh-plugin",
    "zsh-widget",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
