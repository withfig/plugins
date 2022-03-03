const plugin: Fig.Plugin = {
  name: "docker (chr-fritz)",
  type: "shell",
  description: "ZSH Plugin to load the completions for docker and docker-compose from the Docker for Mac app.",
  github: "chr-fritz/docker-completion.zshplugin",
  shells: ["zsh"],
  tags: [
    "plugin",
    "docker",
    "zsh",
    "completion",
    "zsh-plugin",
    "zsh-completions",
    "docker-completion",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
