const plugin: Fig.Plugin = {
  name: "zsh-interactive-cd_changyuheng",
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
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-interactive-cd.plugin.zsh"],
  },
};

export default plugin;
