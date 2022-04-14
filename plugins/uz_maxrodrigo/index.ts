const plugin: Fig.Plugin = {
  icon: "💾",
  name: "uz_maxrodrigo",
  displayName: "μz",
  type: "shell",
  description: "Zsh micro plugin manager",
  authors: [
    {
      name: "maxrodrigo",
      github: "maxrodrigo",
    },
  ],
  github: "maxrodrigo/uz",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: [
    "zsh",
    "zshrc",
    "zsh-plugin",
    "framework",
    "plugin-manager",
    "cli",
    "command-line",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["uz.zsh"],
  },
};

export default plugin;
