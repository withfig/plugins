const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "tmux-zsh-vim-titles_MikeDacre",
  type: "shell",
  description: "Unified terminal titles in tmux, zsh, and vim/nvim",
  authors: [
    {
      name: "MikeDacre",
      github: "MikeDacre",
    },
  ],
  github: "MikeDacre/tmux-zsh-vim-titles",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: [
    "shell",
    "tmux",
    "tmux-plugins",
    "zsh",
    "vim",
    "vim-plugins",
    "zsh-configuration",
    "terminal",
    "console",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["bash-titles.plugin.sh"],
    },
    zsh: {
      sourceFiles: ["unified-titles.plugin.zsh"],
    },
  },
};

export default plugin;
