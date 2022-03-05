const plugin: Fig.Plugin = {
  name: "git-tree",
  type: "shell",
  description: "zsh plugin to work with git worktrees",
  github: "dehlen/git-tree-zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
