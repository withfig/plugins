const plugin: Fig.Plugin = {
  name: "betterbrew-zsh-plugin_timothyrowan",
  type: "shell",
  description: "better command aliases for the macOS Homebrew Package Manager in zsh",
  authors: [
    {
      name: "timothyrowan",
      github: "timothyrowan",
    }
  ],
  github: "timothyrowan/betterbrew-zsh-plugin",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["betterbrew.plugin.zsh"],
  },
};

export default plugin;
