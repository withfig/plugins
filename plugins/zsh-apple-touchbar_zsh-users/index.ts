const plugin: Fig.Plugin = {
  icon: "💾",
  name: "zsh-apple-touchbar_zsh-users",
  displayName: "Zsh Apple Touchbar",
  type: "shell",
  description: "Make your touchbar more powerful.",
  authors: [
    {
      name: "zsh-users",
      github: "zsh-users",
    },
  ],
  github: "zsh-users/zsh-apple-touchbar",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "on-my-zsh",
    "zsh-plugin",
    "zsh-custom",
    "apple",
    "macbook-pro",
    "touchbar",
    "touchbar-support",
    "iterm2",
    "zsh-apple-touchbar",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-apple-touchbar.plugin.zsh"],
  },
};

export default plugin;
