const plugin: Fig.Plugin = {
  icon: "💾",
  name: "antidote_mattmc3",
  type: "shell",
  description: "The fast, native, Zsh plugin manager",
  authors: [
    {
      name: "mattmc3",
      github: "mattmc3",
    },
  ],
  github: "mattmc3/antidote",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: ["zsh", "zsh-plugin", "dotfiles", "zsh-plugin-manager", "shell"],
  installation: {
    origin: "github",
    sourceFiles: ["antidote.zsh"],
  },
};

export default plugin;
