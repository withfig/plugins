const plugin: Fig.Plugin = {
  name: "betterbrew-zsh-plugin_timothyrowan",
  displayName: "BetterBrew Zsh Plugin",
  description:
    "Better command aliases for the macOS Homebrew Package Manager in zsh",
  icon: "🍺",
  type: "shell",
  authors: [
    {
      name: "timothyrowan",
      github: "timothyrowan",
    },
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
