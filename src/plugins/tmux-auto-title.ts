const plugin: Fig.Plugin = {
  name: "tmux-auto-title",
  type: "shell",
  description: "ZSH plugin for tmux that automatically sets the title of windows/panes as the current foreground command.",
  github: "mbenford/zsh-tmux-auto-title",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
