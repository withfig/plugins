const plugin: Fig.Plugin = {
  name: "switch-git",
  type: "shell",
  description: "ZSH plugin for easy switching between git repositories and branches.",
  github: "robin-mbg/switch-git",
  shells: ["zsh"],
  tags: [
    "git",
    "zsh",
    "oh-my-zsh",
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
