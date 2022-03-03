const plugin: Fig.Plugin = {
  name: "git-worktree",
  type: "shell",
  description: "An interactive ZSH plugin that wraps some git operations for simplicity and productivity. Also, it contains completions and combines the FZF tool to make the operations more convenient.",
  github: "alexiszamanidis/zsh-git-fzf",
  shells: ["zsh"],
  tags: [
    "plugin",
    "git",
    "bash",
    "zsh",
    "productivity",
    "script",
    "fzf",
    "zsh-plugin",
    "completions",
    "worktree",
    "git-worktree",
    "zsh-git-worktree",
    "git-operations",
    "git-interactive",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
