const plugin: Fig.Plugin = {
  name: "boss-git",
  type: "shell",
  description: "ZSH plugin for managing git",
  github: "bossjones/boss-git-zsh-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
