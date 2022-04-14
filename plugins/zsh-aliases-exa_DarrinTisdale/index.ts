const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "zsh-aliases-exa_DarrinTisdale",
  displayName: "Zsh Aliases Exa",
  type: "shell",
  description: "zsh plugin adding aliases for the exa command-line tool",
  authors: [
    {
      name: "DarrinTisdale",
      github: "DarrinTisdale",
      twitter: "DarrinTisdale",
    },
  ],
  github: "DarrinTisdale/zsh-aliases-exa",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Alias"],
  keywords: ["exa"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-aliases-exa.plugin.zsh"],
    dependencies: [
      {
        type: "binary",
        name: "exa",
      },
    ],
  },
};

export default plugin;
