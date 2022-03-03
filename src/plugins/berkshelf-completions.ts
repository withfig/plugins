const plugin: Fig.Plugin = {
  name: "berkshelf-completions",
  type: "shell",
  description: "A oh-my-zsh plugin for berkshelf command completion.",
  github: "berkshelf/berkshelf-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
