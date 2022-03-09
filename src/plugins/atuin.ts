const plugin: Fig.Plugin = {
  name: "atuin",
  type: "shell",
  description: "🐢 Magical shell history",
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
  },
};

export default plugin;
