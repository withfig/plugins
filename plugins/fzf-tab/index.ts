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
  configuration: [
    {
      displayName: "Command",
      name: "fzf-command",
      type: "script",
      interface: "text",
      default: "fzf",
      compile: (value) => `zstyle ':fzf-tab:*' fzf-command ${value}`,
    },
    {
      displayName: "Padding",
      name: "fzf-pad",
      type: "script",
      interface: "text",
      default: 2,
      compile: (value) => `zstyle ':fzf-tab:*' fzf-pad ${value}`,
    },
  ],
};

export default plugin;
