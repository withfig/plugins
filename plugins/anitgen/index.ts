const plugin: Fig.Plugin = {
  icon: "💾",
  name: "antigen",
  type: "shell",
  description: "The plugin manager for zsh.",
  authors: [
    {
      name: "zsh-users",
      github: "zsh-users",
    },
  ],
  github: "zsh-users/antigen",
  license: ["MIT"],
  site: "http://antigen.sharats.me",
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: ["shell", "package-manager", "zsh", "plugin-manager"],
  installation: {
    origin: "github",
    sourceFiles: ["antigen.zsh"],
  },
};

export default plugin;
