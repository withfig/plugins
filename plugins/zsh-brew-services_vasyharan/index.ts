const plugin: Fig.Plugin = {
  name: "zsh-brew-services_vasyharan",
  type: "shell",
  description: "oh-my-zsh command completion plugin for homebrew services",
  authors: [
    {
      name: "vasyharan",
      github: "vasyharan",
    },
  ],
  github: "vasyharan/zsh-brew-services",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-brew-services.plugin.zsh"],
  },
};

export default plugin;
