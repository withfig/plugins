const plugin: Fig.Plugin = {
  name: "zcomet_agkozak",
  type: "shell",
  description: "zcomet - Fast, Simple Zsh Plugin Manager",
  authors: [
    {
      name: "agkozak",
      github: "agkozak",
      twitter: "agkozak",
    }
  ],
  github: "agkozak/zcomet",
  license: ["MIT"],
  site: "https://zcomet.io",
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: [
    "zsh",
    "zsh-plugin-manager",
    "plugin-manager",
    "package-manager",
    "zshrc",
    "zsh-configuration",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zcomet.zsh"],
  },
};

export default plugin;
