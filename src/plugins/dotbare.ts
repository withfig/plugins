const plugin: Fig.Plugin = {
  name: "dotbare",
  type: "shell",
  description: "Manage dotfiles and any git directories interactively with fzf",
  github: "kazhala/dotbare",
  shells: ["zsh"],
  tags: [
    "config",
    "dotfiles",
    "bash",
    "zsh",
    "fzf",
    "command-line-tool",
    "zsh-plugin",
    "bash-script",
    "dotfiles-manager",
    "fzf-scripts",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
