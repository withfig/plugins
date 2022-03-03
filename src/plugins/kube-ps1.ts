const plugin: Fig.Plugin = {
  name: "kube-ps1",
  type: "shell",
  description: "Kubernetes prompt info for bash and zsh",
  github: "jonmosco/kube-ps1",
  shells: ["zsh"],
  tags: [
    "bash",
    "kubernetes",
    "zsh",
    "kubectl",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
