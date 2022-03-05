const plugin: Fig.Plugin = {
  name: "kubernetes",
  type: "shell",
  description: "Kubernetes Aliases and Bash Functions",
  github: "Dbz/kube-aliases",
  shells: ["zsh"],
  tags: [
    "shell",
    "bash",
    "kubernetes",
    "zsh",
    "oh-my-zsh",
    "devops",
    "autocomplete",
    "metrics",
    "cluster",
    "namespace",
    "k8s",
    "command-line-tool",
    "kubectl",
    "zsh-plugin",
    "oh-my-zsh-plugin",
    "kubernetes-commands",
    "kubernetes-metrics-server",
    "namespace-switching",
    "switching-contexts",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
