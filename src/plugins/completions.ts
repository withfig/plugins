const plugin: Fig.Plugin = {
  name: "completions",
  type: "shell",
  description: "Additional completion definitions for Zsh.",
  github: "zsh-users/zsh-completions",
  shells: ["zsh"],
  tags: [
    "shell",
    "zsh",
    "completion",
    "zsh-completions",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
