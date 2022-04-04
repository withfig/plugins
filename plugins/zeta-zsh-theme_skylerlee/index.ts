const plugin: Fig.Plugin = {
  name: "zeta-zsh-theme_skylerlee",
  type: "shell",
  description: "Another :star: theme for oh-my-zsh",
  authors: [
    {
      name: "skylerlee",
      github: "skylerlee",
    },
  ],
  github: "skylerlee/zeta-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "oh-my-zsh", "theme"],
  installation: {
    origin: "github",
    sourceFiles: ["zeta.zsh-theme"],
  },
};

export default plugin;
