const plugin: Fig.Plugin = {
  icon: "💾",
  name: "kido-zsh-theme_KidoThunder",
  displayName: "Kido Zsh Theme",
  type: "shell",
  description: "Kido Theme for Oh My ZSH",
  authors: [
    {
      name: "KidoThunder",
      github: "KidoThunder",
    },
  ],
  github: "KidoThunder/kido-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["kido.zsh-theme"],
  },
};

export default plugin;
