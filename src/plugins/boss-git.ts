const plugin: Fig.Plugin = {
  name: "boss-git",
  type: "shell",
  description: "ZSH plugin for managing git",
  github: "bossjones/boss-git-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
