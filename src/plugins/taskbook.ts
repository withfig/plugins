const plugin: Fig.Plugin = {
  name: "taskbook",
  type: "shell",
  description: "A zsh plugin that auto-completes task numbers for taskbook",
  github: "mastern2k3/taskbook-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
