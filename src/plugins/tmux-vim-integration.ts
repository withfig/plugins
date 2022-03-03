const plugin: Fig.Plugin = {
  name: "tmux-vim-integration",
  type: "shell",
  description: "A Zsh plugin to open files in a running Vim (or NeoVim) session, from an adjacent Tmux pane",
  github: "jsahlen/tmux-vim-integration.plugin.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
