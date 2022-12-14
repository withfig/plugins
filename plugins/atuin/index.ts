const plugin: Fig.Plugin = {
  name: "atuin",
  displayName: "Atuin",
  type: "shell",
  description: "Magical shell history",
  icon: "🐢",
  authors: [
    {
      name: "ellie",
      github: "ellie",
      twitter: "ellie_huxtable",
    },
  ],
  github: "ellie/atuin",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["shell", "rust", "zsh", "history"],
  installation: {
    origin: "github",
    sourceFiles: ["atuin.plugin.zsh"],
    dependencies: [
      {
        type: "binary",
        name: "atuin",
      },
    ],
  },
};

export default plugin;
