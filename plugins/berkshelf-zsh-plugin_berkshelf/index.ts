const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "berkshelf-zsh-plugin_berkshelf",
  type: "shell",
  description: "A oh-my-zsh plugin for berkshelf command completion.",
  authors: [
    {
      name: "berkshelf",
      github: "berkshelf",
    },
  ],
  github: "berkshelf/berkshelf-zsh-plugin",
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["berkshelf.plugin.zsh"],
  },
};

export default plugin;
