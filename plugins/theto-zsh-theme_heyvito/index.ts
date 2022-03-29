const plugin: Fig.Plugin = {
  name: "theto-zsh-theme_heyvito",
  type: "shell",
  description: "🎨 A Minimal ZSH theme",
  authors: [
    {
      name: "heyvito",
      github: "heyvito",
      twitter: "heyvito",
    }
  ],
  github: "heyvito/theto-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh",
    "zsh-theme",
    "minimalistic-theme",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["theto.zsh-theme"],
  },
};

export default plugin;
