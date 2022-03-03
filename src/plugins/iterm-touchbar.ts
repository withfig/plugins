const plugin: Fig.Plugin = {
  name: "iterm-touchbar",
  type: "shell",
  description: "Display feedback of terminal in the 🍏 Touchbar",
  github: "iam4x/zsh-iterm-touchbar",
  shells: ["zsh"],
  tags: [
    "git",
    "zsh",
    "productivity",
    "iterm2",
    "touchbar",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
