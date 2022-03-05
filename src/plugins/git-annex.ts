const plugin: Fig.Plugin = {
  name: "git-annex",
  type: "shell",
  description: "zsh completion for git-annex",
  github: "Schnouki/git-annex-zsh-completion",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
