const plugin: Fig.Plugin = {
  name: "gitignore.plugin.zsh_voronkovich",
  type: "shell",
  description: "ZSH plugin for creating .gitignore files.",
  authors: [
    {
      name: "voronkovich",
      github: "voronkovich",
    },
  ],
  github: "voronkovich/gitignore.plugin.zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh-plugin", "gitignore", "zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["gitignore.plugin.zsh"],
  },
};

export default plugin;
