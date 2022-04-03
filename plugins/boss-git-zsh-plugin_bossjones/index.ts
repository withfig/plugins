const plugin: Fig.Plugin = {
  name: "boss-git-zsh-plugin_bossjones",
  type: "shell",
  description: "ZSH plugin for managing git",
  authors: [
    {
      name: "bossjones",
      github: "bossjones",
    },
  ],
  github: "bossjones/boss-git-zsh-plugin",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["boss-git.plugin.zsh"],
  },
};

export default plugin;
