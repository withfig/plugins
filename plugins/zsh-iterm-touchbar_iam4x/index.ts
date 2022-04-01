const plugin: Fig.Plugin = {
  name: "zsh-iterm-touchbar_iam4x",
  type: "shell",
  description: "Display feedback of terminal in the 🍏 Touchbar",
  authors: [
    {
      name: "iam4x",
      github: "iam4x",
      twitter: "iam4x",
    }
  ],
  github: "iam4x/zsh-iterm-touchbar",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "touchbar",
    "iterm2",
    "git",
    "productivity",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-iterm-touchbar.plugin.zsh"],
  },
};

export default plugin;
