const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "phi-zsh-theme_LasaleFamine",
  displayName: "Phi Zsh Theme",
  type: "shell",
  description: "Clean and simple theme for ZSH.",
  authors: [
    {
      name: "LasaleFamine",
      github: "LasaleFamine",
      twitter: "lasalefamine",
    },
  ],
  github: "LasaleFamine/phi-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["phi.zsh-theme"],
  },
};

export default plugin;
