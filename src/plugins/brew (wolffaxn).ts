const plugin: Fig.Plugin = {
  name: "brew (wolffaxn)",
  type: "shell",
  description: "ZSH plugin for the Homebrew Package Manager.",
  github: "wolffaxn/brew-zsh-plugin",
  shells: ["zsh"],
  tags: [
    "zsh",
    "homebrew",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
