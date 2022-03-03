const plugin: Fig.Plugin = {
  name: "worktree",
  type: "shell",
  description: "zsh plugins for working with git worktree",
  github: "jspears/worktree",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
