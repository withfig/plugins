const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "rake-completion.zshplugin_unixorn",
  displayName: "Rake Completion",
  type: "shell",
  description:
    "rake task tab completion plugin for zsh, suitable for use with zgen and other oh-my-zsh compatible frameworks",
  authors: [
    {
      name: "unixorn",
      github: "unixorn",
      twitter: "curiousbiped",
    },
  ],
  github: "unixorn/rake-completion.zshplugin",
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["rake_completion.plugin.zsh"],
  },
};

export default plugin;
