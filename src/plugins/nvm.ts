const plugin: Fig.Plugin = {
  name: "nvm",
  type: "shell",
  description: "Zsh plugin for installing, updating and loading nvm",
  github: "lukechilds/zsh-nvm",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "nvm",
    "version-manager",
    "zplug",
    "antigen",
    "zgen",
    "zsh-plugin",
    "zsh-plugins",
    "zim",
    "zsh-nvm",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
