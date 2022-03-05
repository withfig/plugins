const plugin: Fig.Plugin = {
  name: "lets",
  type: "shell",
  description: "A zsh completion plugin for Lets",
  github: "lets-cli/lets-zsh-plugin",
  shells: ["zsh"],
  tags: [
    "bash",
    "zsh",
    "completion",
    "zsh-plugins",
    "lets",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
