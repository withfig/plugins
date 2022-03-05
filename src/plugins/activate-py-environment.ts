const plugin: Fig.Plugin = {
  name: "activate-py-environment",
  type: "shell",
  description: "ZSH plugin that automagically detects and activates your python environments (poetry, virtualenv, conda) while traversing directories.",
  github: "se-jaeger/zsh-activate-py-environment",
  shells: ["zsh"],
  tags: [
    "python",
    "zsh",
    "poetry",
    "conda",
    "virtualenv",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
