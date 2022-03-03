const plugin: Fig.Plugin = {
  name: "fzf-tab",
  type: "shell",
  description: "Replace zsh's default completion selection menu with fzf!",
  github: "Aloxaf/fzf-tab",
  shells: ["zsh"],
  tags: [
    "shell",
    "zsh",
    "tmux",
    "fzf",
    "completion",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
