const plugin: Fig.Plugin = {
  name: "operator",
  type: "shell",
  description: "Theme for ZSH and oh-my-zsh",
  github: "nivv/operator-theme",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "iterm2",
    "oh-my-zsh-theme",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
