const plugin: Fig.Plugin = {
  icon: "🎨",
  name: "theto-zsh-theme_heyvito",
  displayName: "Theto Zsh Theme",
  type: "shell",
  description: "A Minimal ZSH theme",
  authors: [
    {
      name: "heyvito",
      github: "heyvito",
      twitter: "heyvito",
    },
  ],
  github: "heyvito/theto-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "zsh-theme", "minimalistic-theme"],
  installation: {
    origin: "github",
    sourceFiles: ["theto.zsh-theme"],
  },
};

export default plugin;
