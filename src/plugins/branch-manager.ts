const plugin: Fig.Plugin = {
  name: "branch-manager",
  type: "shell",
  description: "oh-my-zsh plugin for managing branches",
  github: "elstgav/branch-manager",
  shells: ["zsh"],
  tags: [
    "git",
    "oh-my-zsh",
    "zsh-plugins",
    "oh-my-zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
