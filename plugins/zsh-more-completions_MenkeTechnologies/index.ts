const plugin: Fig.Plugin = {
  icon: "🌟",
  name: "zsh-more-completions_MenkeTechnologies",
  displayName: "Zsh More Completions",
  type: "shell",
  authors: [
    {
      name: "MenkeTechnologies",
      github: "MenkeTechnologies",
    },
  ],
  github: "MenkeTechnologies/zsh-more-completions",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-more-completions.plugin.zsh"],
  },
};

export default plugin;
