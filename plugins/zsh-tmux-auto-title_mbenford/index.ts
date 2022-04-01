const plugin: Fig.Plugin = {
  name: "zsh-tmux-auto-title_mbenford",
  type: "shell",
  description: "ZSH plugin for tmux that automatically sets the title of windows/panes as the current foreground command.",
  authors: [
    {
      name: "mbenford",
      github: "mbenford",
    }
  ],
  github: "mbenford/zsh-tmux-auto-title",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-tmux-auto-title.plugin.zsh"],
  },
};

export default plugin;
