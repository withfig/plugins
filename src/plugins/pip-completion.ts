const plugin: Fig.Plugin = {
  name: "pip-completion",
  type: "shell",
  description: "ZSH completions for pip",
  github: "srijanshetty/zsh-pip-completion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
