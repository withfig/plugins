const plugin: Fig.Plugin = {
  name: "kubecolor (droctothorpe)",
  type: "shell",
  description: "Simplify and colorize the output of kubectl get events -w",
  github: "droctothorpe/kubecolor",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
