const plugin: Fig.Plugin = {
  name: "robbyrussell-WIP-theme_ecbrodie",
  type: "shell",
  description: "robbyrussell oh-my-zsh theme, with WIP customizations",
  authors: [
    {
      name: "ecbrodie",
      github: "ecbrodie",
    }
  ],
  github: "ecbrodie/robbyrussell-WIP-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["robbyrussell-WIP.zsh-theme"],
  },
};

export default plugin;
