const plugin: Fig.Plugin = {
  icon: "⭐️",
  name: "git-annex-zsh-completion_Schnouki",
  displayName: "Git Annex Zsh Completion",
  type: "shell",
  description: "zsh completion for git-annex",
  authors: [
    {
      name: "Schnouki",
      github: "Schnouki",
      twitter: "Schnouki",
    },
  ],
  github: "Schnouki/git-annex-zsh-completion",
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["git-annex.plugin.zsh"],
  },
};

export default plugin;
