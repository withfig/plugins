const plugin: Fig.Plugin = {
  name: "bosh-zsh-autocompletion",
  type: "shell",
  description: "Oh My Zsh plugin for BOSH autocompletion",
  github: "krujos/bosh-zsh-autocompletion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
