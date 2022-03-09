const plugin: Fig.Plugin = {
  name: "kube-ps1",
  type: "shell",
  description: "Kubernetes prompt info for bash and zsh",
  authors: [
    {
      name: "jonmosco",
      github: "jonmosco",
    },
  ],
  github: "jonmosco/kube-ps1",
  license: ["Apache-2.0"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: ["kubernetes", "kubectl", "zsh", "bash"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["kube-ps1.sh"],
      postScript: "PS1='[\\u@\\h \\W $(kube_ps1)]\\$ '",
    },
    zsh: {
      sourceFiles: ["kube-ps1.sh"],
      postScript: "PROMPT='$(kube_ps1)'$PROMPT",
    },
  },
};

export default plugin;
