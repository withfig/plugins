const plugin: Fig.Plugin = {
  name: "zsh-geeknote_s7anley",
  type: "shell",
  description: "Geeknote plugin for oh-my-zsh",
  authors: [
    {
      name: "s7anley",
      github: "s7anley",
    },
  ],
  github: "s7anley/zsh-geeknote",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["geeknote", "zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["geeknote.plugin.zsh"],
  },
};

export default plugin;
