const plugin: Fig.Plugin = {
  name: "kubectl",
  type: "shell",
  description: "ZSH plugin for managing kubectl",
  github: "mattbangert/kubectl-zsh-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
