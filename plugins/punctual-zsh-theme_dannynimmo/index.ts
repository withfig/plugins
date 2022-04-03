const plugin: Fig.Plugin = {
  name: "punctual-zsh-theme_dannynimmo",
  type: "shell",
  description: "Punctual, a Zsh prompt theme",
  authors: [
    {
      name: "dannynimmo",
      github: "dannynimmo",
    },
  ],
  github: "dannynimmo/punctual-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "zsh-theme"],
  installation: {
    origin: "github",
    sourceFiles: ["punctual.zsh-theme"],
  },
};

export default plugin;
