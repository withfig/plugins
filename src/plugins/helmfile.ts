const plugin: Fig.Plugin = {
  name: "helmfile",
  type: "shell",
  description: "helmfile auto-completion",
  github: "Downager/zsh-helmfile",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
