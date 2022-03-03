const plugin: Fig.Plugin = {
  name: "git-prune (seinh)",
  type: "shell",
  description: "Plugin of oh-my-zsh for deleting branches already merged in your git repositories",
  github: "diazod/git-prune",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
