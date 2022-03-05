const plugin: Fig.Plugin = {
  name: "kubectl-fzf",
  type: "shell",
  description: "A fast kubectl autocompletion with fzf",
  github: "bonnefoa/kubectl-fzf",
  shells: ["zsh"],
  tags: [
    "bash",
    "kubernetes",
    "autocompletion",
    "fzf",
    "completion",
    "fuzzy-search",
    "kubectl",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
