const plugin: Fig.Plugin = {
  name: "interactive-cd",
  type: "shell",
  description: "Fish like interactive tab completion for cd in zsh",
  github: "changyuheng/zsh-interactive-cd",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
