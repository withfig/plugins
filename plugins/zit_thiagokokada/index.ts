const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "zit_thiagokokada",
  type: "shell",
  description: "minimal plugin manager for ZSH",
  authors: [
    {
      name: "thiagokokada",
      github: "thiagokokada",
      twitter: "k0kada",
    },
  ],
  github: "thiagokokada/zit",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: ["zsh", "plugin-manager", "shell", "zit"],
  installation: {
    origin: "github",
    sourceFiles: ["zit.zsh"],
  },
};

export default plugin;
