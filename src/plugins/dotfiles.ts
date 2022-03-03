const plugin: Fig.Plugin = {
  name: "dotfiles",
  type: "shell",
  description: "Keep your dotfiles in sync using Git, a plugin for Oh My Zsh",
  github: "vladmyr/dotfiles-plugin",
  shells: ["zsh"],
  tags: [
    "plugin",
    "git",
    "shell",
    "dotfiles",
    "oh-my-zsh",
    "sync",
    "synchronization",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
