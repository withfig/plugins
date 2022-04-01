const plugin: Fig.Plugin = {
  name: "git-aliases.zsh_peterhurford",
  type: "shell",
  description: "Useful aliases for interacting with GitHub more quickly.",
  authors: [
    {
      name: "peterhurford",
      github: "peterhurford",
    }
  ],
  github: "peterhurford/git-aliases.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["git-aliases.plugin.zsh"],
  },
};

export default plugin;
