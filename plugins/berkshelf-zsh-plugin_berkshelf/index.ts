const plugin: Fig.Plugin = {
  name: "berkshelf-zsh-plugin_berkshelf",
  displayName: "Berkshelf Zsh Plugin",
  description: "A oh-my-zsh plugin for berkshelf command completion.",
  icon: "🚀",
  type: "shell",
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
