const plugin: Fig.Plugin = {
  name: "bosh-zsh-autocompletion",
  type: "shell",
  description: "Oh My Zsh plugin for BOSH autocompletion",
  github: "krujos/bosh-zsh-autocompletion",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
