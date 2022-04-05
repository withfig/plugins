const plugin: Fig.Plugin = {
  icon: "💾",
  name: "fzf-tab",
  type: "shell",
  description: "Replace zsh's default completion selection menu with fzf!",
  authors: [
    {
      name: "Aloxaf",
      github: "Aloxaf",
    },
  ],
  github: "Aloxaf/fzf-tab",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Completion"],
  keywords: ["zsh", "fzf", "shell", "zsh-plugin", "completion", "tmux"],
  installation: {
    origin: "github",
    sourceFiles: ["fzf-tab.plugin.zsh"],
  },
};

export default plugin;
