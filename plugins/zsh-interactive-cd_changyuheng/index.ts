const plugin: Fig.Plugin = {
  icon: "⭐️",
  name: "zsh-interactive-cd_changyuheng",
  displayName: "Zsh Interactive cd",
  type: "shell",
  description: "Fish like interactive tab completion for cd in zsh",
  authors: [
    {
      name: "changyuheng",
      github: "changyuheng",
    },
  ],
  github: "changyuheng/zsh-interactive-cd",
  license: ["MPL-2.0"],
  shells: ["zsh"],
  categories: ["Completion"],
  keywords: ["fzf", "cd", "interactive"],
  installation: {
    origin: "github",
    dependencies: [
      {
        name: "fzf",
        type: "binary",
      },
    ],
    sourceFiles: ["zsh-interactive-cd.plugin.zsh"],
  },
};

export default plugin;
