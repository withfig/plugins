const plugin: Fig.Plugin = {
  name: "rake-completion",
  type: "shell",
  description: "rake task tab completion plugin for zsh, suitable for use with zgen and other oh-my-zsh compatible frameworks",
  github: "unixorn/rake-completion.zshplugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
