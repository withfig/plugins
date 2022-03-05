const plugin: Fig.Plugin = {
  name: "betterbrew",
  type: "shell",
  description: "better command aliases for the macOS Homebrew Package Manager in zsh",
  github: "timothyrowan/betterbrew-zsh-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
