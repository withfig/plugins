const plugin: Fig.Plugin = {
  name: "batect",
  type: "shell",
  description: "Shell tab completion for Zsh",
  github: "batect/batect-zsh-completion",
  shells: ["zsh"],
  tags: [
    "zsh",
    "completion",
    "hacktoberfest",
    "batect",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
