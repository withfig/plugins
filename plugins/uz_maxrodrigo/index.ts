const plugin: Fig.Plugin = {
  name: "uz_maxrodrigo",
  type: "shell",
  description: "μz - zsh micro plugin manager",
  authors: [
    {
      name: "maxrodrigo",
      github: "maxrodrigo",
    }
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
