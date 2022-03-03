const plugin: Fig.Plugin = {
  name: "history-sync",
  type: "shell",
  description: "An oh-my-zsh plugin for GPG encrypted internet synchronised Zsh history, with Git.",
  github: "wulfgarpro/history-sync",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "zsh-plugin",
    "zsh-history",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
