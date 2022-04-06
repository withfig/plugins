const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "kubectl-fzf_bonnefoa",
  type: "shell",
  description: "A fast kubectl autocompletion with fzf",
  authors: [
    {
      name: "bonnefoa",
      github: "bonnefoa",
    },
  ],
  github: "bonnefoa/kubectl-fzf",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Completion"],
  keywords: [
    "fzf",
    "kubernetes",
    "kubectl",
    "fuzzy-search",
    "bash",
    "autocompletion",
    "completion",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["kubectl_fzf.bash"],
    },
    zsh: {
      sourceFiles: ["kubectl_fzf.plugin.zsh"],
    },
  },
};

export default plugin;
