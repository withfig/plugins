const plugin: Fig.Plugin = {
  name: "alias-tips-zsh_dmitmel",
  displayName: "Alias Tips ZSH",
  icon: "💡",
  type: "shell",
  description:
    "A ZSH plugin that reminds you that there are shorter aliases for your command.",
  screenshots: ["images/1.png", "images/2.png"],
  authors: [
    {
      name: "dmitmel",
      github: "dmitmel",
    },
  ],
  github: "dmitmel/dotfiles",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh/alias_tips.zsh"],
  },
};

export default plugin;
