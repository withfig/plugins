const plugin: Fig.Plugin = {
  name: "brew-services",
  type: "shell",
  description: "oh-my-zsh command completion plugin for homebrew services",
  github: "vasyharan/zsh-brew-services",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
