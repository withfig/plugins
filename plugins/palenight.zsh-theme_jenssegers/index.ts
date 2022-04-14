const plugin: Fig.Plugin = {
  icon: "💾",
  name: "palenight.zsh-theme_jenssegers",
  displayName: "Palenight Zsh Theme",
  type: "shell",
  description: "My custom zsh theme",
  authors: [
    {
      name: "jenssegers",
      github: "jenssegers",
      twitter: "jenssegers",
    },
  ],
  github: "jenssegers/palenight.zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["palenight.zsh-theme"],
  },
};

export default plugin;
