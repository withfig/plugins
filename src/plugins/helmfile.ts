const plugin: Fig.Plugin = {
  name: "helmfile",
  type: "shell",
  description: "helmfile auto-completion",
  github: "Downager/zsh-helmfile",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
