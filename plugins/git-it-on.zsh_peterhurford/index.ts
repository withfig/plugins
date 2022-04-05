const plugin: Fig.Plugin = {
  name: "git-it-on.zsh_peterhurford",
  displayName: "Git It On",
  type: "shell",
  description: "Quickly navigate GitHub from the command line.",
  authors: [
    {
      name: "peterhurford",
      github: "peterhurford",
    },
  ],
  github: "peterhurford/git-it-on.zsh",
  shells: ["zsh"],
  categories: ["Convenience Function"],
  installation: {
    origin: "github",
    sourceFiles: ["git-it-on.plugin.zsh"],
  },
};

export default plugin;
