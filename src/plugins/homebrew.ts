const plugin: Fig.Plugin = {
  name: "homebrew",
  type: "shell",
  description: "An alternative Homebrew plugin for Oh My Zsh",
  github: "digitalraven/omz-homebrew",
  shells: ["zsh"],
  tags: [
    "homebrew",
    "brew",
    "oh-my-zsh",
    "zsh-plugin",
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
