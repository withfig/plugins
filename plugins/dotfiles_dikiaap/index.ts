const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "dotfiles_dikiaap",
  type: "shell",
  description:
    "Get ready for dotfiles. Contains i3, i3blocks, rofi, dunst, picom, vim, tmux, and zsh.",
  authors: [
    {
      name: "dikiaap",
      github: "dikiaap",
    },
  ],
  github: "dikiaap/dotfiles",
  license: ["MIT"],
  site: "https://git.io/~dotfiles",
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: [
    "dotfiles",
    "linux",
    "i3",
    "i3wm",
    "i3blocks",
    "rofi",
    "dunst",
    "picom",
    "compton",
    "vim",
    "vimrc",
    "neovim",
    "tmux",
    "alacritty",
    "zsh",
    "zshrc",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["install.sh"],
    },
    zsh: {
      sourceFiles: [".zsh"],
    },
  },
};

export default plugin;
