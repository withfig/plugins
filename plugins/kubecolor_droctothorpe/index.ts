const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "kubecolor_droctothorpe",
  displayName: "Kube Color",
  type: "shell",
  description: "Simplify and colorize the output of kubectl get events -w",
  authors: [
    {
      name: "droctothorpe",
      github: "droctothorpe",
    },
  ],
  github: "droctothorpe/kubecolor",
  shells: ["bash", "zsh"],
  categories: ["Color"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["kubecolor.bash"],
    },
    zsh: {
      sourceFiles: ["kubecolor.plugin.zsh"],
    },
  },
};

export default plugin;
