const plugin: Fig.Plugin = {
  name: "codespaces-theme",
  displayName: "Codespaces Theme",
  type: "shell",
  github: "nickshanks347/codespaces-theme",
  description: "GitHub Codespaces ZSH Theme",
  shells: ["zsh"],
  categories: ["Prompt"],
  authors: [
    {
      name: "Nick",
      github: "nickshanks347",
    },
  ],
  installation: {
    origin: "github",
    sourceFiles: ["codespaces.zsh-theme"],
  },
};
export default plugin;
