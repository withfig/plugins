const plugin: Fig.Plugin = {
  name: "fresh_freshshell",
  displayName: "fresh",
  type: "shell",
  description: "Keep your dotfiles fresh.",
  authors: [
    {
      name: "freshshell",
      github: "freshshell",
    },
  ],
  github: "freshshell/fresh",
  site: "https://freshshell.com/",
  shells: ["bash", "zsh"],
  categories: ["Framework"],
  keywords: ["dotfiles", "fresh", "freshrc"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["install.sh"],
    },
    zsh: {
      sourceFiles: ["install.sh"],
    },
  },
};

export default plugin;
