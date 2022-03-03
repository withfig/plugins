const plugin: Fig.Plugin = {
  name: "tmux-rename",
  type: "shell",
  description: "A ZSH plugin to rename tmux window automatically.",
  github: "sei40kr/zsh-tmux-rename",
  shells: ["zsh"],
  tags: [
    "zsh",
    "tmux",
    "zsh-plugins",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
